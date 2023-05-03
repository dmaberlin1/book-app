'use strict'
const LoadAppTime=Number(performance.now().toFixed(1))
console.log(LoadAppTime)
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


//                     ************ООП CLASSES********************
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

//
// class Task{
//     constructor(title,dueDate) {
//         this.title=title
//         this.dueDate=dueDate
//     }
//     get isOverdue(){
//         return this.dueDate<new Date()
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

class Test{
    
}
const Numdec=function(num1){
    return --num1
}

console.log(Numdec(5))
















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
