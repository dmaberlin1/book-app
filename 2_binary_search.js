'use strict'

const arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let counter=0;
function binarySearch(array,findItem) {
        let middle,position=-1,start=0,end=array.length,find=false;

    while(find===false&&start<=end){
        counter++
        middle=Math.floor((start+end)/2)
        if(findItem===array[middle]){
            find=true
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


console.log(binarySearch(arr,20))
console.log(counter)




let counter1=0;
function binarySearch2(arr,findElem) {
    let start=0,end=arr.length,position=-1,middle,find=false

    while(find===false&&start<=end){
        counter1++
        middle=Math.floor((start+end)/2)
        if(findElem===arr[middle]){
            find=true
            return position=middle
        }
        if(findElem<arr[middle]){
            end=middle-1
        }
        else{
            start=middle+1
        }
    }
    return position
}


console.log(binarySearch2(arr,2))
console.log(counter1)









