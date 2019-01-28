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

// class Fruta {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }
//   infoPrecio() {
//     return "El precio de la " + this.nombre + " es " + this.precio;
//   }
// }

// let manzana = new Fruta("Manazana", 2);
// console.log(manzana.infoPrecio());
// let pera = new Fruta("Pera", 3);
// console.log(pera.infoPrecio());

/////////////////////////////////////////////////////////

// Crear una clase llamada Person que acepte un monbre y una edad

// La clase Persona deberá tener un método que devuelva un string con "nombre, tiene edad años". Por ejemplo "Pepe tiene 25 años".

// Otro método que sume 1 a la edad de la persona.

// Para cargar los datos de la clase pedimos por prompt nombres y edades hasta que pulse esc o lo llene vacío.
// Mostramos resultado por la consola.
// Para sumar 1 año a una persona pedimos por prompt que nos diga un monbre
// Si ese nombre existe le decimos la edad que tiene y preguntamos si quiere sumarle un año. Si quiere se lo sumamos y si no le preguntamos por otro nombre.

let numPersons = 0;
let personVar;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get_message() {
    return this.name + " tiene " + this.age + " años ";
  }
  set_anho() {
    this.age++;
  }
  findPerson(operator) {
    if (this.name == operator) {
      return this;
    }
    return false;
  }
  static set_Person(personName, personAge) {
    return new Person(personName, personAge);
  }
}

function createPerson(indentificator) {
  personVar = "person" + indentificator;
  let personName;
  let personAge;
  personName = prompt("Introduzca el nombre de la persona");
  personAge = prompt("Introduzca la edad de la persona");

  if (personName != "" && personAge > 0) {
    // eval(personVar + " = Person.set_Person(personName, personAge)");
    eval(personVar + " = new Person (personName,personAge)");
    return true;
  } else {
    return false;
  }
}
let cargarDatos = true;
for (let i = 0; cargarDatos; i++) {
  cargarDatos = createPerson(i);
  if (cargarDatos) {
    console.log(eval(personVar).name + " " + eval(personVar).age);
    numPersons++;
  }
}

let operator;
let correctparameter = false;

function searchPerson(operador) {
  for (let i = 0; i <= numPersons; i++) {
    let personVar = "person" + i;
    let obj = eval(personVar).findPerson(operador);
    if (obj) return obj;
  }
  return false;
}

if (numPersons > 0) {
  do {
    operator = prompt(
      "Introduzca el nombre de la persona de la que quiere saber su edad"
    );

    if (operator) {
      let searchPersonAge = searchPerson(operator);
      if (searchPersonAge) {
        console.log(
          "La edad de " + operator + " es de " + searchPersonAge.age + " años"
        );
        if (confirm("¿Desea añadirle un año a " + operator + "?")) {
          searchPersonAge.set_anho();
          console.log(
            "Ahora " + operator + " tiene " + searchPersonAge.age + " años"
          );
        }
      } else {
        console.log("No existe ninguna persona con ese nombre.");
      }
    } else {
      console.log("Has salido del programa.");
      correctparameter = true;
    }
  } while (!correctparameter);
}
