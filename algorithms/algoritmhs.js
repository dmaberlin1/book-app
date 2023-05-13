let arrSorted = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
let arrUnsort=[300,1,-3,18,100,-4,8,-10,30,-55,99,14]
let counter = 0

function linearSearch(arr, arg) {
    let position = -1
    for (let i = 0; i <= arr.length; i++) {
        counter++
        if (arg === arr[i]) {
            return position = i
        }
    }
    return position
}

let counter1 = 0

function binarySearch(array, elemFind) {
    let middle, find = false, start = 0, end = array.length, position = -1;
    while (find === false && start <= end) {
        counter1++
        middle = Math.floor((start + end) / 2)
        if (elemFind === array[middle]) {
            find = true;
            return position = middle
        }
        if (elemFind < array[middle]) end = middle - 1
        else start = middle + 1
    }
    return position
}

// console.log(counter1, binarySearch(arr, 13))


function recursiveBinary_1(arr, arg, start, end) {
    let middle = Math.floor((start + end) / 2)
    if (arg === arr[middle]) return middle
    if(arg<arr[middle]) return recursiveBinary_1(arr,arg,start,middle-1)
    else return recursiveBinary_1(arr,arg,middle+1,end)
}

// console.log(recursiveBinary_1(arrSorted,14,0,arrSorted.length))


function bubbleSort_1(arr) {
    for(let i=0;i<arr.length;i++){

        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
            let temp=arr[j] //10
            arr[j]=arr[j+1]   //5
            arr[j+1]=temp //10   , таким образом 10 всплывает на верх
            }
        }
    }
    return arr
}

console.log(bubbleSort_1(arrUnsort))












