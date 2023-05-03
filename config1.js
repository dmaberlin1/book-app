// function sum(num1,num2) {
//     return num1+num2
// }
//
// const sumEs6=function(num1,num2){
//     return num1+num2
// }
// const decnums=function(num1,num2){
//     return num1-num2
// }
//
//
// //-------------------Controller----------------------
//
// function mySumTest(){
//     let ss=SpreadsheetApp.getActiveSpreadsheet()
//     //the active spreadsheet as an object will be returned to the 'ss'
//     //активная электронная таблица как объект будет возвращена в переменную 'ss'
//     let sh=ss.getSheetByName('Stage 1');   //the sheet with the name 'Stage1' as an object will be returned to the 'sh' variable
//     let ra_a=sh.getRange('A1')
//     //get range as object
//     // получить диапазон как объект
//     let ra_b=sh.getRange('B1')                //get range as object
//     let ra_c=sh.getRange('C1')                //get range as object
//     let ra_d=sh.getRange('D1')
//
//     let a=ra_a.getValue()                     //get value of the range
//     let b=ra_b.getValue()                     //get value of the range
//
//     let res=sumEs6(a,b)                        // calculate the result via our first function
//     let resdecrement=decnums(a,b)
//
//     ra_c.setValue(res)                        //put the result to the range 'C1'
//     ra_d.setValue(resdecrement)
// }
//
// function mySort(arr) {
//     let result=arr.sort(sortFunction);
//
//     return result
//
//
//     // I took a 'sortFunction from the internet
//     function sortFunction(a,b) {
//         if(a[0]===b[0]){
//             return 0;
//         }
//         else{
//             return (a[0] < b[0]) ? -1 :1;
//         }
//     }
//
// }
//
//
//
//
// // **********************srcript.gs************************************
// // **********************srcript.gs************************************
// // **********************srcript.gs************************************
// // **********************srcript.gs************************************
// function sum(num1,num2) {
//     return num1+num2
// }
//
// const sumEs6=function(num1,num2){
//     return num1+num2
// }
// const decnums=function(num1,num2){
//     return num1-num2
// }
//
//
// //-------------------Controller----------------------
//
// function mySumTest(){
//     let ss=SpreadsheetApp.getActiveSpreadsheet()  //the active spreadsheet as an object will be returned to the 'ss'
//     let sh=ss.getSheetByName('Stage 1');   //the sheet with the name 'Stage1' as an object will be returned to the 'sh' variable
//     let ra_a=sh.getRange('A1')                //get range as object
//     let ra_b=sh.getRange('B1')                //get range as object
//     let ra_c=sh.getRange('C1')                //get range as object
//     let ra_d=sh.getRange('D1')
//
//     let a=ra_a.getValue()                     //get value of the range
//     let b=ra_b.getValue()                     //get value of the range
//
//     let res=sumEs6(a,b)                        // calculate the result via our first function
//     let resdecrement=decnums(a,b)
//
//     ra_c.setValue(res)                        //put the result to the range 'C1'
//     ra_d.setValue(resdecrement)
//
//
// }
//
//
// function mySort(arr) {
//     let result=arr.sort(sortFunction);
//
//     return result
//
//
//
//     // I took a 'sortFunction from the internet
//     function sortFunction(a,b) {
//         if(a[0]===b[0]){
//             return 0;
//         }
//         else{
//             return (a[0] < b[0]) ? -1 :1;
//         }
//     }
//
// }
//
//
//
// function mySortTest(){
//     const ss=SpreadsheetApp.getActiveSpreadsheet()
//     //the active spreadsheet as an object will be returned to the 'ss' variable
//     const sh=ss.getSheetByName('Stage 1');
//     // the sheet with the name 'Stage 1' as an object will be returned to the 'sh' variable
//     let ra_array=sh.getRange('A9:B13')
//     //get range as object
//     let arr=ra_array.getValues;
//     let res=mySort(arr)
//
//     //output the array to the sheet
//     sh.getRange(9,10,res.length,res[0].length).setValues(res)
//     //getRange (row:any,column:any,numRows:any,numColumns:any)
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
// //************************ stage1_total.gs***********************************
// //************************ stage1_total.gs***********************************
// //************************ stage1_total.gs***********************************
//
// function multiplyCells() {
//     let ss = SpreadsheetApp.getActiveSpreadsheet();
//     let sh = ss.getSheetByName('Stage 1'); // Имя листа, на котором находятся ячейки для умножения
//
//     let range1 = sh.getRange('B25:B33'); // Диапазон первых 9 ячеек
//     let range2 = sh.getRange('C25:C33'); // Диапазон вторых 9 ячеек
//
//     let values1 = range1.getValues(); // Получаем значения из первого диапазона
//     let values2 = range2.getValues(); // Получаем значения из второго диапазона
//
//     let result = []; // Создаем пустой массив для хранения результата
//
//     // Итерируемся по значениям в первом диапазоне и умножаем их на значения во втором диапазоне
//     for (let i = 0; i < values1.length; i++) {
//         let row = [];
//         for (let j = 0; j < values1[i].length; j++) {
//             row.push(values1[i][j] * values2[i][j]);
//         }
//         result.push(row);
//     }
//
//     // Записываем результат в третий диапазон
//     let range3 = sh.getRange('L25:L33'); // Диапазон, куда будет записываться результат
//     range3.setValues(result); // Записываем значения в ячейки диапазона
//
//     //Записываем Description
//     const sourceRange = sh.getRange('A25:A33');
//     const destinationRange = sh.getRange('K25:K33');
//     const values = sourceRange.getValues();
//     destinationRange.setValues(values);
//
//     //Записываем Total
//
//     // Получаем первый диапазон ячеек, из которых будем копировать значения
//     let sumRange = sh.getRange('L25:L33');
//     let sumValues = sumRange.getValues();
//     let resultofSum=0;
//     for (let cell of sumValues) { // Проходим по всем ячейкам в диапазоне
//         resultofSum += Number(cell); // Добавляем значение ячейки к общей сумме
//     }
//
//     // Получаем второй диапазон ячеек, в которые будем записывать значения
//     let totalRange = sh.getRange('L34');
//
//     // Переносим значения из первого диапазона во второй
//     totalRange.setValue(resultofSum);
//
//     //Добавим текст "Total" в ячейку
//     let total = sh.getRange("K34");
//     total.setValue("Total");
//
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// в Google Apps Script  в таблице  есть два  массива ( по два столбца)   в первом id ,name  во втором с id и email, соедени их  и выведи в три  столбца  : id ,  email , name.   отсортируй по id.     Не у каждого массива есть name и email
//
// Вы можете использовать метод map для объединения двух массивов, затем отсортировать их по id, и использовать метод forEach для вывода значений в три столбца. Вот пример кода:
//
//     javascript
// Copy code
// function combineArrays() {
//     var sheet = SpreadsheetApp.getActiveSheet();
//     var range1 = sheet.getRange("A2:B"); // первый массив
//     var range2 = sheet.getRange("D2:E"); // второй массив
//
//     // Получаем значения из двух диапазонов и объединяем их в один массив
//     var array1 = range1.getValues().map(function(row) {
//         return { id: row[0], name: row[1] };
//     });
//     var array2 = range2.getValues().map(function(row) {
//         return { id: row[0], email: row[1] };
//     });
//
//     // Объединяем два массива по id
//     var combinedArray = array1.map(function(row1) {
//         var row2 = array2.find(function(row2) {
//             return row2.id === row1.id;
//         });
//         return Object.assign(row1, row2);
//     });
//
//     // Сортируем массив по id
//     combinedArray.sort(function(a, b) {
//         return a.id - b.id;
//     });
//
//     // Выводим значения в таблицу
//     var outputRange = sheet.getRange("G2:I");
//     combinedArray.forEach(function(row, index) {
//         var outputRow = [row.id, row.email || "", row.name || ""];
//         outputRange.offset(index, 0, 1, 3).setValues([outputRow]);
//     });
// }
// Этот код объединяет два массива по id, сортирует результат по id и выводит значения в три столбца (id, email, name). Если значение name или email отсутствует, оно будет заменено на пустую строку. Обратите внимание, что диапазоны данных (range1 и range2) и диапазон вывода (outputRange) могут быть настроены в зависимости от ваших потребностей.
//
//
//
//
//
//
//     Проблема в том, что функция setValues() ожидает, чтобы данные были переданы в виде двумерного массива. В вашем коде результат склейки двух массивов не был преобразован в двумерный массив, поэтому он не может быть выведен в ячейки.
//
//     Вот исправленный код:
//
//     javascript
// Copy code
// function mergeArrays() {
//     const ss = SpreadsheetApp.getActiveSpreadsheet();
//     const sheet = ss.getSheetByName("Sheet1");
//
//     const arr1 = sheet.getRange("A2:B").getValues();
//     const arr2 = sheet.getRange("D2:E").getValues();
//
//     const mergedArr = arr1.map(row1 => {
//         const row2 = arr2.find(row2 => row2[0] === row1[0]);
//         if (row2) {
//             return [row1[0], row2[1], row1[1]];
//         } else {
//             return [row1[0], "", row1[1]];
//         }
//     });
//
//     mergedArr.sort((a, b) => a[0] - b[0]);
//
//     const outputRange = sheet.getRange(2, 7, mergedArr.length, mergedArr[0].length);
//     outputRange.setValues(mergedArr);
// }
// В этой версии кода мы используем метод map() для создания нового массива mergedArr, который содержит объединенные данные из arr1 и arr2. Если для заданного id в arr2 есть соответствующая строка, мы берем ее email и добавляем в новый массив, иначе мы добавляем пустую строку. Затем мы сортируем объединенный массив по id и выводим его в ячейки с помощью setValues().
//
//
//
//
//     ///////////РАБОЧИЙ КОД  ********************************** TASK2
//
//     // stage1_arrays
//
//
// //  var ss = SpreadsheetApp.getActiveSpreadsheet();
// //    var sh = ss.getSheetByName("Stage 1");
// //    const arr1 = sh.getRange("A40:B").getValues; // первый массив
// //    const arr2 = sh.getRange("D40:E").getValues; // второй массив
//
//
//     function mergeArrays() {
//     const ss = SpreadsheetApp.getActiveSpreadsheet();
//     const sheet = ss.getSheetByName("Stage 1");
//
//     const arr1 = sheet.getRange("A40:B48").getValues();
//     const arr2 = sheet.getRange("D40:E45").getValues();
//     debugger
//
//     const mergedArr = arr1.map(row1 => {
//         const row2 = arr2.find(row2 => row2[0] === row1[0]);
//         if (row2) {
//             return [row1[0], row2[1], row1[1]];
//         } else {
//             return [row1[0], "", row1[1]];
//         }
//     });
//
//     mergedArr.sort((a, b) => a[0] - b[0]);
//     debugger
//     const outputRange = sheet.getRange("K40:M48");
//     outputRange.setValues(mergedArr);
// }
//
// // В этой версии кода мы используем метод map() для создания нового массива mergedArr, который содержит объединенные данные из arr1 и arr2. Если для заданного id в arr2 есть соответствующая строка, мы берем ее email и добавляем в новый массив, иначе мы добавляем пустую строку. Затем мы сортируем объединенный массив по id и выводим его в ячейки с помощью setValues().
//
//
//
//
//
//
// // **********WORKED VARIARNT*************
//
//      stage1_arrays_v2
//
//
//
//
//
//
//
// function mergeArraysv2() {
//     const ss = SpreadsheetApp.getActiveSpreadsheet();
//     const sheet = ss.getSheetByName("Stage 1");
//
//     const arr1 = sheet.getRange("A40:B48").getValues();
//     const arr2 = sheet.getRange("D40:E45").getValues();
//
//
//     const hasId = arr1.some(row => row[0] === 12);
//     if (!hasId) {
//         arr1.push([12, "", ""]);
//     }
//
//     const mergedArrv2 = arr1.map(row1 => {
//         const row2 = arr2.find(row2 => row2[0] === row1[0]);
//         if (row2) {
//             return [row1[0], row2[1], row1[1]];
//         } else {
//             return [row1[0], "", row1[1]];
//         }
//     });
//
//
//     const allIds = new Set(arr1.concat(arr2).map(row => row[0]));
//     if (mergedArrv2.length !== allIds.size) {
//         console.log("Some IDs are missing in the merged array");
//     }
//     debugger
//     mergedArrv2.sort((a, b) => a[0] - b[0]);
//
//     const outputRange = sheet.getRange("K40:M49");
//
//     outputRange.setValues(mergedArrv2);
// }
//
//
//
//
// {
//     "base": "vs-dark",
//     "colors": {
//     "editor.background": "#282c34",
//         "editor.foreground": "#56aced",
//         "editor.lineHighlightBackground": "#010E17",
//         "editor.selectionBackground": "#5f7e9779",
//         "editor.selectionHighlightBorder": "#122d42",
//         "editorCursor.foreground": "#80a4c2",
//         "editorIndentGuide.background": "#5e81ce52",
//         "editorWhitespace.foreground": "#2e2040"
// },
//     "inherit": true,
//     "rules": [
//     {
//         "background": "011627",
//         "token": ""
//     },
//     {
//         "fontStyle": "italic",
//         "foreground": "515351",
//         "token": "comment"
//     },
//     //lol
//     {
//         "fontStyle": "bold",
//         "foreground": "43a8ed",
//         "token": "keyword"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "43a8ed",
//         "token": "storage"
//     },
//     {
//         "foreground": "44aa43",
//         "token": "constant.numeric"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "c5656b",
//         "token": "constant"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "585cf6",
//         "token": "constant.language"
//     },
//     {
//         "foreground": "318495",
//         "token": "variable.language"
//     },
//     {
//         "foreground": "318495",
//         "token": "variable.other"
//     },
//     {
//         "foreground": "70b672",
//         "token": "string"
//     },
//     {
//         "foreground": "2fe420",
//         "token": "constant.character.escape"
//     },
//     {
//         "foreground": "2fe420",
//         "token": "string source"
//     },
//     {
//         "foreground": "1a921c",
//         "token": "meta.preprocessor"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "9aff87",
//         "token": "keyword.control.import"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "ff9358",
//         "token": "entity.name.function"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "ff9358",
//         "token": "keyword.other.name-of-parameter.objc"
//     },
//     {
//         "fontStyle": "underline",
//         "token": "entity.name.type"
//     },
//     {
//         "fontStyle": "italic",
//         "token": "entity.other.inherited-class"
//     },
//     {
//         "fontStyle": "italic",
//         "token": "variable.parameter"
//     },
//     {
//         "foreground": "8b8e9c",
//         "token": "storage.type.method"
//     },
//     {
//         "fontStyle": "italic",
//         "token": "meta.section entity.name.section"
//     },
//     {
//         "fontStyle": "italic",
//         "token": "declaration.section entity.name.section"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "7290d9",
//         "token": "support.function"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "6d79de",
//         "token": "support.class"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "6d79de",
//         "token": "support.type"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "00af0e",
//         "token": "support.constant"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "2f5fe0",
//         "token": "support.variable"
//     },
//     {
//         "foreground": "687687",
//         "token": "keyword.operator.js"
//     },
//     {
//         "background": "990000",
//         "foreground": "ffffff",
//         "token": "invalid"
//     },
//     {
//         "background": "ffd0d0",
//         "token": "invalid.deprecated.trailing-whitespace"
//     },
//     {
//         "background": "f5aa7730",
//         "token": "text source"
//     },
//     {
//         "background": "f5aa7730",
//         "token": "string.unquoted"
//     },
//     {
//         "foreground": "8f7e65",
//         "token": "meta.tag.preprocessor.xml"
//     },
//     {
//         "foreground": "888888",
//         "token": "meta.tag.sgml.doctype"
//     },
//     {
//         "fontStyle": "italic",
//         "token": "string.quoted.docinfo.doctype.DTD"
//     },
//     {
//         "foreground": "43a8ed",
//         "token": "meta.tag"
//     },
//     {
//         "foreground": "43a8ed",
//         "token": "declaration.tag"
//     },
//     {
//         "fontStyle": "bold",
//         "token": "entity.name.tag"
//     },
//     {
//         "fontStyle": "italic",
//         "token": "entity.other.attribute-name"
//     }
// ]
// }
//
//
//
//
//
// //local save of colors CUSTOM ************************
//
//
//
// {
//     "base": "vs-dark",
//     "colors": {
//     "editor.background": "#282c34",
//         "editor.foreground": "e06c75",
//         "editor.lineHighlightBackground": "#010E17",
//         "editor.selectionBackground": "#5f7e9779",
//         "editor.selectionHighlightBorder": "#122d42",
//         "editorCursor.foreground": "#80a4c2",
//         "editorIndentGuide.background": "#5e81ce52",
//         "editorWhitespace.foreground": "#2e2040"
// },
//     "inherit": true,
//     "rules": [
//     {
//         "background": "#011627",
//         "token": ""
//     },
//     {
//         "fontStyle": "italic",
//         "foreground": "#515351",
//         "token": "comment"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "#43a8ed",
//         "token": "keyword"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "#43a8ed",
//         "token": "storage"
//     },
//     {
//         "foreground": "#44aa43",
//         "token": "constant.numeric"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "#c5656b",
//         "token": "constant"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "#585cf6",
//         "token": "constant.language"
//     },
//     {
//         "foreground": "#318495",
//         "token": "variable.language"
//     },
//     {
//         "foreground": "#318495",
//         "token": "variable.other"
//     },
//     {
//         "foreground": "#70b672",
//         "token": "string"
//     },
//     {
//         "foreground": "#2fe420",
//         "token": "constant.character.escape"
//     },
//     {
//         "foreground": "#2fe420",
//         "token": "string source"
//     },
//     {
//         "foreground": "#1a921c",
//         "token": "meta.preprocessor"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "#9aff87",
//         "token": "keyword.control.import"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "#ff9358",
//         "token": "entity.name.function"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "#ff9358",
//         "token": "keyword.other.name-of-parameter.objc"
//     },
//     {
//         "fontStyle": "underline",
//         "token": "entity.name.type"
//     },
//     {
//         "fontStyle": "italic",
//         "token": "entity.other.inherited-class"
//     },
//     {
//         "fontStyle": "italic",
//         "token": "variable.parameter"
//     },
//     {
//         "foreground": "#8b8e9c",
//         "token": "storage.type.method"
//     },
//     {
//         "fontStyle": "italic",
//         "token": "meta.section entity.name.section"
//     },
//     {
//         "fontStyle": "italic",
//         "token": "declaration.section entity.name.section"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "#7290d9",
//         "token": "support.function"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "#6d79de",
//         "token": "support.class"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "#6d79de",
//         "token": "support.type"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "#00af0e",
//         "token": "support.constant"
//     },
//     {
//         "fontStyle": "bold",
//         "foreground": "#2f5fe0",
//         "token": "support.variable"
//     },
//     {
//         "foreground": "#687687",
//         "token": "keyword.operator.js"
//     },
//     {
//         "background": "990000",
//         "foreground": "#ffffff",
//         "token": "invalid"
//     },
//     {
//         "background": "#ffd0d0",
//         "token": "invalid.deprecated.trailing-whitespace"
//     },
//     {
//         "background": "f5aa7730",
//         "token": "text source"
//     },
//     {
//         "background": "f5aa7730",
//         "token": "string.unquoted"
//     },
//     {
//         "foreground": "#8f7e65",
//         "token": "meta.tag.preprocessor.xml"
//     },
//     {
//         "foreground": "#888888",
//         "token": "meta.tag.sgml.doctype"
//     },
//     {
//         "fontStyle": "italic",
//         "token": "string.quoted.docinfo.doctype.DTD"
//     },
//     {
//         "foreground": "#43a8ed",
//         "token": "meta.tag"
//     },
//     {
//         "foreground": "#43a8ed",
//         "token": "declaration.tag"
//     },
//     {
//         "fontStyle": "bold",
//         "token": "entity.name.tag"
//     },
//     {
//         "fontStyle": "italic",
//         "token": "entity.other.attribute-name"
//     }
// ]
// }
//
//
// "foreground": "#a1d0d1",
//
//
//     //my based theme
//     //my based theme
//     //my based theme
//     //my based theme
//     //my based theme
//     //my based theme
//     //my based theme
//     //my based theme
//     //my based theme
//     //my based theme
//     //my based theme
//
//     {
//         "base": "vs-dark",
//         "colors": {
//             "editor.background": "#282c34",
//             "editor.foreground": "e06c75",
//             "editor.lineHighlightBackground": "#010E17",
//             "editor.selectionBackground": "#5f7e9779",
//             "editor.selectionHighlightBorder": "#122d42",
//             "editorCursor.foreground": "#80a4c2",
//             "editorIndentGuide.background": "#5e81ce52",
//             "editorWhitespace.foreground": "#2e2040"
//         },
//         "inherit": true,
//         "rules": [
//             {
//                 "background": "#011627",
//                 "token": ""
//             },
//             {
//                 "fontStyle": "italic",
//                 "foreground": "#515351",
//                 "token": "comment"
//             },
//             {
//                 "fontStyle": "bold",
//                 "foreground": "#43a8ed",
//                 "token": "keyword"
//             },
//             {
//                 "fontStyle": "bold",
//                 "foreground": "#43a8ed",
//                 "token": "storage"
//             },
//             {
//                 "foreground": "#44aa43",
//                 "token": "constant.numeric"
//             },
//             {
//                 "fontStyle": "bold",
//                 "foreground": "#c5656b",
//                 "token": "constant"
//             },
//             {
//                 "fontStyle": "bold",
//                 "foreground": "#585cf6",
//                 "token": "constant.language"
//             },
//             {
//                 "foreground": "#318495",
//                 "token": "variable.language"
//             },
//             {
//                 "foreground": "#318495",
//                 "token": "variable.other"
//             },
//             {
//                 "foreground": "#70b672",
//                 "token": "string"
//             },
//             {
//                 "foreground": "#2fe420",
//                 "token": "constant.character.escape"
//             },
//             {
//                 "foreground": "#2fe420",
//                 "token": "string source"
//             },
//             {
//                 "foreground": "#1a921c",
//                 "token": "meta.preprocessor"
//             },
//             {
//                 "fontStyle": "bold",
//                 "foreground": "#9aff87",
//                 "token": "keyword.control.import"
//             },
//             {
//                 "fontStyle": "bold",
//                 "foreground": "#ff9358",
//                 "token": "entity.name.function"
//             },
//             {
//                 "fontStyle": "bold",
//                 "foreground": "#ff9358",
//                 "token": "keyword.other.name-of-parameter.objc"
//             },
//             {
//                 "fontStyle": "underline",
//                 "token": "entity.name.type"
//             },
//             {
//                 "fontStyle": "italic",
//                 "token": "entity.other.inherited-class"
//             },
//             {
//                 "fontStyle": "italic",
//                 "token": "variable.parameter"
//             },
//             {
//                 "foreground": "#8b8e9c",
//                 "token": "storage.type.method"
//             },
//             {
//                 "fontStyle": "italic",
//                 "token": "meta.section entity.name.section"
//             },
//             {
//                 "fontStyle": "italic",
//                 "token": "declaration.section entity.name.section"
//             },
//             {
//                 "fontStyle": "bold",
//                 "foreground": "#7290d9",
//                 "token": "support.function"
//             },
//             {
//                 "fontStyle": "bold",
//                 "foreground": "#6d79de",
//                 "token": "support.class"
//             },
//             {
//                 "fontStyle": "bold",
//                 "foreground": "#6d79de",
//                 "token": "support.type"
//             },
//             {
//                 "fontStyle": "bold",
//                 "foreground": "#00af0e",
//                 "token": "support.constant"
//             },
//             {
//                 "fontStyle": "bold",
//                 "foreground": "#2f5fe0",
//                 "token": "support.variable"
//             },
//             {
//                 "foreground": "#687687",
//                 "token": "keyword.operator.js"
//             },
//             {
//                 "background": "990000",
//                 "foreground": "#ffffff",
//                 "token": "invalid"
//             },
//             {
//                 "background": "#ffd0d0",
//                 "token": "invalid.deprecated.trailing-whitespace"
//             },
//             {
//                 "background": "f5aa7730",
//                 "token": "text source"
//             },
//             {
//                 "background": "f5aa7730",
//                 "token": "string.unquoted"
//             },
//             {
//                 "foreground": "#8f7e65",
//                 "token": "meta.tag.preprocessor.xml"
//             },
//             {
//                 "foreground": "#888888",
//                 "token": "meta.tag.sgml.doctype"
//             },
//             {
//                 "fontStyle": "italic",
//                 "token": "string.quoted.docinfo.doctype.DTD"
//             },
//             {
//                 "foreground": "#43a8ed",
//                 "token": "meta.tag"
//             },
//             {
//                 "foreground": "#43a8ed",
//                 "token": "declaration.tag"
//             },
//             {
//                 "fontStyle": "bold",
//                 "token": "entity.name.tag"
//             },
//             {
//                 "fontStyle": "italic",
//                 "token": "entity.other.attribute-name"
//             }
//         ]
//     }