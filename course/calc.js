'use strict';
//// ----IIFE (IIFunc Expression) в модулях,старый способ
// const APP={};
//
// (function () {
//     const a=1;
//
//     function add(f,s) {
//         return f+s
//     }
//     function sub(f,s) {
//         return f-s
//     }
//     APP.calc={
//         add,
//         sub
//     }
// })()
//-------------модули common js
// function add(f,s) {
//     return f+s
// }
// function sub(f,s) {
//     return f-s;
// }
//
// module.exports={add,sub};

// ------------------ES6 модули, самая современная реализация

export function add(f,s){
    return f+s
}
export function sub(f,s){
    return f-s
}
//
// setTimeout(()=>{
//     add=function (s,f) {
//         return s*f
//     }
// },1500)

//------------await на верхнем уровне---------- новая фича с es2022

//  async function getProducts() {
//     const res=await fetch('https://dummyjson.com/products')
//     return res.json()
// }
//
// export const res=await getProducts()
