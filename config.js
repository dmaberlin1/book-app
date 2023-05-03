// //***********************Singletons ********************
// ////-----------------based---Config------------------------
//
// var DATA_CONFIG =
//     {
//         header_ind: 0,
//         data1: undefined,
//         data2: undefined,
//         fields1:
//             {
//                 id: { title: "id_client", ind: -1 },
//                 name: { title: "Name", ind: -1 }
//             },
//         fields2:
//             {
//                 id: { title: "id", ind: -1 },
//                 email: { title: "Email", ind: -1 }
//             },
//         ini: function (sh_name) {
//             var ss = SpreadsheetApp.getActive()
//             var sh = ss.getSheetByName(sh_name)
//             this.data1 = sh.getDataRange().getValues()
//             for (var f in this.fields1) {
//                 var curr_title = this.fields1[f].title
//                 var curr_ind = this.data1[this.header_ind].indexOf(curr_title)
//                 this.fields1[f].ind = curr_ind
//             }
//         }
//
//     }
//
// var CONFIG1 =
//     {
//         header_ind: 0,
//         sh_name: "test1",
//         data: undefined,
//         fields:
//             {
//                 id: { title: "id", ind: -1, output_ind:0 },
//                 name: { title: "Name", ind: -1, output_ind:1 }
//             }
//
//     }
//
// var CONFIG2 =
//     {
//         header_ind: 0,
//         sh_name: "test2",
//         data: undefined,
//         fields:
//             {
//                 id: { title: "id", ind: -1, output_ind:0 },
//                 email: { title: "Email", ind: -1, output_ind:2 }
//             }
//     }
//
// function iniConfig(obj) {
//     var ss = SpreadsheetApp.getActive()
//     var sh = ss.getSheetByName(obj.sh_name)
//     obj.data = sh.getDataRange().getValues()
//     for (var f in obj.fields) {
//         var curr_title = obj.fields[f].title
//         var curr_ind = obj.data[obj.header_ind].indexOf(curr_title)
//         if(obj.fields[f].ind==-1) obj.fields[f].ind = curr_ind
//     }
//     return obj
// }
//
//
//
// function joinArraysTest() {
//
//     var arr1 = iniConfig(CONFIG1).data
//     var arr2 = iniConfig(CONFIG2).data
//
//
//     // DATA_CONFIG.ini("test")
//     // var arr1 = DATA_CONFIG.data1
//
//     // var ss = SpreadsheetApp.getActive()
//     // var sh = ss.getSheetByName(DATA_CONFIG.sh_name)
//
//     // var arr1 = sh.getRange("A39:B48").getValues()
//     // var arr2 = sh.getRange("D39:E44").getValues()
//
//     var arr_res = joinArrays(arr1, arr2)
//     // arr_res = sortArray(arr_res)
//
//     var ss = SpreadsheetApp.getActive()
//     var sh = ss.getSheetByName("test3")
//     sh.getRange(1, 1, arr_res.length, arr_res[0].length).setValues(arr_res)
//
// }
//
//
// // model
// function joinArrays(arr1, arr2) {
//     var arr_res = []
//
//     var obj = {}
//
//     // headers
//     arr_res.push(new Array(3))
//     for(var f in CONFIG1.fields) arr_res[arr_res.length - 1][CONFIG1.fields[f].output_ind] = CONFIG1.fields[f].title
//     for(var f in CONFIG2.fields) arr_res[arr_res.length - 1][CONFIG2.fields[f].output_ind] = CONFIG2.fields[f].title
//
//
//     for (var r1 = 0; r1 < arr1.length; r1++) {
//         if(r1==CONFIG1.header_ind) continue
//         var curr_id = arr1[r1][CONFIG1.fields.id.ind]
//         if (curr_id == undefined) continue
//         var curr_name = arr1[r1][CONFIG1.fields.name.ind]
//         if (obj[curr_id] == undefined) obj[curr_id] = {}
//         obj[curr_id].name = curr_name
//     }
//
//     for (var r2 = 0; r2 < arr2.length; r2++) {
//         if(r2==CONFIG2.header_ind) continue
//         var curr_id = arr2[r2][CONFIG2.fields.id.ind]
//         if (curr_id == undefined) continue
//         var curr_email = arr2[r2][CONFIG2.fields.email.ind]
//         if (obj[curr_id] == undefined) obj[curr_id] = {}
//         obj[curr_id].email = curr_email
//     }
//
//     for (var id in obj) {
//         arr_res.push(new Array(3))
//         // arr_res.push(["","",""])
//         arr_res[arr_res.length - 1][CONFIG1.fields.id.output_ind] = id
//         arr_res[arr_res.length - 1][CONFIG1.fields.name.output_ind] = (obj[id].name != undefined) ? obj[id].name : ""
//         arr_res[arr_res.length - 1][CONFIG2.fields.email.output_ind] = (obj[id].email != undefined) ? obj[id].email : ""
//     }
//
//     return arr_res;
// }