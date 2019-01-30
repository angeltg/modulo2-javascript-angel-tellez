// // // // alert("I*!*'*/!*m the Walrus!"); // *!*I'm*/!* the Walrus!
// // // // I*!*'*/!*m the Walrus!

// // // // str.includes("x");
// // // // str.indexOf
// // // // str.lastIndexOf

// // // // str.startsWith("asd") //Busca desde el principio
// // // // str.endsWiht("get") //Busca desde el final

// // // // str.slice(5,5); //Posicion de inicio y de fin. Coje lo que hay en el medio.

// // // // str.substring(2,4) // Vete a la posicion 2 y coje 4.

// // // function ucFirst(str) {
// // //   let str1 = str[0].toUpperCase() + str.slice(1);

// // //   return str1;
// // // }

// // // console.log(ucFirst("john"));

// // function checkSpam(str) {
// //   let STR = str.toUpperCase();
// //   if (STR.includes("XXX") || STR.includes("VIAGRA")) {
// //     return true;
// //   } else return false;
// // }

// // console.log(checkSpam("buy ViaGra no"));
// // console.log(checkSpam("free xxxxx"));
// // console.log(checkSpam("innocent rabbit"));

// // function truncate(str, maxlength) {
// //   if (str.length > maxlength) {
// //     return str.slice(0, maxlength - 1) + "...";
// //   } else return str;
// // }

// // console.log(truncate("What I'd like to tell on this topic is:", 20));

// function extractCurrencyValue(str) {
//   let posdollar = str.indexOf("$");
//   //   return posdollar;
//   return +str.slice(posdollar + 1);
// }

// console.log(extractCurrencyValue("$120"));

// shift() Extrae del principio
// pop () Extrae del final
// Push() Agrega al final
// unshift() Agrega al principio

// ogjet.sing para clonar objetos

// Para recorrer los arrays con la forma moderna
// for (const iterator of object) {

// }

// let music = ["Jazz", "Blues"];
// console.log(music);
// music.push("Rock-n-Roll");
// console.log(music);
// let valormedio = Math.floor(music.length / 2);
// music[valormedio] = "Classic";
// console.log(music);
// console.log(music.shift());
// console.log(music);
// music.unshift("Rap", "Reggae");
// console.log(music);

//////////////////////////////////////////////////////////////////

// let arr = ["a", "b"];
// // undefined
// arr.push(function() {
//   alert(this);
// });

// arr[2]();

////////////////////////////////////////////////////////////////

// let continuevar = true;
// let numerosasumar = [];

// function showCancel(parametro) {
//   return (
//     parametro == "" ||
//     parametro == undefined ||
//     parametro == null ||
//     isNaN(parametro)
//   );
// }

// do {
//   let valor = prompt("Ingresa el número a incluir en el array");

//   if (showCancel(valor)) {
//     alert("Has cancelado el proceso");
//     continuevar = false;
//   } else {
//     numerosasumar.push(+valor);
//   }
// } while (continuevar);

// let sumatotal = 0;
// function sumadelarray() {
//   for (let iterator of numerosasumar) {
//     sumatotal += +iterator;
//   }
//   return sumatotal;
// }
// console.log(numerosasumar);

// console.log("La suma de los elementos del array es: " + sumadelarray());
// console.log(isNaN(0));

////////////////////////////////////////////////////////////

// function getMaxSubSum(arr) {
//   let plus = 0;
//   let before = 0;
//   let total = 0;
//   let arrplus = [];
//   for (let iterator of arr) {
//     plus += iterator;
//     arrplus.push(plus);
//     if (plus > 0 && plus > iterator) {
//       before = plus;
//     } else {
//       plus = iterator;
//       if (iterator > before) {
//         before = iterator;
//       }
//     }
//     total = before;
//     if (total < Math.max.apply(Math, arrplus)) {
//       total = Math.max.apply(Math, arrplus);
//     }

//     // console.log("plus " + plus + " before " + before + " total " + total);
//   }
//   return total;
// }

// console.log(getMaxSubSum([-1, 2, 3, -9]));
// console.log(getMaxSubSum([2, -1, 2, 3, -9]));
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log(getMaxSubSum([-2, -1, 1, 2]));
// console.log(getMaxSubSum([100, -9, 1, -3, 5]));
// console.log(getMaxSubSum([1, 2, 3]));
// console.log(getMaxSubSum([-1, -2, -3]));
