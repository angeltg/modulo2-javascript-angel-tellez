// // Los objetos de Bola deben aceptar un argumento para el tipo de bola cuando se instancian.

// // Si no se dan argumentos, los objetos de bola deben instanciarse con un tipo de bola, por ejemplo,  "regular".
// class Bola {
//   constructor(tipoBola = "regular") {
//     let tipoBola = type;
//   }
// }

// bola1 = new Bola();
// bola2 = new Bola("super");

// console.log("El tipo de la bola 1: " + bola1.tipoBola);
// console.log(`La bola2 ${bola2.tipoBola}`);

//////////////////////////////////////////

// Given the string values A and B being:
//   A: The price of an item.
//   B: The money paid for the item.
// You will need to create a function 'cashRegister' to calculate the change to give back after the purchase.
// The change will need to be in the format of an array with the correct string values inside, this values can be:
// HOUNDRED = 100
// FIFTY = 50
// TWENTY = 20
// TEN = 10
// FIVE = 5
// TWO = 2
// ONE = 1
// HALFDOLLAR = 0.5
// QUARTER = 0.25
// DIME = 0.1
// NICKLE = 0.05
// PENNY = 0.01
// so for example if the give values are:
//   A: 23.2
//   B: 25.88
//   The change would be 2.68 so the output should be:
//   [ 'TWO', 'HALFDOLLAR', 'DIME', 'NICKLE', 'PENNY', 'PENNY', 'PENNY' ]
//   ***IF YOU FINISH TRY TO MAKE IT WORK IF THE NUMBERS ARE***
//   A: $_sdfvdsf,23.2fsdcds
//   B: fvfdv-vs,25.88fdsdf

// let change = [
//   ["HOUNDRED", 100],
//   ["FIFTY", 50],
//   ["TWENTY", 20],
//   ["TEN", 10],
//   ["FIVE", 5],
//   ["TWO", 2],
//   ["ONE", 1],
//   ["HALFDOLLAR", 0.5],
//   ["QUARTER", 0.25],
//   ["DIME", 0.1],
//   ["NICKLE", 0.05],
//   ["PENNY", 0.01]
// ];

// let arrchange = [];
// let division = 0;
// function getMoneda(moneyback) {
//   let rounded = 0;
//   for (let i = 0; i < change.length; i++) {
//     division = moneyback / change[i][1];
//     rounded = Math.floor(division);
//     if (rounded > 0) {
//       arrchange.push(rounded + " " + change[i][0]);
//       moneyback = moneyback - rounded * change[i][1];
//     }
//   }

//   return arrchange;
// }

// function cashRegister(a, b) {
//   // Tengo que ir restando a la devolución hasta que sea 0

//   // diviendo entre las monedas. 45.23 80.15

//   let moneyback = (b - a).toFixed(2);

//   arrchange = getMoneda(moneyback);

//   return arrchange;
// }

// let price = +prompt("El producto vale", 0);
// let cash = +prompt("Te doy:", 0);

// console.log(
//   "Cuesta " +
//     price +
//     " me diste " +
//     cash +
//     " te doy " +
//     (cash - price).toFixed(2) +
//     " en monedas " +
//     cashRegister(price, cash)
// );

// Detectar si la frase el palíndromo
// "No subas, abusón"
let str;

function deletesign(letter) {
  switch (letter) {
    case "Á":
      return "A";
      break;
    case "É":
      return "E";
      break;
    case "Í":
      return "I";
      break;
    case "Ó":
      return "O";
      break;
    case "Ú":
      return "U";
      break;
    case " ":
    case ",":
    case ".":
    case ":":
    case ";":
    case "...":
      return "";
      break;

    default:
      return letter;
      break;
  }
}
function cleancaracter(text1) {
  let arr1 = text1.split("");
  let stri1 = "";
  for (const key in arr1) {
    stri1 += deletesign(arr1[key].toUpperCase());
  }

  return stri1;
}

function palindromo(str) {
  let arr1 = str.split("");
  let arr2 = [];
  let str2 = "";
  let str1 = "";
  for (const key in arr1) {
    arr2.unshift(arr1[key]);
    str1 += arr1[key];
  }
  for (const key in arr2) {
    str2 += arr2[key];
  }
  if (str2 == str1) {
    return true;
  }
  return false;
}

str = cleancaracter("Oí lo de mamá: me dolió");

console.log(palindromo(str));
