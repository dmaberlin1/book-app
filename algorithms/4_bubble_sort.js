//в двойном цикле пробегаемся по всему массиву и сравниваем попарно лежащие элемы, если след элем меньше пред.
//мы меняем их местами, получается своего рода всплытие, самый большой элемент с каждой итерацией потихоньку
// всплывает на верх
//кол-во итераций = квадрату длины массива O(n2) - O от n в квадрате

const arrToSort=[6,4,3,1,7,8,4,4,3,9,-5,-4,-2,32,36,11,24,-4,100,152,-30,300,2]


let counter=0
function bubbleSort(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j+1]<arr[j]){
                let tmp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
            counter++;
        }
    }
    return arr
}

console.log(bubbleSort(arrToSort),counter)



let counter1=0
function bubbleSort1(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
              let tempData=arr[j]
              arr[j]=arr[j+1]
              arr[j+1]=tempData
            }
            counter1++
        }
    }
    return arr
}

console.log(bubbleSort1(arrToSort),counter1)


let counter3=0;
function bubbleSort3(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let tmp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
            counter3++
        }
    }

    return arr
}

console.log(bubbleSort3(arrToSort),counter3)







