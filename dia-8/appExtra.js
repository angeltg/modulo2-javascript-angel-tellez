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

// let backstrin = "";

// function getMoneda() {
//   for (let i = 0; i < change.length; i++) {
//     if (change[i][1] >= moneyback) {
//       // Tengo que seguir aquí
//       backstrin = change[i][0];
//     }
//   }
// }

// function cashRegister(a, b) {
//   // Tengo que ir restando a la devolución hasta que sea 0

//   let moneyback = b - a;
//   do {
//     getMoneda();
//   } while (moneyback > 0);

//   return backstrin;
// }

// let price = +prompt("El producto vale", 0);
// let cash = +prompt("Te doy:", 0);

// console.log(cashRegister(price, cash));
