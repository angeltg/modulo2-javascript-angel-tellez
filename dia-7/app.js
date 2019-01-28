// // // Muestra los errores.

// // try {
// //     //scoup todo lo que va entre corchetes.
// // } catch (error) {
// //     alert (error.name);
// //     alert(error.messaje);
// //     alert(error.stack);
// // }

// // Json es para intercambiar información de una manera organizada.

// // let json = '{"name:"John", "aga":30}';
// // Para usarlo let user = JSON.parse(json);

// // let error = new Error(messaje);
// // let error = new TypeError (messaje);

// // Hacer que se cree un error para que salte el catch;
// // throw new SyntaxError ("Incomplete data:no name");

// // try {

// // } catch (error) {

// // } finally {
// //     // esto se lanza simpre, haya error o no.
// // }

// // Math.floor
// // Math.ceil
// // Math.round = toFixed (2) Redondea al decimal mas cercano. Y toFixed nos devuelve los decimales que le indicamos. Devuelve un string.
// // parseFloat devuelve un número dentro de una cadena con decimales hasta que encuentre un caracter que no es un número.
// // parseInt duveleve un número entero dentro de una cadena hasta que encuentra algo que no es un número.

// // Sum numbers from the visitor
// let stop = false;

// do {
//   let numero = +prompt("Primer número para sumar");
//   let numero2 = +prompt("Segundo número para sumar");

//   if (numero == "" || numero2 == "" || numero == null || numero2 == null) {
//     console.log("Ha salido del programa");
//     stop = true;
//   } else {
//     if (!isNaN(numero) && !isNaN(numero2)) {
//       console.log(
//         "La suma de " + numero + " + " + numero2 + " = " + (numero + numero2)
//       );
//     } else {
//       console.log("Debe introducir 2 números");
//     }
//   }
// } while (!stop);

// console.log(Math.round((6.35).toFixed(1)));
