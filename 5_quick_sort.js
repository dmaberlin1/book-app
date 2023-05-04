//быстрая сортировка, Сортировка Хоара
// работает за логарифт умноженный на n, количество элементов в массиве
// //работает методом разделяй и властвуй, рекурсивно
//суть в том что мы делим массив на под массивы, и каждый раз рекурсивно,мы выбираем опорный элем, у каждого массива.
// можно выбрать случайно, но чаще всего берут центральный.Пробегаемся по массиву и все элемы, которые по значению
// меньше чем опорный, добавляем в один массив; все которые больше добавляем в другой массив
// после такой операции у нас получается два массива, с меньшими числами, и с большими числами - Чем опорный элем
// для каждого из этих массивов выполняется точно такая же операция, в каждом из этих подмассивов выбирается опорный
// элемент и происходит сортировка, и так делается до тех пор, пока длина массива не станет единица,именно это условие
// и будет базовым случаем выхода из рекурсии
// и после всех этих  операций, все эти маленькие подмассивы склеиваются в один большой
const arrToSort = [6, 4, 3, 1, 7, 8, 4, 4, 3, 9, -5, -4, -2, 32, 36, 11, 24, -4, 100, 152, -30, 300, 2]


let counter = 0

function quickSort(arr) {
    // если остался один элем в массиве, его можно возвращать
    if (arr.length <= 1) return arr
    //высчитываем  середину массива=Пивот
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < arr.length; i++) {
        counter++
        if (i === pivotIndex) continue;
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

// console.log(quickSort(arrToSort))
// console.log(counter)


let counter1 = 0

function quickSort1(array) {
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    if (array.length < 1) return arr
    for (let i = 0; i < array.length; i++) {
        counter1++
        if (array[i] < pivot) less.push(array[i])
        else greater.push(array[i])
    }
    return arr = [...quickSort1(less), pivot, ...quickSort1(greater)]
}

// console.log(quickSort1(arrToSort))
// console.log(counter1)
//
//


const arrToSort_1 = [-1000, -1001, 500, 300, 800, 404, -1002, 3, 2, 1]

function quickSort_1(arr) {
    let less = [], greater = [];
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]
    if (arr.length <= 1) return arr
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue
        arr[i] < pivot ? less.push(arr[i]) : greater.push(arr[i])
    }
    return [...quickSort_1(less), pivot, ...quickSort_1(greater)]
}

// console.log(quickSort_1(arrToSort_1))


let arrToSort_2 = [1, 100, 500, -300, -10000, 2, 60, 33, 667, 11111, -1, -500, 500]
let count=0
function HoareSort(arr) {
    let less = [], greater = []
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]
    if (arr.length <= 1) return arr
    for (let i = 0; i < arr.length; i++) {
        count++
        if (i === pivotIndex) continue
        arr[i] > pivot ? greater.push(arr[i]) : less.push(arr[i])
    }
    return [...HoareSort(less),pivot,...HoareSort(greater)]
}
console.log(HoareSort(arrToSort_2))
console.log(count)




