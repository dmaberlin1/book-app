let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function recursiveBinarySearch(arr, item, start, end) {
    let middle = Math.floor((start + end) / 2)
    if (item === arr[middle]) return middle
    if (item < arr[middle]) return recursiveBinarySearch(arr, item, start, middle - 1)
    else return recursiveBinarySearch(arr, item, middle + 1, end)
}

// console.log(recursiveBinarySearch(arr1, 15, 0, arr1.length))



function recursiveBinary(arr,arg,start,end) {
let middle=Math.floor((start+end)/2)
    if(arr[middle]===arg) return middle
    if(arg<arr[middle]) return recursiveBinary(arr,arg,start,middle-1)
    else return recursiveBinary(arr,arg,middle+1,end)
}

console.log(recursiveBinary(arr1,3,0,arr1.length))








