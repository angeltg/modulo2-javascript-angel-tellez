// // repasar destruccturing
// // map()
// // set()

// // WeakMap; Para que no exitan valores vacíos. Si está vacío lo elimina
// // Garbage Collection // La limpieza se hace cuando el motor puede.
// // Isla flotante
// //Almacenamos información solo mientras el objeto vive. Si muere, que se borre

// // .has() // Si existe la clave devuelve true;
// // .delete() //Si la clave existe devuelve true;
// // .shift() // No se.

// // Filter unique array members

// // function unique(arr) {
// //   let set = new Set(arr);
// //   let arrNoRepeat = [];
// //   set.forEach((value) => {
// //     arrNoRepeat.push(value);
// //   });

// //   return arrNoRepeat;
// // }

// // let values = [
// //   "Hare",
// //   "Krishna",
// //   "Hare",
// //   "Krishna",
// //   "Krishna",
// //   "Krishna",
// //   "Hare",
// //   "Hare",
// //   ":-0"
// // ];

// // console.log(unique(values));

// // Filter anagrams

// // function aclean(arr) {
// //   let arrUpperCase = arr.map(function(item) {
// //     let itemOrder = [];
// //     itemOrder = item.toUpperCase().split("");
// //     itemOrder = itemOrder.sort().join("");

// //     return itemOrder;
// //   });

// //   let arrNoRepeat = [];
// //   let set = new Set(arrUpperCase);
// //   set.forEach(value => {
// //     arrNoRepeat.push(value);
// //   });

// //   return arrNoRepeat;
// // }

// // let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// // console.log(aclean(arr));

// // Iterable keys

// // let map = new Map();

// // map.set("name", "John");

// // let keys = Array.from(map.keys());

// // keys.push("more");

// // console.log(keys);

// // Store "unread" flags

// // let messages = [
// //   { text: "Hello", from: "John" },
// //   { text: "How goes?", from: "John" },
// //   { text: "See you soon", from: "Alice" }
// // ];

// // let messagesRead = new WeakMap();

// // for (let froms of messages.values()) {
// //   messagesRead.add(froms);
// //   //   console.log(froms); // cucumber, tomatoes, onion
// // }

// // console.log(messagesRead);

// // let user = {
// //   name: "John",
// //   age: 30
// // };

// // Object.keys(user);

// // for (const iterator of Object.values(user)) {
// //   console.log(values);
// // }

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };

// function sumSAlaries(params) {
//   let sumSala = 0;
//   for (const value of Object.values(params)) {
//     sumSala = sumSala + value;
//   }
//   return sumSala;
// }

// console.log(sumSAlaries(salaries));

// let user = {
//   name: "John",
//   age: 30
// };
// /*  */
// function count(params) {/*  */
//   return Object.keys(params).length;
// }

// function list(params) {
//   let properties = [];

//   for (const key of Object.keys(params)) {
//     properties.push(key);
//   }
//   return properties;
// }

// console.log(count(user));
// console.log(list(user));

// Array destructuring
// let arr = ["Agel", "Tellez"];
// // Desestructura el array
// let [firstName, surName] = arr;
// // Si no necesitamos algunos elementos del array no les asignamos variables
// let [,,title]=["Pedro","Alonso","García"];

// Combinado con Object.entries(obj);

// let user ={
//   name:"John",
//   age:30
// }

// for (let [key,value] of Object.entries(user)) {
//   console.log(key + value);
// }

// ...rest

// Solo se muestra una vez, el nobre se asigna por defecto
// let [name = prompt("name?"), surname = prompt("surname?")] = ["Julius"];

// let user = {
//   name: "John",
//   years: 30
// };

// let { name, years: age, isAdmin = false } = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };

// function toSalary(salaries) {
//   let mayor = 0;
//   let namemayor = null;
//   for (let [name, salari] of Object.entries(salaries)) {
//     if (salari > mayor) {
//       mayor = salari;
//       namemayor = name;
//     }
//   }
//   return namemayor;
// }

// console.log(toSalary(salaries));

// Con milisegundos

//limestamp cantidad de milisegundos que han pasado desde 1/1/1970
// let now = new Date();
// let datemiliseconds = new Date(30000);
// let date = new Date("2017-12-30");
// console.log(now + " " + datemiliseconds + " " + date);

// getFullYear();
// getMonth(); // sumar 1 ya que empieza en 0
// getDate();
// getHours();
// getDay(); // Domingo 0  y sábado 6

// Date.now(); para tener el día de hoy sin crear el ogjeto

// let date = new Date(2016, 0, 2);

// date.setDate(1);

// console.log(date);

// Date.parse // Parsea una cadena date.

// let date = new Date(2012, 01, 20, 03, 12);

// console.log(date);
// function getWeekDay(date) {
//   switch (date.getDay()) {
//     case 0:
//       return "SU";
//       break;
//     case 1:
//       return "MO";
//       break;
//     case 2:
//       return "TU";
//       break;
//     case 3:
//       return "WE";
//       break;
//     case 4:
//       return "TH";
//       break;
//     case 5:
//       return "FR";
//       break;
//     case 6:
//       return "SA";
//       break;

//     default:
//       break;
//   }
// }

// let date = new Date(2012, 0, 3);
// console.log(getWeekDay(date));

// function getLocalDay(date) {
//   if (date.getDay() == 0) {
//     return 1;
//   }
//   return date.getDay();
// }

// let date = new Date(2012, 0, 1);
// console.log(getLocalDay(date));

// 4  Which day of month was many days ago?
// function getDateAgo(date, days) {
//   let milisegundos = 3600000 * 24 * days;
//   //ahora está en milisegundos tenemos que pasarla a fecha normal
//   milisegundos = date.getTime() - milisegundos;
//   let newdate = new Date(milisegundos);
//   return newdate;
// }

// let date = new Date(2015, 0, 2);
// console.log(date);
// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));

// 5 Last day of month?

// function getLastDayOfMonth(year, month) {
//   let startDate = year + "-" + (month + 1) + "-" + 1;

//   let firstDate = new Date(startDate);
//   let stopDate = year + "-" + (month + 2) + "-" + 1;
//   let theendDate = new Date(stopDate);
//   let miliseconds = theendDate.getTime() - firstDate.getTime();
//   return miliseconds / (3600000 * 24);
// }

// console.log(getLastDayOfMonth(2012, 1)); //29

// 6 How many seconds has passed today?

// function getSecondsToday() {
//   let firstTodayDate = new Date();
//   let nowHoursBySeconds = firstTodayDate.getHours() * 60 * 60;
//   let nowMinutesBySeconds = firstTodayDate.getMinutes() * 60;
//   let nowSeconds = firstTodayDate.getSeconds();
//   let nowMilisecondsBySeconds = firstTodayDate.getMilliseconds() / 1000;

//   return (
//     nowHoursBySeconds +
//     nowMinutesBySeconds +
//     nowSeconds +
//     nowMilisecondsBySeconds
//   );
// }

// console.log(getSecondsToday());

// 7 How many seconds till tomorrow

// function getSecondsToTomorrow() {
//   let today = new Date();
//   let todayHourSeconds = today.getHours() * 60 * 60;
//   let todayMinutesSeconds = today.getMinutes() * 60;
//   let todaySecondsSeconds = today.getSeconds();
//   let todayMilisecondsSeconds = today.getMilliseconds() / 1000;
//   let secondsByDay = 24 * 60 * 60;
//   return (
//     secondsByDay -
//     (todayHourSeconds +
//       todayMinutesSeconds +
//       todaySecondsSeconds +
//       todayMilisecondsSeconds)
//   );
// }

// console.log(getSecondsToTomorrow());

// 8 Format the relative date

function formatDate(date) {
  let now = Date.now();
  let diferents = now - date;

  if (diferents == 1) {
    return "Right now";
  } else {
    if (diferents < 60000) {
      return diferents / 1000 + " sec. ago";
    } else {
      if (diferents < 600000) {
        return diferents / 10000 + " min. ago";
      }
    }
  }

  return (
    "La fecha de ayer " +
    date.getDate() +
    "." +
    (date.getMonth() + 1) +
    "." +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes()
  );
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
