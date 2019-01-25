// // // let ask = (question, yes, no) => (confirm(question) ? yes() : no());

// // // ask(
// // //   "Do you agree",
// // //   () => alert("You agreed"),
// // //   () => alert("You canceled the execution")
// // // );

// // // let user = {};

// // // user.name = "Jhon";

// // // user.surname = "Hamiltom";
// // // user.name = "Pepe";
// // // delete user.name;

// // function isEmpty(obj) {
// //   for (let key in obj) {
// //     return false;
// //   }
// //   return true;
// // }

// // let user = {};

// // alert("Está vacío? " + isEmpty(user));
// // user.age = 15;
// // alert("Está vacío? " + isEmpty(user));

// // Si es posible cambiar los valores de los objetos creados como constantes.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// function sumSalaries(obj) {
//   let sum = 0;
//   for (key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// }

// alert("La suma de los salarios es " + sumSalaries(salaries));

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") obj[key] = obj[key] + obj[key];
//   }
// }

// function listObjet(obj) {
//   for (let key in obj) {
//     alert(key + ": " + obj[key]);
//   }
// }

// listObjet(menu);
// multiplyNumeric(menu);
// listObjet(menu);
