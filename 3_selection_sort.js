//сортировка алгоритмом выбора
//сортировка выбором
//кол-во итераций теоретически  = квадрату длины массива O(n2) - O от n в квадрате,
// но есть коэффициент, поэтому итераций меньше, за счет внутреннего цикла

const arr=[1,10,2,12]
const arrUnsort=[6,4,3,1,7,8,4,4,3,9,-5,-4,-2,32,36,11,24,-4]
let count=0
function selectionSort(arr) {
    for(let i=0;i<arr.length;i++){
        let indexMin=i
        for(let j=i+1;j<arr.length;j++){
            //если текущий элемент итерации меньше, чем элемент с минимальным индексом,то тогда мы этот мининдекс
            //заменяем на текущий индекс итерации, за полный проход по массиву мы должны найти минимальное число
            // и запомнить индекс минЧисла
            if(arr[j]<arr[indexMin]){
                indexMin=j
            }
            count++
        }
        //эта махинация нужна чтобы поменять два элема местами
        let tmp=arr[i]
        arr[i]=arr[indexMin]
        arr[indexMin]=tmp
    }
    //вернём массив
    return arr
}

// console.log(selectionSort(arrUnsort))
// console.log(count)
// console.log(selectionSort(arr))
// console.log(selectionSort(arrUnsort))


let count1=0
function selectSort1(arr) {
for(let i=0;i<arr.length;i++){
    let minIndex=i
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[minIndex]){
        minIndex=j;
        }
        count1++
    }
 let temp=arr[i]
 arr[i]=arr[minIndex]
 arr[minIndex]=temp
}
    return arr
}


console.log(selectSort1(arrUnsort))


let count2=0;
function selectionSort2(array) {

    for(let i=0;i<array.length;i++){
        let indexMin=i
        for(let j=i+1;j<array.length;j++)   {
            if(array[j]<array[indexMin]) indexMin = j
            count2++
        }

    let temp=array[i]
    array[i]=array[indexMin]
    array[indexMin]=temp
    }
    return array
}

console.log(selectionSort2(arrUnsort))



let count3=0
function selectionSort3(arr) {
    for(let i=0;i<arr.length;i++){
        let minIndex=i
        for(let j=i+1;j<arr.length;i++){
            if(arr[j]<arr[minIndex])minIndex=j
            count3++
        }
        let tempValue=arr[i]
        arr[i]=arr[minIndex]
        arr[minIndex]=tempValue
    }
    return arr
}
console.log(selectionSort3(arrUnsort))




let counter4=0;
function selectionSort4(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
                if(arr[j]<arr[minIndex]) minIndex=j;
                counter4++
        }

        let tempData=arr[i]
        arr[i]=arr[minIndex]
        arr[minIndex]=tempData
    }
    return arr
}

console.log(selectionSort4(arrUnsort))









