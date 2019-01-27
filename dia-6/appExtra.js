// Crear una expresión regular valide una fecha en formato "XX/XX/XXXX", donde "X" es un dígito. Probarlo con la expresión: "Nací el 05/04/1982 en Donostia.".

// function validateDate(str) {
//   let arraystr = str.split("/");
//   let dia = arraystr[0].substr(-2, 2);
//   let mes = arraystr[1];
//   let anho = arraystr[2].substr(0, 4);

//   let date = dia + "/" + mes + "/" + anho;
//   return date;
// }

// console.log(validateDate("Nací el 05/04/1982 en Donostia."));

// function lanzardatos() {
//   let valor1 = Math.random();
//   valor2 = Math.round(valor1);
//   return valor2;
// }

// console.log(lanzardatos());

///////////////////////////////////////////////////////

// Dados dos objectos, declara una función que me diga cuál de los dos objectos es que el que está vacío.

// function isEmptyObj(obj) {
//   for (let key in obj) {
//     return obj.hasOwnProperty(key);
//   }
// }

// let nadaAqui = {};
// let algoAqui = {
//   unparameter: "Uno"
// };

// if (!isEmptyObj(nadaAqui)) {
//   console.log("nadaAqui es el objeto que está vacío");
// } else {
//   if (!isEmptyObj(algoAqui)) {
//     console.log("algoAqui es el objeto que está vacío");
//   } else {
//     console.log("Los dos objetos están llenos");
//   }
// }
///////////////////////////////////////////////
// Así lo hizo Aitor
// function estaVacio(map) {
//     for(var key in map) {
//       if (map.hasOwnProperty(key)) {
//          return false;
//       }
//     }
//     return true;
//  }

//  console.log(estaVacio(nadaAqui));

///////////////////////////////////////////////////////////////////////

// Pasar este código a ES6 classes.
// let Fruta = function(nombre, precio) {
//   this.nombre = nombre;
//   this.precio = precio;
// };

// Fruta.prototype.infoPrecio = function() {
//   return `El precio de ${this.nombre} es ${this.precio}€`;
// };

// let manzana = new Fruta("Manzana", 2);
// console.log(manzana.infoPrecio());

// let naranja = new Fruta("Naranja", 3);
// console.log(naranja.infoPrecio());

class Fruta {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  infoPrecio() {
    return "El precio de la " + this.nombre + " es " + this.precio;
  }
}

let manzana = new Fruta("Manazana", 2);
console.log(manzana.infoPrecio());
let pera = new Fruta("Pera", 3);
console.log(pera.infoPrecio());
