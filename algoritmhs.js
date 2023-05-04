
let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
let counter=0
function linearSearch(arr,arg) {
    let position=-1
    for(let i=0;i<=arr.length;i++){
        counter++
        if(arg===arr[i]){
           return position=i
        }
    }
    return position
}

let counter1=0
function binarySearch(array,elemFind) {
    let middle,find=false,start=0,end=array.length,position=-1;
    while (find===false&&start<=end){
        counter1++
        middle=Math.floor((start+end)/2)
        if(elemFind===array[middle]){
            find=true;
            return position=middle
        }
        if(elemFind<array[middle])end=middle-1
        else start=middle+1
    }
    return position
}

console.log(counter1,binarySearch(arr,13))
















