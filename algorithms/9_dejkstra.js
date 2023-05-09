
const graph={}

graph.a={b:2,c:1}
graph.b={f:7}
graph.c={d:5,e:2}
graph.d={f:2}
graph.e={f:1}
graph.f={g:1}


function shortPath(graph,start,end) {
    let costs={}
    let processed=[]
    let neighbors={}

    //у нашего графа получаем список ключей, это будут все вершины
    Object.keys(graph).forEach(node=>{
        if(node !==start){
            //поскольку граф у нас обьект, у которого есть поля,где каждое поле это вершина
            //и каждое поле так же является обьектом,у которого тоже есть какие то значения
            //это значения мы пытаемся получить у стартовой позиции
            //В данном случаче у вершины А, и получить значение вершины либо Б либо С

            let value=graph[start][node]

            // затем добавить это значения  в табличку , где буду храниться значения кратчайщих путей
            costs[node]=value || 100000000
        }
    })

    let node=findNodeLowestCost(costs,processed)
    while(node){
        const cost=costs[node]
        neighbors=graph[node]
        Object.keys(neighbors).forEach(neighbor=>{
            let newCost=cost+neighbors[neighbor]
            if(newCost<costs[neighbor]){
                costs[neighbor]=newCost
            }
        })
        processed.push(node)
        node=findNodeLowestCost(costs,processed)
    }
    return costs
}

function findNodeLowestCost(costs,processed) {
    let lowestCost=100000000
    let lowestNode;
    Object.keys(costs).forEach(node=>{
        let cost=costs[node]
        if(cost<lowestCost && !processed.includes(node)){
            lowestCost=cost
            lowestNode=node
        }
    })
    return lowestNode
}