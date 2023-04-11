'use strict'



// *****************************ТАЙМЕРЫ**************************
// *****************************ТАЙМЕРЫ**************************
// *****************************ТАЙМЕРЫ**************************
























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
