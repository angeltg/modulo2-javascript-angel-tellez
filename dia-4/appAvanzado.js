// // Hacer la conversión de un numero entero en un numero romano.
// let parar = false;

// let arraydigitos = [
//   ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
//   ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
//   ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
// ];

// function showCancel(parametro) {
//   return parametro == "" || parametro == null;
// }
// function getRomanNumber(numero) {
//   let cadenaromana = "";
//   let numeroseparado;
//   let posicion;
//   numeroseparado = numero.split("");
//   for (let i = 0; i < numeroseparado.length; i++) {
//     posicion = i + 1;
//     cadenaromana +=
//       arraydigitos[numeroseparado.length - posicion][numeroseparado[i]];
//   }
//   return cadenaromana;
// }

// do {
//   let numero = prompt("introduzca un número", "");
//   if (showCancel(numero)) {
//     alert("Has cancelado el proceso");
//     parar = true;
//   } else if (+numero < 1000 && +numero > 0)
//     alert("El número " + numero + " en romano es: " + getRomanNumber(numero));
//   else
//     alert(
//       "El número de ser menor de 1.000 y mayor de 0. Sólo llevo 4 días con javascript..."
//     );
// } while (!parar);

// console.log

// SCript para saber la letra del DNI

let dni = 32818535;

let resto = dni % 23;

function getletter(resto) {
  let arrayLetters = [
    "t",
    "r",
    "w",
    "a",
    "g",
    "m",
    "y",
    "f",
    "p",
    "d",
    "x",
    "b",
    "n",
    "j",
    "z",
    "s",
    "q",
    "v",
    "h",
    "l",
    "c",
    "k",
    "e"
  ];
  return arrayLetters[resto];
}

console.log("Valor " + getletter(resto));

// cintonic
