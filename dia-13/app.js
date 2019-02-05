// // JSON.stringify(obj); Convierte el obj en un json
// // El obj puede ser un string, un número, un boobleam.

// // Symbol es única. Este se omite, el undefined también y las funciones también.

// // No se pueden pasar referencias circulares a un objeto JSON.
// // Para filtra esto se usa otro parámetro el "replacer".

// // JSON.stringify(meetup, ['title','perticipants']);

// // JSON.stringify (meetup, function replacer(key,value){
// //     console.log('${key}: ${value}');
// //     return key== "occupiedBy" ? undefined :value;
// // })

// // spacer es para formatear el JSON

// // parse Construye un obj desde JSON
// // reviuver
// // schedule = JSON.parse(schedule, function(key, value) {
// //     if (key == 'date') return new Date(value);
// //     return value;
// //   });

// // Ejercicio uno

// // let user = {
// //   name: "John Smith",
// //   age: 35
// // };

// // let send = JSON.stringify(user);
// // console.log(JSON.stringify(user));

// // let back = JSON.parse(send);

// // console.log(back);

// // Ejercicio dis

// // let room = {
// //   number: 23
// // };

// // let meetup = {
// //   title: "Conference",
// //   occupiedBy: [{ name: "John" }, { name: "Alice" }],
// //   place: room
// // };

// // room.occupiedBy = meetup;
// // meetup.self = meetup;
// // // console.log(JSON.stringify(meetup));
// // console.log(
// //   JSON.stringify(meetup, function replacer(key, value) {
// //     //  return typeof value;
// //     // return  key;
// //     console.log(`
// //     CLave y valor son
// //     ${key.length}
// //     ${value}
// //     `);

// //     if (value == meetup && key != "") {
// //       // if (key == "occupiedBy") {
// //       return undefined;
// //     }
// //     console.log("object");
// //     return value;
// //   })
// // );

// // Asincronía

// // function loadScript(src, callback) {
// //   let script = document.createElement("script");
// //   script.src = src;
// //   script.onload = () => callback(script);
// //   script.onerror = () => callback(new Error("No se ha cargado"));
// //   document.head.append(script);
// // }

// // loadScript(
// //   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js",
// //   script => {
// //     // alert(`Cool, the ${script.src} is loaded`);
// //     console.log(_.clamp(-10, -5, -5)); // function declared in the loaded script
// //   }
// // );

// // resolve es que llegan los datos
// // reject es que no llegan los datos. Da un error. El proceso no se completa

// // let promise = new Promise(function(resolve, reject) {
// //   //   resolve("done");

// //   reject(new Error("…")); // se ignoran
// //   setTimeout(() => resolve("…")); // se ignoran
// // });
// // console.log(promise);

// // // .then / .catch

// // promise.then(function(result) {
// //   result => console.log(result);
// //   error => console.log(error);
// //   //   console.log(error);
// // });
// // promise.then(null,result); // esta no se sa
// // console.log( promise.catch()); // para los errores

// // const executo<r = resolve => resolve("done!");
// // const promise = new Promise(executor);

// // promise.then(alert); // this alert shows last (*)

// // alert("code finished");

// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error("Script load error: " + src));

//     document.head.append(script);
//   });
// }

// let promise = loadScript(
//   "https://cdnjs.cloudfladsre.com/ajax/libs/lodash.js/3.2.0/lodash.js"
// );

// // promise.then(
// //   script => alert(`${script.src} is loaded!`)
// //   //   error => alert(`Error: ${error.message}`)
// // );

// promise.catch(error => alert(`Error: ${error.message}`));

// promise.then(script => alert("One more handler to do something else!"));
