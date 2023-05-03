'use strict'

//linear

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let counter = 0

function linearSearch(arr, arg) {

    for (let i = 0; i < arr.length; i++) {
        counter++
        if (arr[i] == arg) return i
    }
    return null;
}

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


let count = 0;

function binarySearch(arr, item) {
    let start = 0
    let end = arr.length
    let middle
    let found = false
    let position = -1;
    while (found === false && start <= end) {
        count++
        middle = Math.floor((start + end) / 2)
        if (arr[middle] === item) {
            found = true
            position = middle
            return position;
        }
        if (item < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;

}

console.log(binarySearch(arr1, 4))
console.log(count)

let count1 = 0

function binarySearch1(arr, item) {
    let start = 0
    let end = arr.length;
    let position = -1;
    let middle;
    let found = false
    while (found === false && start <= end) {
        count1++
        middle = Math.floor((start + end) / 2)
        if (item === arr[middle]) {
            found = true;
            return position = middle;
        }
        if (item < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}


console.log(binarySearch1(arr1, 10))
console.log(count1)


let counter2 = 0

function binarySearch2(arr, item) {
    let found = false
    let start = 0
    let end = arr.length
    let position = -1;
    let middle;

    while (found === false && start <= end) {
        counter2++
        middle = Math.floor((start + end) / 2)
        if (item === arr[middle]) {
            found = true
            return position = middle
        }
        if (item < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}

console.log(binarySearch2(arr1, 3))
console.log(counter2)


let counter4 = 0;
function binarySearch4(arr, item) {
    let position = -1;
    let start = 0;
    let end = arr.length;
    let found = false;
    let middle;
    while (found === false && start <= end) {
        counter4++
        middle = Math.floor((start+end)/2)
        if (arr[middle]===item) {
            found=true;
            return position = middle;
        }
        if (item<arr[middle]) {
            end=middle-1
        } else {
            start=middle+1
        }
    }
    return position
}

console.log(binarySearch4(arr,2))
console.log(counter4)



let counter5=0;
function binarySearch5(arr,item) {
    let position= -1;
    let start=0
    let end=arr.length;
    let found=false
    let middle

    while(found===false&&start<=end){
        counter5++
        middle=Math.floor((start+end)/2)
        if(item===arr[middle]){
            found=true
            return position=middle
        }
        if(item<arr[middle]){
            end=middle-1
        }
        else{
            start=middle+1
        }
    }
    return position
}

console.log(binarySearch5(arr1,1))
console.log(counter5)



let countLine=0
function linearSearch1(arr,item) {
    let find
    for(let i=0;i<=arr.length;i++){
        countLine++
        if(item===arr[i]) return find=i
    }
    return find
}


console.log(linearSearch1(arr1,2))
console.log(countLine)


let counter6=0;
function binarySearch6(array,findItem) {
    let position =-1;
    let middle;
    let find=false
    let start=0;
    let end=array.length

    while(find===false&&start<=end){
        counter6++
        middle=Math.floor((start+end)/2)
        if(findItem===array[middle]){
            find=true;
            return position=middle
        }
        if(findItem<array[middle]){
            end=middle-1
        }
        else{
            start=middle+1
        }
    }
    return position
}


console.log(binarySearch6(arr1,8))
console.log(counter6)


