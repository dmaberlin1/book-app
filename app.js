'use strict'
const LoadAppTime=Number(performance.now().toFixed(1))
console.log(LoadAppTime)

//***********************OOP SOLID (10)****************************************
//***********************OOP SOLID (10)****************************************
//***********************OOP SOLID (10)****************************************

//****** принцип единственной ответственности
//  класс должен делать только то что относится конкретно к  нему, не брать ответсвенность
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
