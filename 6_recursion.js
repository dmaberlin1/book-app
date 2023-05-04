//напомню  факториал от 5 это когда числа умножаются последовательно до пятёрки
// Когда функция не может рекурсивно вызвать себя больше, она просто заканчивает свое выполнение, и значение не возвращается вызывающей стороне. В этом случае, результатом функции будет undefined.


const factorial = n => {
    if (n === 1) return 1;
    //фция должна возвращать число которое мы передали,умноженную на фцию, в которую мы передаем число на единицу
    // меньшую чем данное в условии число
    //фция будет вызываться до тех пор , пока n не будет равняться единице
    return n * factorial(n - 1)

}

console.log(factorial(6))


function factorial1(arg) {
    if (arg === 1) return 1
    else if (arg < 1) return undefined


    return arg * factorial1(arg - 1)
}

console.log(factorial1(-5))


function factorial2(value) {
    if (value === 1 || value === 0) return 1
    else if (value < 1) {
        let tempVal = Math.abs(value)
        return tempVal * factorial2(tempVal - 1)
    }
    return value * factorial2(value - 1)
}

console.log(factorial2(0))


function factorial3(arg) {
    if (arg === 1) return 1
    if (arg === 0) return 0
    if (arg < 0) {
        let tmpArg = Math.abs(arg)
        return tmpArg * factorial3(tmpArg - 1)
    }
    return arg * factorial3(arg - 1)
}


console.log(factorial3(3))


//Числа фибоначчи- определённая цепочка чисел, где каждая последующее число = сумме двух предыдущих
// fibonachi - 1,1,2,3,5,8,13,21,33,54,87

const fibonachi = (n) => {
    //начинаем фцию с того , чтобы определить базовый случай
    //где n номер числа в цепочке
    if (n === 1 || n === 2) return 1

    return fibonachi(n - 1) + fibonachi(n - 2)
}

console.log(fibonachi(6))


function fibonachi1(numAmount) {
    if (numAmount === 1 || numAmount === 2) return 1

    return fibonachi1(numAmount - 1) + fibonachi1(numAmount - 2)
}

console.log(fibonachi1(6))


function fibonachi3(num) {
    if (num === 1 || num === 2) return 1
    return fibonachi3(num - 1) + fibonachi3(num - 2)
}

console.log(` чисел  в списке до '11' - ${fibonachi3(11)} - тоесть это число фибоначи для '11'`)




function factorial4(num) {
    if(num===1) return 1
    if(num===0)return 0
    if(num<0){
        let tmpNum=Math.abs(num)
        return tmpNum * factorial4(tmpNum-1)
    }
   return num * factorial4(num-1)
}

console.log(factorial4(0))
console.log(factorial4(-3))






function factorial_1(arg) {
    if(arg===1)return 1
    if(arg===0)return 0
    if(arg<0) {
        let tmpArg=Math.abs(arg)
        if(tmpArg===1) return 1
        return tmpArg * factorial_1(tmpArg-1)
    }
    return arg * factorial_1(arg-1)
}

console.log(factorial_1(-5))
console.log(factorial_1(4))
console.log(factorial_1(0))




