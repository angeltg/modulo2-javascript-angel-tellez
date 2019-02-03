// // Remplaza desde y cauntos queremos borrar
// Array.splice(1, 1);

// Array.slide(start,end);

// // Si es un array coge las comas

// // El end no está incluido

// array.concat(["asd","asdd"]);

// // concatena arrays

// // recorrer
// ["asd","asas"].forEach(item,index,array){

// }

// // para buscar

// // indexOf/lastIndexOf and icludes

// find  (function(item,index,array))
// findIndex

// Devuelve un array de elementos coindentes

// let someUsers = filter(item => item.id < 3); //Devuelve los 2 primeros

// // Devuelve arry con coincidencias
// map
// //
// // Ordena los elementos dentro del array como stings
// sort (fn);
// // Se le puede pasar una función para que haga el orden que queramos

// let arr = [1, 15, 2];

// arr.sort(function(a, b) {
//   return a - b;
// });
// console.log(arr);

// reverse Le da la vuelta al array

// split (separa) and join (junta)

//reduce/reduceRight Suma todos los elementos del array.

// isArray es para saber si es una variable array

// Separa los elementos por el guión y los uno poniendo la primera letra de la segunda palabra en mayúsculas

// function camelize(str) {
//   let arr = str.split("-");

//   let arrmap = arr.map(function(item, index) {
//     if (index > 0) {
//       return item.charAt(0).toUpperCase() + item.slice(1);
//     } else {
//       return item;
//     }
//   });

//   return arrmap.join("");
// }
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// Suma las edades de los usuarios y la divide entre el número de usuarios

// function getAge(arr) {
//   let result = arr.reduce((previousValue, item) => previousValue + item, 0);
//   return result;
// }

// function plusAge(arr) {
//   let arrage = arr.map(function(item) {
//     console.log(item.age);
//     return item.age;
//   });

//   let result = getAge(arrage);
//   console.log(result);
//   return result;
// }

// function getAverageAge(arr) {
//   return plusAge(arr) / arr.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// console.log("El resultado es " + getAverageAge(arr));

// Escribe la función filterRange(arr, a, b) que obtiene un array arr,busca elementos entre a y b y en y lo devuelve en un array de ellos..

// LA función no debe modificar el array. Dbería devolver un nuevo array. Por ejemplo:

// function filterRange(arr, a, b) {
//   return arr.slice(a, b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// // alert(filtered); // 3,1 (matching values)

// console.log(arr);
// console.log(filtered);
// // 5,3,8,1 (not modified)

// function filterRangeInPlace(arr, a, b) {
//   let theend = b - a;
//   arr.splice(0, a);
//   arr.splice(b, arr.lenght);
// }((
// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];

// arr.sort().reverse();
// console.log(arr);

// Copy and sort array

// function copySorted(arr) {
//   return arr.slice(0, arr.length).sort();
// }

// let arr = ["html", "JavasScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// Map to names

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// function getNames(users) {
//   let result = users.map(function(item) {
//     return item.name;
//   });

//   return result;
// }

// let names = getNames(users);

// console.log(names);

// Creat an extendable calculator

// class Calculator {
//   constructor() {
//     this.operation = [];
//   }
//   calculate(params) {
//     params;
//     let operators = params.split(" ");
//     let signoDeLaOp = operators[1];

//     let solution = this.operation[signoDeLaOp](operators[0], operators[2]);

//     console.log("Solution seria ->  ", solution);

//     return eval(params);
//   }
//   addMethod(name, func) {
//     this.operation[name] = func;
//   }
// }
// let calc = new Calculator();
// // console.log(calc.calculate("1 - 2"));
// console.log(calc.addMethod("*", (a, b) => a * b));
// console.log(calc.addMethod("/", (a, b) => a / b));
// console.log(calc.addMethod("**", (a, b) => a ** b));
// // console.log(calc);
// calc.calculate("2 * 3");
// calc.calculate("2 / 3");
// calc.calculate("2 ** 3");

// calculator con maps

class Calculator {
  constructor() {
    this.operator = new Map();
  }
  calculate(params) {
    let operators = params.split(" ");
    let signoDeLaOp = operators[1];

    let solution = this.operator[signoDeLaOp]((operators[0], operators[2]));
    return solution;
  }

  addMethod(name, func) {
    //   Añadimos las funciones al método
    // this.operator[name] = func;
    this.operator.set(name, func);

    console.log(this.operator[name]);
  }
}

let calc = new Calculator();

console.log(calc.addMethod("*", (a, b) => a * b));
calc.calculate("2 * 3");

// Map to objects

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// function getFullName(users) {
//   let result = users.map(function(item, index) {
//     let arr2 = [];
//     arr2.fullName = item.name + " " + item.surname;
//     arr2.id = item.id;

//     return arr2;
//   });
//   return result;
// }

// let usersMapped = getFullName(users);

// console.log(usersMapped);

// Sort objects

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [john, pete, mary];

// function sortByName(arr) {
//   let arr2 = arr.map(function(item) {
//     return item.name;
//   });
//   arr2.sort();
//   let arr3 = arr2.map(function(item) {
//     let arr4 = [];
//     arr4.name = item;
//     return arr4;
//   });
//   return arr3;
// }

// console.log(arr);
// console.log(sortByName(arr));

// Shuffle an array

// let arr = [1, 2, 3];

// function shufflet(arr) {
//   let arr3 = [];
//   let arr2 = arr.map(function(item, index) {
//     // console.log(item);
//     return item;
//   });

//   let itemsplice;
//   let hasta;

//   do {
//     let position = Math.floor(Math.random() * arr2.length + 1) - 1;
//     itemsplice = arr2.splice(position, 1);

//     arr3.push(itemsplice);
//     hasta = arr2.length + 2;
//   } while (arr3.length < hasta);

//   return arr3;
// }

// console.log(shufflet(arr));
// console.log(shufflet(arr));
// console.log(shufflet(arr));
