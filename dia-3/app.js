/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */
// console.log("Probando, probando, 1, 2, 3!");

// let i = 1;
// while(i) alert(i);
// let i;
// do {
//   alert(i);
//   ++i;
// } while (i < 3);

// for (let i = 0; i < 3; i++) {
//   alert(i);

// }

// break rompe el bucle
// continue para el bucle y empieza en la siguiente interacción.

// Estas dos no funcionan con los operadores ternarios

// etiqueta : for (){
//         for (){
//             break etiqueta
//         }

// }

// Se usa con etiqueta para romper el bucle. Para bucles anidados

// let i = 3;

// while (i) {
//   alert(i--);
// }

// let i = 0;
// while (++i < 5) {
//   alert(i);
// }

// let ii = 0;
// while (ii++ < 5) alert(ii);

// for (let i = 0; i < 5; i++) alert(i); // 0.1.2.3.4

// for (let ii = 0; ii > 5; ++ii) alert(ii); //0.1.2.3.4

// Muestra los pares
// for (let x = 2; x <= 10; x++) {
//   if (x % 2 == 0) {
//     alert(x);
//   }
// }

// for (let i = 0; i < 3; i++) alert(`munber ${i}!`);

// let x = 0;
// while (x < 3) {
//   alert(`munber ${x}!`);
//   x++;
// }

// let valores = 0;
// while (valores < 100) {
//   valores = prompt("escribe un número mayor que 100", 0);

//   valores = Number(valores);
//   //   alert(typeof valores);

//   if (valores > 100) {
//     alert("genial");
//     break;
//   } else {
//     alert("Tiene que ser mayor que 100");
//     valores = 0;
//   }
// }

// let valores = 100;

// for (x = 0; x < valores; x++) {
//   for (y = 1; y <= x; y++) {
//     let resto = x % y;
//     // alert("Resto " + resto + " X " + x + " y " + y);
//     if (resto == 0 && x != y && y != 1) {
//       console.log("No es primo " + x + " Su resto: " + resto);
//       break;
//     } else {
//       // console.log("Resto " + resto + " X " + x + " y " + y);
//       if (resto == 0 && x == y) console.log("Primo " + x);
//     }
//   }
// }

// switch (a) {
//   case 3:
//     alert("3");
//     break;
//   case 4:
// }
// let browser = "Netscape";
// if (browser == "Edge") {
//   alert("You ve got the edge!");
// } else {
//   if (
//     browser == "Chrome" ||
//     browser == "Firefox" ||
//     browser == "Safari" ||
//     browser == "Opera"
//   ) {
//     alert("Okay we suppport these browsers");
//   } else {
//     alert("We hope that this page looks ok!");
//   }
// }

// let a = +prompt("a?", "");

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2, 3");
//     break;
//   default:
//     alert("Ninguno de los anteriores");
//     break;
// }

// Las dos funciones hacen lo mismo. Al tener un return sale de la funcion y si no sale es que es menor de edad

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you? 1");
//   }
// }

// function checkAge2(age) {
//   if (age > 18) {
//     return true;
//   }
//   return confirm("Did parents allow you? 2");
// }

// checkAge(34);
// checkAge2(10);

// function checkAge(age) {
//   return age > 18
//     ? true
//     : confirm("Do you have your parents permission to access this page?");
// }

// checkAge(17);

// function checkAge2(age) {
//   return (
//     age > 18 ||
//     confirm("Do you have your parents permission to access this page?")
//   );
// }

// checkAge2(15);

// function min(a, b) {
//   if (a > b) {
//     return b;
//   } else return a;
// }

// alert(min(-2, -3));

function pow(a, b) {
  let resultado = a;
  let x = 1;
  do {
    resultado = resultado * a;
    ++x;
  } while (x < b);
  return resultado;
}

function esentero(a) {
  return a % 1 == 0 ? true : false;
}
let a, b;
do {
  a = prompt("Introduce el primer dígito entero mayoer de 1", 0);
  b = prompt("Introduce el segundo dígito entero mayor de 1", 0);

  if (esentero(a) && esentero(b) && a > 1 && b > 1) alert(pow(a, b));
} while (!esentero(a) || !esentero(b) || a < 1 || b < 1);
