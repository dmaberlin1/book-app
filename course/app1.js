'use strict'
const LoadAppTime = Number(performance.now().toFixed(1))
console.log(LoadAppTime);


//**************************Модули в JavaScript (16)****************
//**************************Модули в JavaScript (16)****************
//**************************Модули в JavaScript (16)****************

// ----IIFE (IIFunc Expression) в модулях,старый способ
//
//     (function () {
//
//     })()
//
// const a=2;
// console.log(APP.calc.add(1,3))
// console.log(APP.calc.sub(3,1))
//
//-------------модули common js
//
// const {add,sub}=require('./calc');
//
// console.log(add(1,2))
//

// ------------------ES6 модули, самая современная реализация

// import {sub,add} from './calc.js'
//
// console.log(sub(1,3))

// setInterval(()=>{
//     console.log(add(100,100))
// },1000)

//------------await на верхнем уровне---------- новая фича с es2022
//lop level await, фича новая, но если есть бандлер, то он обернёт для старых браузеров
// import {sub,add,res} from './calc.js'
import{sub,add} from './calc.js'
// async function getProducts() {
//     const res=await fetch('https://dummyjson.com/products')
//     return res.json()
// }


console.log(1)
console.log(sub(100,200))
// console.log(res)
console.log(2)














// ******************Dom & Events***********************
// ******************Dom & Events***********************
// ******************Dom & Events***********************
//  у дома всё наследуется от Event Target  , отдельная цепочка Node и далее
// и отдельная Window, без следующих наследований
//
// const wrapper=document.querySelector('.wrapper')
// for(let i=0;i<=99;i++){
//     const el=document.createElement('div');
//     el.innerHTML=i;
//     wrapper.append(el)
// }
//
// function search(event) {
//     const inputValue=event.target.value;
//     console.log(inputValue)
//     for(const el of [...wrapper.children]){
//         if(el.innerHTML.includes(inputValue)){
//
//             el.classList.add('yellow');
//             continue;
//         }
//         // el.classList.remove('yellow')
//     }
//
// }
//

//
// const el=document.querySelector('.wrapper')
// const ul1=document.createElement('ul')
// const li1=document.createElement('li')
// const li2=document.createElement('li')
// const li3=document.createElement('li')
// li1.innerHTML='li1'
// li2.innerHTML='li2'
// li3.innerHTML='li3'
// el.append(ul1)
// ul1.append(li1)
// ul1.append(li2)
// ul1.append(li3)
// function generate() {
//     ul1.remove()
// }
//
//
//---------------------------------визуальное положение элементов
// function generate(event) {
//     // console.log(event.target.getBoundingClientRect())
//     console.log('x offset '+ window.pageXOffset)
//     console.log('y offset ' + window.pageYOffset)
//     console.log('clientWidth '+document.documentElement.clientWidth)
//     console.log('clientHeight'+document.documentElement.clientHeight)
//
//     const el=document.querySelector('.down')
//     const rectEl=el.getBoundingClientRect()
//     // console.log(el.getBoundingClientRect())
//     window.scrollTo({
//         left:window.pageYOffset+rectEl.left,
//         top:window.pageYOffset+rectEl.top,
//         behavior:'smooth'
//     })
// }

//типы событий и обработчики

// const button=document.querySelector('.button')
// const eventHandler=function () {
//     console.log('event1')
// }
// const eventHandler1=function () {
//     console.log('event2')
//     button.removeEventListener('mouseover',eventHandler)
//
// }
//
// button.addEventListener('mouseover',eventHandler)
// button.addEventListener('click',eventHandler1)


//---------------------------------------всплытие событий

// console.log(event.target)  - укажет на что было нажатие в самом начале, где бы он не находился, даже если я его запишу в элемент выше по дереву,
// console.log(event.currentTarget) укажет на текущий элемент, даже если было нажатие на элемент глубже, он покажет на элемент который нажат, не учитывая всплытие

// event.stopPropagation() - практика не идеальная, в некоторых случаях можно юзать, где нужно узко ограничить всплытие элемента
// const button=document.querySelector('.button');
// const inner=document.querySelector('.inner');
// const wrapper=document.querySelector('.wrapper');
//
// button.addEventListener('click',function (event){
//     this.style.backgroundColor='#5c4988';
//     console.log('button')
//     // console.log(event.currentTarget)
//
//     // console.log(event.target)
//     event.stopPropagation()
// })
//
// inner.addEventListener('click',function (event) {
//     console.log('inner')
//     console.log(event.target)
//     // console.log(event.currentTarget)
// },true)
//
// //благодаря опции true- мы поймали наше событие еще до того как оно у нас погрузилось в дочерние элементы , используется крайне редко
//
//
//


//------------------делегирование событий
// представим что мы сейчас будем имплементировать , огромный список юзеров
// которые зарегались, у нас на сайте
//
// const wrapper=document.querySelector('.wrapper')
//
// for(let i=0;i<=99;i++){
//     const el=document.createElement('div')
//     el.innerHTML=`User with id ${i}`
//     el.setAttribute('data-id',i)
//     // el.addEventListener('click',()=>{
//     //     console.log(`Deleted: user ${i}`)
//     // })
//     // будет 100 лишних фций, и это не очень хорошая практика
//     wrapper.append(el)
// }
//
// // //делегируем событие более верхнему элементу, и передаём туда всю информацию
// // в данном случае установленный кастомный аттрибут 'data-id' и нашли его с помощью event.target.getAttribute,   евент таргет нашел таргет который был нажат начиная с самого нижнего дочерного элема на который был клик
// wrapper.addEventListener('click',function (event){
//     // console.log(event.target.getAttribute('data-id'))
//     const i=event.target.getAttribute('data-id')
//     console.log(i)
// })


//---------------------перемещение по DOM-----------------------------

//
// const wrapper=document.querySelector('.wrapper')
// const button=document.querySelector('.button')
// // const inner=document.querySelector('.inner')
// const inner=wrapper.querySelector('.inner')
// console.log(inner.childNodes)
// //вернёт итерабельный обьект
// console.log(inner.children)
// // вернёт коллекцию хтмл документов
// console.log([...inner.children])
// //получаем полноценный массив, с которым можем работать
// console.log(inner.children[0])
//
// console.log(inner.parentNode)
// console.log(inner.parentElement)
//
// console.log(button.closest('.wrapper'))
// // возвращает ближейщего родителя по селектору
// //queryselector ищет вниз по дереву, closest ищет вверх, ТОЛЬКО ВВЕРХ по дереву
//
// //элементы для выбора на том же уровне, несколько способов
// console.log(button.previousElementSibling)//будет null потому что это первый элем, следующие после него можно найти с помощью next
// console.log(button.previousSibling)  //будет текст в виде пустого переноса, между дивами есть перенос, в данном случае
//
// console.log(button.nextElementSibling)
// // console.log(button.nextSibling)
//
// // чтобы получить всю коллекцию кнопок, через одну кнопку
// console.log(button.parentElement.children[2])


//-----------------------Жизненный цикл событий DOM-------------------

//событие когда контент загрузился
//момент когда html распарсился и построилось дом дерево
//этот метод  НЕ отрабатывает  загрузку картинок и тп
// document.addEventListener('DOMContentLoaded',function (e){
//     console.log('DOMContentLoaded')
//     console.log('1')
// })
//
// //этот метож как раз отрабатывает когда загрузилось ВСЁ
// window.addEventListener('load',function (e) {
//     console.log('load')
//     console.log(e)
// })


//используеться только для предупреждения "ВОЗМОЖНО, внесенные изменения не сохранятся, в таком варианте как описан ниже
// window.addEventListener('beforeunload',function (e) {
//     e.preventDefault()
//     e.returnValue='';
//
// })
//
//--------------------загрузка скриптов async & defer-----------------
//
// --без атрибута - в HEAD парсинг хтмл- и когда на пути попался JS  загрузка и выполнение js  и ПОТОМ  парсингhtml, который после скрипта
// --без атрибута - в конце BODY парсинг хтмл-загрузка и выполнение js
// --async  парсинг и загрузка и выполнение  js одновременно,
// во время выполнения js- парсинг будет прерван
// Парсинг ХТМЛ и загрузка и выполнение JS и дальше парсинг, если файл
// html большой,  то возможно js загрузится быстрее и не успеет получить нужный ему html код, поэтому метод не совсем хорош

//---defer очень хорош  и  работает по другому, он загрузит весь html, и загрузит весь js, НО выполнит js- когда оба и html и js  будут загружены
// это основная стратегия которая нужна нам для клиентских скриптов
// отпимизируется время загрузки, и не ломается код
// общая рекомендация использовать defer для ваших скриптов

// если мы не ждём загрузки html, юзаем скрипты которые не полагатся на DOM дерево
//  например что то подгружаем сторонее, то можно юзать async


// **********************************Async await(14)******************************
// **********************************Async await*******************************
// **********************************Async await******************************
//***************************современный асинхронный js****************

// async function getProducts() {
// fetch('https://dummyjson.com/products')
//     .then(response=>response.json())
//     .then(data=>console.log(data))
//нам теперь не нужно писать городить then, нам не нужно внутри делать свои коллбеки
//мы просто линейно это пишем и всё работает внутри async await
//
//     try{
//         const productsResponse=await fetch('https://dummyjson.com/products')
//         //await- положи ответ когда будет готов в res
//         if(!productsResponse.ok){
//             throw new Error(productsResponse.status)
//         }
//         const {products}= await productsResponse.json()
//         console.log(products)
//
//         const productResponse=await
//             fetch('https://dummyjson.com/products/'+products[0].id)
//         const product= await productResponse.json()
//         console.log(product)
//     }
//     catch (e) {
//         console.error(e)
//     } finally {
//         console.log('Finally getProducts func')
//     }
// }
// //как только мы говорим что фция асинхронная, она по умолчанию возвращает промис
// getProducts()
// console.log('Start')
//
// try{
//     const a=5;
//     a=4
// }catch (e) {
//     console.log(e)
// }
//
//
//
//


/* Получить Геолокацию юзера через Geolocation.getCurrentPosition()(WEB API)
и по координатам определить город, отправив запрос
https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=00&longitude=00
 */

//
// function getMyCoordinates() {
//     return new Promise((resolve, reject)=>{
//         navigator.geolocation.getCurrentPosition(
//             ({coords})=>{
//                 resolve({latitude:coords.latitude,longitude:coords.longitude})
//             },
//             (err)=>{
//                 reject(err)
//             }
//             );
//     })
// }
//

// async function getMyCity() {
//     try{
//         const {latitude,longitude}=await getMyCoordinates()
//         const response=await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
//         if(!response.ok) throw new Error(response.status)
//
//         const data=await response.json();
//         console.log(data)
//         console.log(data.city)
//
//     }
//     catch (e) {
//     console.error(e)
//     }
// }
//
// getMyCity()
//
//
//

// -----------------------------------------асинхронные методы

// class ProductRepository{
//     async getProducts(){
//         const response=await fetch('https://dummyjson.com/products')
//         console.log(await response.json());
//     }
// }
//
// const repo=new ProductRepository()
// repo.getProducts()

// const asyncArrow = async () => {
//     const response = await fetch('http://dummyjson.com/products')
//     const data = await response.json();
//     return data
// }
// console.log(1)
// asyncArrow().then(
//     data => {console.log(data)
// console.log(3)
//     }
// ).finally(()=>console.log(4))
// ;


// const asyncArrow1 = async () => {
//     try {
//         const response = await fetch('http://dummyjson.com/products')
//         const data = await response.json();
//         return data
//     } catch (e) {
//         console.error(e)
//         throw e;
//     }
// }
//
// //intermediate function
// //вот таким не хитрым способом , мы можем на верхнем уровне, обеспечить правильную последовательность выполнения
// (async()=>{
//     console.log(1)
//     const res=await asyncArrow1()
//     console.log(res)
//     console.log(2)
// })()


// asyncArrow1().then(
//     data => {
//         console.log(data)
//         console.log(3)
//     }
// )
//     .catch(e => console.error(e))
//     .finally(() => console.log(4));






// ----------------параллельное выполнение
//
// async function getAllProducts() {
//     const response=await fetch('https://dummyjson.com/products');
//     return response.json();
// }
//
// async function getProduct(id){
//     const response=await fetch('https://dummyjson.com/products/'+id)
//     return response.json()
// }
// async function main(){
//     const {products}=await getAllProducts();
//     // const res = await Promise.all([
//     //     getProduct(1),
//     //     getProduct(2),
//     //     getProduct(3)
//     // ])
//     const res=await Promise.all(products.map(product=>getProduct(product.id)))
//     console.log(res)
//     // for(const product of products){
//     //     const res=await getProduct(product.id)
//     //     console.log(res)
//     // }
// }
//
// main();

//другие комбинации Promise
// async function getProduct(id){
//  const response=await fetch('https://dummyjson.com/products/'+id)
//  return response.json()
// }
//
//
// async function getProductError(id){
// const response=await fetch ('https://dummyjson.com/products/'+id)
//     return response.json()
// }
//
// async function main(){
// const res=await Promise.allSettled([
//     getProduct(1),
//     getProduct(2),
//     getProduct(4544)
// ])
//     // console.log(res)
//
//     const res1=await Promise.race([
//         getProduct(15),
//         getProduct(2)
//     ])
//     console.log(res1)
// }
// main()
//

// -----------------------все возможности фетч
// единственный минус фетча, дополнительно конвертировать json

// async function main(){
//     const res=await fetch('https://dummyjson.com/auth/login',{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json',
//             // 'Authorization':`Token`
//         },
//         body:JSON.stringify({
//             username:'kminchelle',
//             password:'0lelplR'
//             })
//     });
//     const data=await res.json();
//     console.log(data)
// }
//
// main()


// Сделать генератор 3х идей от скуки https://www.boredapi.com/api/activity
// с отображением на странице
//
// const wrapper=document.querySelector('.wrapper')
//
//
// async function getActivity(){
//     const res=await fetch('https://www.boredapi.com/api/activity')
//     return res.json()
// }
//
// async function generate() {
//  try{
//      wrapper.innerHTML='';
//      const data=await Promise.all([
//      getActivity(),
//      getActivity(),
//      getActivity(),
//  ])
//      console.log(data)
//      for(const el of data){
//          const element=document.createElement('div')
//          element.innerHTML=`${el.activity}`;
//          wrapper.appendChild(element)
//      }
//  }catch (e) {
//      console.error(e);
//  }
// }






//************************** Event Loop(13)****************************
//************************** Event Loop****************************
//************************** Event Loop****************************


// микро таски имеют высший приоритет над обычными коллбеками

// попадает в стек, из стека если не асинхронный сразу выполняется,  что выполняется не сразу и требует асинхронности- идёт в web api,
// далее что подходит пол коллбек,  уходит в очередь коллбеков Callback Queue, если есть таймеры, тоже уходит в очередь коллбеков

// далее есть microtask queue , очередь микротасков,коллбеки микротасков туда попадают промисы
// микротаски, это вторая очередь, относительно которой крутится наш eventloop
// у очереди микротасков приоритет над Callback Queue


// console.log(1)
//
// setTimeout(()=>{
//     console.log(2);
// },0)
// Promise.resolve(3).then((res)=>{
//     console.log(res)
//     for(let i=0;i<1000000000;i++){
//
//     }
// })
//
// console.log(4)
//
// for(let i=0;i<1000000000;i++){
//
// }


//******создание просто Promise*****
//
// const prom = new Promise((resolve, reject) => {
//     if (new Date() < new Date('01/01/2024')) {
//         reject(new Error('Error from prom'))
//     }
//     resolve('Success')
// })
//
// prom
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//
// function timeout(sec) {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve()
//         },sec*1000)
//     })
// }
//
// timeout(2).then(()=>{
//     console.log('promise-timeout complete')
//     return timeout(3)
// }).then(()=>{
//     console.log('promise 2th complete')
//     return timeout(4)
// }).then(()=>{
//     console.log('promise 3th complete')
// })
//

//-------------------------------------------статические методы Promise

// const prom=new Promise((resolve)=>{
//     console.log('Constructor')
//     setTimeout(()=>{
//         resolve('Timer')
//     },2000)
// })
// prom.then(data=>console.log('data'))
// Promise.resolve('Instant-resolve from Promise').then(data=>console.log(data))
// Promise.reject(new Error('Error')).catch(error=>console.error(error))
//
//сделать фцию myFetch, которая выполняет внутри XMLHttpRequest

// function myFetch(url) {
//     return new Promise((resolve,reject)=>{
//         const request=new XMLHttpRequest();
//         request.open('GET',url)
//         request.send();
//
//         request.addEventListener('load',function () {
//             if(this.status>400){
//                 reject(new Error(this.status))
//             }
//             resolve(this.responseText);
//         })
//         request.addEventListener('error',function () {
//             reject (new Error(this.status))
//         })
//         request.addEventListener('timeout',function () {
//             reject(new Error('Timeout'))
//         })
//     })
// }
//
// myFetch('https://dummyjson.com/produc1ts').then(data=>console.log(data))
//     .catch(err=>console.error(err))


//*************************************Promises (12)****************************
//*************************************Promises (12)****************************
//*************************************Promises (12)****************************
//Promise -контейнер для значения , которое вернётся в будущем
// + не нужно использовать коллбек
// +не нужно использовать события (event listener)

// жизненный цикл Промиса - Pending -settled - v1 Fulfilled - v2 Rejected

// const response=fetch('https://dummyjson.com/products/1')
// console.log(response)

// fetch('https://dummyjson.com/products')
//     .then(response => {
//             console.log(response)
//             return response.json()
//         },
//     ).then(({products}) => {
//         console.log(products)
//         return fetch('https://dummyjson.com/products/' + products[0].id)
//     }
// )
//     .then(response => response.json()).then(data => console.log(data))
//     .catch(error=>console.log(error))
//     .finally(()=>{
//         console.log('Finally')
//     })

//в кетч будем проваливаться при любой ошибки из этой цепочки

//ФЦИЯ helper
// function getData(url,errorMessage) {
//     return fetch(url)
//         .then(response=>{
//             if(!response.ok){
//                 throw new Error(`${errorMessage} ${response.status}`)
//             }
//             return response.json()
//         })
// }
//
// getData('https://dummyjson.com/products','Can not get products')
//     .then(({products})=>{
//         console.log(products)
//         return getData('https://dummyjson.com/products/'+products[0].id,'Can not get product')
//     })
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(error=>{
//         const el=document.querySelector('.filter')
//         el.innerHTML=error.message
//     })
//


//
//
// function createSelect(array) {
//     const el = document.querySelector('.filter');
//     el.innerHTML = `<select>
//     ${array.map(arrEl => `<option value=${arrEl}>${arrEl}</option>`)}
// </select>`
// }
//
// function getCategories() {
//     fetch('https://dummyjson.com/products')
//         .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`Is error ${response.status}`)
//                 }
//                 return response.json()
//             }
//         )
//         .then(({products})=>{
//             console.log(products)
//             return fetch('https://dummyjson.com/products/'+products[0].id)
//         })
//         .then(response=> response.json())
//         .then(data=>{
//             console.log(data)
//         })
//         .catch(error => {
//             const el=document.querySelector('.filter')
//             el.innerHTML=error.message
//         })
// }
//
// getCategories();
//
//


//****************************************Асинхронный JS (11)************************
//****************************************Асинхронный JS (11)************************
//****************************************Асинхронный JS (11)************************


// dummyJSON
// xml http request
//
// function req(id) {
//     const request=new XMLHttpRequest()
//
//     request.open('GET','https://dummyjson.com/products/'+id);
//     request.send();
//
//     request.addEventListener('load',function () {
//         console.log(JSON.parse(this.responseText))
//     })
// }
//
// req(1)
// req('')
// req(3)
//
// console.log('end')
//
//


// получить среднюю цены 30 товаров из апи

// const request=new XMLHttpRequest()
// request.open('GET','https://dummyjson.com/products')
// request.send()
//
// request.addEventListener('load',function () {
//     let sum=0
//     // const data=JSON.parse(this.responseText)
//     const {products}=JSON.parse(this.responseText)
//     console.log(products)
//     products.map(product=>{
//
//         sum+=product.price
//
//        return sum
//     })
//     console.log(Math.ceil(sum/products.length))
// })
//
//
//


//***********************OOP SOLID (10)****************************************
//***********************OOP SOLID (10)****************************************
//***********************OOP SOLID (10)****************************************

//****** принцип единственной ответственности
//  класс должен делать только то что относится конкретно к  нему, не брать ответственность
// за то что к нему не относится \\ разделение зон ответственности


//принцип открытости и закрытости

// class Treasure{
//
// }
//
// class Coin extends Treasure{
//     value=1;
// }
//
// class Crystal extends Treasure{
//     value=10;
// }
// class Brilliant extends Treasure{
//     value=20;
// }
//
// class Inventory{
//     #score;
//
//     pick(treasure){
//         this.#score+=treasure.value;
//     }
//
// }
//


//
// ***************8Принцип подстановки барбары лисков
// Принцип говорит что если мы сделали какой то частный класс от общего, то его безболезненно можно заменять там где нужно- общий класс на него.
// например там где у нас есть Орк, который появился из врага, и там где мы используем
// врага- подставим орка,  приложение наше не сломатеся. - Принцип Замены

//*************Принцип разделения интерфейсов

// Принцип говорит что какой то класс не должен зависеть от методов, которые на практике ему никогда не нужны. Это позволяет держать нам интерфейсы в более компактном виде, во вторых правильно разделять ответственность

//
// class Weapon{
//     cost;
//     constructor(cost) {
//         this.cost=cost
//     }
//     dealDamage(){
//         console.log('dealDamage method')
//     }
// }
// class Rifle extends Weapon{
//     constructor(cost) {
//         super(cost);
//     }
//     shoot(){
//         this.dealDamage()
//     }
// }
//
// class Sword extends Weapon{
//     constructor(cost) {
//         super(cost);
//     }
//     strike(){
//         this.dealDamage()
//     }
// }
//
//


// ****************************Принцип Инверсии Зависимостей
// говорит о том что мы должны зависеть от абстракции , а не от конкретной реализации
// одни модули, которые высокоуровневые модули, не должны зависеть  от более низкоуровневых,
//     должны зависеть только от некоторой интерфейсной абстракции их реализации
//
// class DB{
//     save(items){
//         console.log('save to DB: '+items)
//         //save
//     }
// }
//
// class MongoDB extends DB{
//     //....
//     save(items) {
//         console.log('save to MongoDB: '+items)
//     }
// }
//
// class ToDoList{
//     items=[1,2,3,4]
//     // db=new DB()
//     db;
//     constructor(db) {
//         this.db=db;
//     }
//     savaToDB(){
//         this.db.save(this.items);
//     }
// }
//
// const list1=new ToDoList(new DB());
// list1.savaToDB()
// const list2=new ToDoList(new MongoDB())
// list2.savaToDB()
//
//


//****************************Принципы ооп в классах (9)****************************
//****************************Принципы ооп в классах (9)****************************
//****************************Принципы ооп в классах (9)****************************

//абстракция vs инкапсуляция

//
// class Film {
//     #name;
//     #author;
//     rating;
//     #length;
//     //name author length инапсулираем, скрываем от публичного доступа
//     constructor(name,author,length) {
//         this.#name=name;
//         this.#length=length;
//         this.#author=author
//     }
//
//     get name(){
//        return this.#name
//     }
//     get author(){
//         return this.#author
//     }
//     get length(){
//         return this.#length
//     }
// }
//

//***********************************Наследование***********************

//
// const Book=function (title,author) {
//     this.title=title;
//     this.author=author
// }
//
// Book.prototype.buy=function (){
//     console.log('Buy')
// }
//
// const Audiobook=function (title,author,lenMin) {
//     Book.call(this,title,author)
//     this.lenMin=lenMin;
//     this.title=title;
//     this.author=author
// }
//
//
// Audiobook.prototype=Object.create(Book.prototype)
// Audiobook.prototype.constructor=Audiobook;
// Audiobook.prototype.log=function () {
//     console.log(`${this.title}- ${this.lenMin} Min`);
// }
//
// const bookLotr=new Audiobook('LOTR','Tolkien',20*60)
// bookLotr.log()
//
// console.log(bookLotr instanceof Audiobook)
// console.log(bookLotr instanceof Book)
//
//
// // in es6
//
// //
// class Book{
//     constructor(title,author) {
//         this.title=title;
//         this.author=author;
//     }
//
//     buy(){
//         console.log('Buy');
//     }
//     info(){
//         console.log(`${this.author}`)
//     }
//
// }
//
//
// class AudioBook extends Book{
//     constructor(title,author,lenMin) {
//         super(title,author);
//         this.lenMin=lenMin;
//     }
//
//     log(){
//         console.log(`${this.title} -${this.lenMin}`);
//     }
// }
//
// let lotr=new AudioBook('lotr','Tokien',60*20)
//
// // console.log(lotr.author)
// // lotr.log()
//
//
// //***************************************override методов********
// //важно то что мы перезаписываем , должно хотя бы воспроизводить исходное
//
//
// class Ebook extends Book{
//     constructor(title,author,format) {
//         super(title,author);
//         this.format=format
//     }
//     info(){
//         console.log(`${this.format} ${this.title}`)
//     }
//
// }
//
// const source=new Ebook('Source','Ann Reid','PDF')
// source.info()
//
//
//
// class Enemy{
//     health;
//
//     constructor(health) {
//         this.health=health
//     }
//
//     receiveDamage(damage){
//         this.health=this.health-damage
//         this.health<1? console.log('enemy is defeated'):console.log(this.health)
//
//
//     }
// }
//
// class Sword{
//     #damage
//     constructor(damage) {
//         this.#damage=damage
//     }
//     strike(enemy){
//         enemy.receiveDamage(this.#damage)
//     }
// }
//
// const enemy1=new Enemy(100)
// const sword1=new Sword(25)
// sword1.strike(enemy1)
// sword1.strike(enemy1)
// sword1.strike(enemy1)
// sword1.strike(enemy1)
//
//
// class Orc extends Enemy{
//     constructor(health) {
//         super(health);
//     }
//
//     receiveDamage(damage) {
//         if(Math.random()>0.5){
//             this.health=this.health-damage;
//         }
//         this.health<1 ? console.log('Orc is defeated'):
//
//         console.log(this.health)
//
//     }
// }
//
// const orc1=new Orc(100)
// const sacredSword=new Sword(100)
// sacredSword.strike(orc1)
//

///***************************************Виды полиморфизма

//Ad-hock полиморфизм - возможность по разному исполнять фцию, в зависимости от типа данных
// Параметрический полиморфизм  - хороший пример console.log() -можем вывести всё что угодно
// Полиморфизм подтипов   - полиморфизм который имеется виду в ооп


//******************** Паттерны Building & Chaining*************************


//Паттерн возвращения this, позволяет использовать chaining методы
// class Wallet {
//     balance=0;
//
//     add (sum){
//         this.balance +=sum
//         return this
//     }
//     remove(sum){
//         this.balance-=sum;
//         return this
//     }
//     showBalance(){
//         console.log(this.balance+' - Your balance')
//         return this
//     }
// }
//
// const wallet1=new Wallet()
// const res=wallet1.add(100).showBalance()
//
// class Builder{
//     house={};
//     addRoof(){
//         this.house.roof='Roof'
//         console.log('Roof are finish')
//         return this
//     }
//     addFloor(){
//         this.house.floor='Floor';
//         console.log('Floor are finish')
//         return this
//     }
//     execute(){
//         return this.house
//     }
// }
//
// const res2=new Builder().addRoof().addFloor().execute()
// console.log(res2)
//
//

//                     ************ООП CLASSES******************** Классы (8)
//                      ************ООП CLASSES********************
//                      ************ООП CLASSES********************
//  Cинтаксис классов скрывает под реализацию прототипов и фцию конструктора, которую
//мы рассмотрели выше, ОН НЕ ЯВЛЯЕТСЯ СИНТАКСИЧЕСКИМ САХАРОМ, и ИМЕЕТ РАЗЛИЧИЯ

//
// class Book{
//     isRead=false
//     cover='unknown'
//     review='unknown'
//     constructor(title,author) {
//         this.author=author;
//         this.title=title;
//     }
//
//
//     read(){
//         this.isRead=true
//     }
//     getReview(value){
//         this.review=value
//     }
//
// }
//
// const lotr=new Book('Lords Of The Rings','J.J.R Tolkien')
// //
// lotr.cover='Red'
//
// console.log(lotr)
// console.log(lotr instanceof Book)
// lotr.read()
// console.log(lotr.isRead)
// console.log(lotr.__proto__)
//
//

//
// const task={
//     title:'Task1',
//     dueTo:new Date('2023/01/01'),
//
//     get isOverdue(){
//         return this.dueTo<new Date();
//     },
//
//     set isOverdue(isOverdueTask){
//         if(!isOverdueTask){
//             this.dueTo=new Date()
//         }
//     }
//
// }
// console.log(task.isOverdue)
// task.isOverdue=false;
// console.log(task)
// console.log(task.isOverdue)
//
//*********************геттеры и сеттеры**********************************
//
// class Task{
//     constructor(title,dueDate) {
//         this.title=title
//         this.dueDate=dueDate
//     }
//     get isOverdue(){
//         return this.dueDate<new Date()ъъъ
//     }
//     set isOverdue(isOverdueTask){
//         if(!isOverdueTask){
//             this.dueDate=new Date()
//         }
//     }
//     set dueDate(date){
//         //тем самым сделали валидацию при создании в конструкторе
//         if(date<new Date()) return;
//         this._dueDate=date;
//
//     }
// }
//
// const newTask= new Task('Task2',new Date('2023/01/01'))
//
// console.log(newTask.isOverdue)
// newTask.isOverdue=false
// console.log(newTask.isOverdue)
//
// const secondTask=new Task('Task3',new Date('2022/01/01'))
// console.log(secondTask)
// secondTask.dueDate=new Date('2024/01/01')
// console.log(secondTask)
//
//
//

// **************STATIC**************
// **************STATIC**************
//
// class Test{
// static a=1;
// static hello(){
//     console.log('hello for Test class ')
// }
// }
//
// // Test.hello()
//
//
//
// //*****************приватные методы и свойства*****************
//
// class Car {
//     #vin;
//     speed;
//
//     #changeVin(value){
//         console.log('changed')
//         this.#vin=value
//         console.log(this.#vin)
//     }
//
//     publicChangeVin(value){
//         this.#changeVin(value)
//     }
//
//     static #field=3
//     static{
//         this.#field=5;
//     }
// }
//
//
// const car=new Car();
// car.publicChangeVin(111000)
//
//
// //**************************Create Класс пользователя********************8
//
// class User{
//     #login
//     #_password
//     constructor(login,password) {
//         this.#login=login
//         this.#password=password
//         //взяли сеттер , который ставит приватный пароль, перед этим "хешируя" его
//     }
//     set #password(pass){
//         this.#_password=pass.split('').reverse().join() //перевернули пароль
//     }
//     get #password(){
//         return this.#_password.split('').reverse().join() //расшифровали
//     }
//     get login(){
//         return this.#login
//     }
//     checkPassword(pass){
//         return this.#password===pass;
//     }
//     changePassword(oldPass,newPass){
//         if(this.checkPassword(oldPass)) {
//             this.#password = newPass
//             return true
//         }
//         else return false
//     }
// }
//
// const user1=new User('test1','pass')
// console.log(user1)
// user1.changePassword('pass','pass1')
// console.log(user1)
//
//
//
//
//
// /******************************Object create********************/
//
// const UserObj={
//
//     init(email,password){
//         this.email=email;
//         this.password=password
//     },
//
//     logEmail(){
//         console.log(this.email)
//     }
// }
//
// const user_1=Object.create(UserObj)
// user_1.init('dma@gmail.com','123123')
// user_1.logEmail()
// console.log(user_1)
//
//
//
//
//
//


// *****************************ООП**********************************
// *****************************ООП**********************************
// *****************************ООП**********************************

// *********Реализация ООП в JS***************************


//прототипное наследование
//каждый раз при создании Массива, мы просто линкуемся к прототипу со всеми методами
// const a=[1];
//
// //dir выповодит всю инфу об обьекте, показал мне обьект, с отсылкой к прототипу Массива
// console.dir(a)


//********************** немного древний метод***************
// ****создания через нью фунцкию, в современной js  используется не часто,
// ****в большинстве мы видим использование es классов
// const User=function (email,password) {
//     this.email=email
//     this.password=password
// }
//
// const user1=new User('mail1@gmail.com','123123');
// const user2=new User('mail2@gmail.com')
// console.log(user1.email)
// console.log(user2.email)
// console.log(user2 instanceof User)

// Создаёться пустой обьект
// Вызывается User функция
// // this = пустому обьекту
// обьект связывается с prototype
// возвращается обьект


// ***********************Prototype*************
//
//
// const Book=function (title,author) {
//     this.author=author;
//     this.title=title;
//     this.isRead=false;
// }
//
// Book.prototype.read=function () {
//     this.isRead=true;
// }
// Book.prototype.cover='Paper'
//
//
// const lordOfTheRings=new Book('Lord of the rings ','J.J.R Tolkien')
// console.log(lordOfTheRings)
// lordOfTheRings.read()
// console.log(lordOfTheRings)
// console.log(lordOfTheRings.cover)
// // lordOfTheRings.cover='E-book'
// console.log(lordOfTheRings.cover)
//
// //провереяем созданные методы, и наследованные от прототипа с помощью hasOwnProperty
// //hasOwnProperty  поможет разделить какое свойство есть у самого обьекта, а какое у прототипа, если мы изменили метод после создания, будет тру, если оставили от прототипа-false
//
// console.log(lordOfTheRings.hasOwnProperty('cover'))
// console.log(lordOfTheRings.hasOwnProperty('author'))

// console.log(lordOfTheRings.__proto__)
// //сравнили прото класса и прототипа
// console.log(lordOfTheRings.__proto__===Book.prototype)
//
// //тоесть класс Book является прототипом для lordOfTheRings
// console.log(Book.prototype.isPrototypeOf(lordOfTheRings))
//
//


// ************************** Корзина Товаров*************************
// ************************** Корзина Товаров*************************
// ************************** Корзина Товаров*************************

//
// const Cart=function () {
//  this.products=[];
// }
//
// const product1={id:1,name:'Tomato',count:15}
// const product2={id:2,name:'Potato',count:2}
//
// Cart.prototype.addProduct=function (product) {
//     if(this.products.find(prod=>prod.id===product.id)) return
//
//     this.products.push(product)
// }
//
// Cart.prototype.increaseAmount=function (id) {
//     this.products=this.products.map(product=>{
//         if(product.id==id){
//             product.count++
//             return product
//         }
//         return product
//     })
// }
//
//
// Cart.prototype.decreaseAmount=function (id) {
//     this.products=this.products.map(product=>{
//         if(product.id==id){
//             product.count--
//             return product
//         }
//         return product
//     }).filter(product=>product.count>0)
// }
//
// const cart=new Cart()
// cart.addProduct(product1)
// cart.addProduct(product2)
// console.log(cart)
// cart.decreaseAmount(product2.id)
// cart.decreaseAmount(product2.id)
// cart.decreaseAmount(product1.id)
// console.log(cart)
//
//
//
//
//


// *****************************ТАЙМЕРЫ**************************
// *****************************ТАЙМЕРЫ**************************
// *****************************ТАЙМЕРЫ**************************


// console.log(1)
// const messages=['bash','powebash',"powebash =)"]
// const boomConsole = (message,message1,message2) => {
//     console.log(message)
//     console.log(message1)
//     console.log(message2)
// }
// const boomTimer=setTimeout(boomConsole,2000,...messages)
// // clearTimeout(boomTimer)
// console.log(3)
//
//

// ****точность таймеров**********

// const mark1=Number(performance.now().toFixed(1))
// console.log(mark1)
// setTimeout(()=>{
//     const mark2=performance.now().toFixed(0)
//     console.log(mark2-mark1)
// },1000)
//

// ****работа с интервалами ************

// const options1={
//     hour:'numeric',
//     minute:'numeric',
//     second:'numeric',
//     year:'numeric',
//     month: 'short',
//     weekday: 'long'
// }

// console.log(new Intl.DateTimeFormat('ru-RU',options1).format(date))


// const options1={
//     hour:'numeric',
//     minute:'numeric',
//     second:'numeric'
// }
//
// const intervalMinute=setInterval(()=>{
//     const now=new Date
//     console.log(new Intl.DateTimeFormat('ru-Ru',options1).format(now)+' timer every minute\'s')
// },1000*60)
//
// const intervalSecond=setInterval(()=>{
//     const now=new Date
//     console.log(new Intl.DateTimeFormat('ru-Ru',options1).format(now))
// },1000)
//
// console.log(intervalMinute)
// console.log(intervalSecond)
//
// setTimeout(()=>{
//     clearInterval(2)
// },5000)
//

// *****timer food*****
// *****timer food*****
// *****timer food*****


// const optionsTimer={
//     hour:'numeric',
//     minute:'numeric',
//     second:'numeric'
// }
// const optionsTimerPizza={
//     // hour:'numeric',
//     minute:'numeric',
//     second:'numeric'
// }
//
// const locales='ru-Ru'
//
// const timerFood = (minute) => {
//     const ms=minute*60*1000
//     const end=new Date().getTime()+ms
//    const interval=setInterval(()=>{
//        const now=new Date()
//        console.log(
//            new Intl.DateTimeFormat(locales,optionsTimerPizza).format( end+100-now))
//    },1000);
//
//     setTimeout(()=>{
//         clearInterval(interval)
//         console.log('Food is Ready')
//     },ms)
//
// }
// timerFood(0.5)
//
//


// ******************Даты и время**********************
// ******************Даты и время**********************
// ******************Даты и время**********************
//
// const now = new Date();
// console.log(now)
// console.log(new Date('02-01-2023'))
// console.log(new Date('02/01/2023'))
// console.log(new Date('2023/01/02'))
// console.log(new Date('10 jan 2023'))
// console.log(new Date('dec 22 2022 20:40:03'))
// console.log(new Date(2024, 11, 31, 10, 5, 10))
// console.log(new Date(2024, 12, 10 + 100));
// console.log(new Date(0))
//
// //так я могу получить дату от начала отсчёта Unix, от первого января 1970 года,
// // или относительно текущего времени
// console.log(new Date(1 * 24 * 60 * 60 * 1000))
// console.log(now)
// console.log(new Date(Date.now()))
//
// console.log(now.getFullYear())
//
// //getDate день месяца
// console.log(now.getDate())
//
// //getDay день недели
// console.log(now.getDay())
// console.log(now.getMonth())
// console.log(now.getHours())
// console.log(now.getMinutes())
// //getTime -время в милисекундах от начала отсчёта Unix, первого января 1970 года
// console.log(now.getTime())
//
// console.log(new Date(now.setFullYear(2024)))
// console.log(new Date(now.setMonth(6)))
//


// ***операции с датами
// ***операции с датами
//
// const date1=new Date(2024,10,15)
// const date2=new Date(2024,11,17)
// console.log(Number(date1))
// console.log(+date2)
//
// function getDaysBetweenDates(dateFirst,dateSecond) {
//     return (date2-date1)/(1000*60*60*24)
// }
//
// console.log(getDaysBetweenDates(date1,date2))


// ***********сравнение дат ***********
// ***********сравнение дат ***********

// const first=new Date(2024,10,4)
// const second=new Date(2024,10,4)
//
// //сравнение очень простое, потому что под собой он сравнивает тайм стемпы
// console.log(first<second)
//
// // сравнение не работает- данные представлены в виде обьектов, для проверки  нужны таймстемпы
// console.log(first===second)
//
// //в числовом представлении timeстеймпы совпадают
// console.log(first.getTime()===second.getTime())
//
// //или представить в числовом виде
// console.log(Number(first)===Number(second))
//
//
// const now=new Date()
// console.log(now.getMonth()+1)
//
//
// const user1={
//     name:'Johny',
//     birthday:'04/11/2022'
// }
//
// console.log(new Date(user1.birthday).getDate() === now.getDate())
//
// function isBirthday(user) {
//     const birthdayDate=new Date(user.birthday)
//     const now=new Date()
//      const birthday= (birthdayDate.getDate() ===now.getDate())
//         &&(birthdayDate.getMonth() === now.getMonth())
//     return birthday
// }
//
// console.log(isBirthday(user1))
//

// ************интернационализация дат****************
// ************интернационализация дат****************
// ************интернационализация дат****************


//
// const date=new Date()
// console.log(date)
// console.log(new Intl.DateTimeFormat('ru-RU').format(date))
// const options1={
//     hour:'numeric',
//     minute:'numeric',
//     second:'numeric'
// }
// const options2={
//     hour:'numeric',
//     minute:'numeric',
//     second:'numeric',
//     year:'numeric',
//     month: 'short',
//     weekday: 'long'
// }
// const options3={
//     hour:'numeric',
//     minute:'numeric',
//     month:'short',
//     weekday:'short',
//     year:'2-digit'
// }
// console.log(new Intl.DateTimeFormat('ru-RU',options1).format(date))
// console.log(new Intl.DateTimeFormat('en-US',options1).format(date))
// console.log(new Intl.DateTimeFormat('en-US',options2).format(date))
// console.log(new Intl.DateTimeFormat('en-US',options3).format(date))
//
// console.log(navigator.language)
// console.log(navigator.languages)
// console.log(new Intl.DateTimeFormat(navigator.language,options3).format(date))
//


// **********************Расчеты и Math***********************************
// **********************Расчеты и Math***********************************
// **********************Расчеты и Math***********************************
//
// console.log(Math.cbrt(27))
// console.log(Math.ceil(27 ** (1/4)))
//
// const numMinus= -1;
// const numPositive=1
// console.log(numMinus*100)
// console.log(numPositive*100)
// console.log(Math.abs(numMinus))
//
// console.log(Math.max(100,400,2,'500'))
// console.log(Math.min(100,2,'20'))
// const nums=[100,140,'160']
// console.log(Math.max(...nums))
// console.log(Math.trunc(2.22222242424))
// console.log((4444.414141).toFixed(1))
// console.log(Number((1.444444).toFixed(2)))
//
//

//фция которая принимает мин и макс число и возвращает целое случайное между ними
//
// const randomNum = (min,max) => {
//     return Math.floor((Math.random()*(max-min+1))+min)
// }
// console.log(randomNum(1,500))
//
// console.log(15/2)
// console.log(15%2)
// console.log(14%2)
//
// const isEven=n=>n%2===0;
// const isOdd=n=>n%2===1;
// console.log(isEven(11))
// console.log(isOdd(11))
//
// const bigNum=2_000_000
// const payment=3_50
// console.log(+'200_500_500')
//
//
// //операции до этого числа являются безопасными и корректными
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(2**53 -1)
//
//
//


// ************** Интернационализация******
// ************** Интернационализация******

// const options1 = {
//     style: 'currency',
//     currency: 'UAH',
// }
// const options01 = {
//     style: 'currency',
//     currency: 'UAH',
//     useGrouping: false
// }
// const options2 = {
//     style: 'currency',
//     currency: 'USD',
//     // useGrouping:false
//
// }
// const options3 = {
//     style: 'decimal',
// }
// const options4 = {
//     style: 'percent',
//
// }
// const options5 = {
//     style: 'unit',
//     unit: 'celsius'
//
// }
//
// console.log(new Intl.NumberFormat('ru-RU', options01).format(250000))
// console.log(new Intl.NumberFormat('ru-RU', options1).format(250000))
// console.log(new Intl.NumberFormat('en-US', options1).format(250000))
// console.log(new Intl.NumberFormat('en-US', options2).format(250000))
// console.log(new Intl.NumberFormat('ru-RU', options2).format(250000))
//
// console.log(new Intl.NumberFormat('ru-RU', options3).format(2500000))
// console.log(new Intl.NumberFormat('ru-RU', options4).format(0.41))
// console.log(new Intl.NumberFormat('ru-RU', options5).format(25))
//
//
// function convert(sum, initialCurrency, convertCurrency) {
//     const allCurrencies = [
//         {name: 'USD', mult: 1},
//         {name: 'UAH', mult: 1 / 40},
//         {name: 'EUR', mult: 1.1},
//     ];
//     const initial=allCurrencies.find(c=>c.name===initialCurrency)
//
//     if(!initial){
//         return null;
//     }
//
//     const convert=allCurrencies.find(c=>c.name===convertCurrency)
//
//     if(!convert){
//         return null;
//     }
//     return new Intl.NumberFormat('ru-Ru',{style:'currency'})
//
//     return sum* initial.mult/convert.mult;
//
// }
//

// console.log(Number.parseInt('100lolito',10))
// // можно обратиться и без прототипа Number, лучше с ним , более явно будет указано
// // console.log(Number.isNaN('10'))
// console.log(Number.isFinite(100/0))
// console.log(Number.isInteger(100.1))
// //isFinite хороший способ проверки
//


// ************** Set & Map ***** Сеты и Мэпы*****
// ************** Set & Map ***** Сеты и Мэпы*****
// ************** Set & Map ***** Сеты и Мэпы*****

// const flights=['Ukraine','NY','London','Paris']
//
// const setFlights=new Set(flights)
// console.log(setFlights.size)
// console.log(setFlights.has('NY'))
// console.log(setFlights.has('f'))
// setFlights.add('Kiev')
// setFlights.delete('NY')
// console.log(setFlights)
//
// for(const flight of setFlights){
//     console.log(flight)
// }
// //разобрали sets в обычный массив
// console.log([...setFlights])


// Map это коллекция, пар ключ\значение, может использовать любой тип данных в качестве ключа,
//   и поддерживает порядок своих записех

// const weatherMap=new Map();
// weatherMap.set('London','22-30').set('Kiev','21-00')
//
// console.log(weatherMap.has('London'))
// console.log(weatherMap.get('London'))
// weatherMap.set('London','22-45')
// console.log(weatherMap.get('London'))
// weatherMap.delete('London')
// weatherMap.clear()
//
// const nums=[10,20,30]
//
// weatherMap.set(1,'one').set(true,'yes').set(false,'no').set(false,'no!')
//   .set([1,2,3],'123').set({a:1},{a:'one'}).set(nums,'ten,twenty,thirty')
//
// /*обьекты и массивы в качестве ключей используются крайне редко, но важно помнить про
// сайд эффект, и создание в памяти обьекта, и храним мы обьект по рефференсу,ссылке на него, по ячейке в памяти */
// console.log(weatherMap)
// console.log(weatherMap.size)
// console.log(weatherMap.get([1,2,3]))
// console.log(weatherMap.get(nums))

//быстрое создание map
//
// const weatherMap=new Map([
//     ['Kiev','22-30'],
//     ['Lviv','21-30'],
// ])
//
// console.log(weatherMap)
//
// const weatherObj={
//     "Kiev":15,
//     "Lvov":14,
//     "Chernovsty":16
// }
//
// console.log(Object.entries(weatherObj))
// const weatherNewMap=new Map(Object.entries(weatherObj))
// console.log(weatherNewMap.size)
// //быстрый способ получить размер обьекта, конвертировать его в map и вызвать .size
//
// for(const [key,value] of weatherNewMap) {
//     console.log(` key :${key}  value ${value}`)
// }
//
// //вернули обратно в  обычный массив массивов
// console.log([...weatherNewMap])
// console.log([...weatherNewMap.keys()])
// console.log([...weatherNewMap.values()])
//
//
// const weatherMap=new Map([
//   ['Miami',10],
//   ['NY',7],
//   ['California',14],
// ])
//
// const weatherObj=[...weatherMap]
// console.log(Object.entries(weatherObj))
//
// let weatherNewMap=new Map()
// for (const [key,value] of weatherObj){
//     console.log(key)
//     console.log(value)
//     weatherNewMap.set(value,key)
// }
// console.log(weatherNewMap)
//
// weatherNewMap=new Map([...weatherNewMap].map(el=>el.reverse()))
// console.log(weatherNewMap)
