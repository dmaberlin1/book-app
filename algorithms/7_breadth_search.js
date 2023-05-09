
//поиск в ширину в графе
// в этом алго будет использована структура данных очередь FIFO -FIRST IN FIRST OUT
const graph={}
graph.a=['b','c']
graph.b=['f']
graph.c=['d','e']
graph.d=['f']
graph.e=['f']
graph.f=['g']

function breadthSearch(graph,start,end) {
    let queue=[]  //очередь
    queue.push(start)
    while(queue.length>0){
        const current=queue.shift()    //извлекаем первый элемент из массива
        //на первой итерации это будет стартовая вершина
        //если по текущей вершине ничего не находиться, то мы присвоим ей пустой массив
        //тоесть из этой вершины- никуда пути нету,делаем для того чтобы при обработке, программа не сломалась
        if(!graph[current]){
            graph[current]=[]
        }
        //если в графе по текущей вершине массив содержит конечную точку

        if(graph[current].includes(end)){
            return true
        }
        //если это условие не отработало, мы должны добавить в очередь новые вершины,разворачиваем что уже есть
        //     и в конец разворачиваем массив который лежит в графе по текущей вершине
        else{
            queue=[...queue,...graph[current]]
        }
    }
}

console.log(breadthSearch(graph,'a','g'))




function breadthSearch_1(graph,start,end) {
    let queue=[];
    queue.push(start)
    while (queue.length>0){
        const current=queue.shift()
        if(!graph[current]) graph[current]=[]
        if(graph[current].includes(end)) return true
        else queue=[...queue,...graph[current]]
    }

}

console.log(breadthSearch_1(graph,'a','f'))


function breadthSearch_2(graph,first,last) {
    let queue=[]
    queue.push(first)
    while(queue.length>0){
        let current=queue.shift()
        if(!graph[current]) graph[current]=[]
        if(graph[current].includes(last))return true
        else queue=[...queue,...graph[current]]
    }

}

console.log(breadthSearch_2(graph,'a','b'))

const graph1={}
graph1.a=['b','c']
graph1.b=['f']
graph1.c=['d','e']
graph1.d=['f']
graph1.e=['f']
graph1.f=['g']

function breadthSearch_3(graph,start,end) {
    let queue=[]
    queue.push(start)
    while(queue.length>0){
        let current=queue.shift()
        if(!graph[current])graph[current]=[]
        if(graph[current].includes(end)) return true
        else queue=[...queue,...graph[current]]
    }
}

console.log(breadthSearch_3(graph1,'a','g'))
































