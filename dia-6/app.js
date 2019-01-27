// let user = {
//   name: "Pepe",
//   age: 30,
//   sayHi() {
//     alert(this.name);
//   }
// };

// let admin = { mane: "Antonio" };

// let sayHi2 = () => alert(this.name);

// admin.sayHi2();

// El método bind es para poder pasarle el this a la clase. Si se declara la función con una arrow function no el bind se hace automático.

// let user = {
//   name: "John",
//   go: function() {
//     alert(this.name);
//   }
// };

// user.go();

// let obj, method;

// ogj ={
//     go :function (){alert(this)}
// };

// ogj.go(); /*Llama al método.*/

// (method = obj.go()); /* Se pierde el this. Asigna un método no el objeto */
// (obj.go || obj.stop());  /* Al primero le faltan los parentesis y el segundo llama a un método que no existe */

// Esta funcion crea un objeto
// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     }
//   };
// }
// let user = makeUser();

// alert(user.ref().name);

// let calculator = {
//   read() {
//     this.valor1 = +prompt("El primer valor:", 0);
//     this.valor2 = +prompt("El segundo valor:", 0);
//   },
//   sum() {
//     console.log(
//       "La suma de " +a: "holaAngel"};
//         this.valor1 +
//         "+" +
//         this.valor2 +
//         " = " +
//         (this.valor1 + this.valor2)
//     );
//   },
//   mul() {
//     console.log(
//       "La multiplicación de " +
//         this.valor1 +
//         "*" +
//         this.valor2 +
//         " = " +
//         this.valor1 * this.valor2
//     );
//   }
// };

// console.log(calculator);
// calculator.read();
// console.log(calculator);
// calculator.sum();
// calculator.mul();

// Create new Accumulador

// function Accumulator(startingValue) {
//   (this.startingValue = startingValue),
//     (this.read = function() {
//       this.startingValue += +prompt("Valor a aumentar: ", 0);
//     });
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.startingValue);

// Hay que retornar el ogj para poder encadenar los métodos
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() {
//     alert(this.step);
//     return this;
//   }
// };

// ladder
//   .up()
//   .up()
//   .showStep();

//   funciton de saludar y un parametro a quien quieres saludor.

// Para poder saludar el nombre tiene que tener una p.

// function User(nameUser, funcion) {
//   (this.name = nameUser), (this.sayHi = funcion);
// }

// let user = new User("Pepe", function(nombre) {
//   return "Hola, soy " + nombre;
// });
// // console.log(user);
// // user.sayHi();

// if (user.name.indexOf("p") >= 0) {
//   console.log(user.sayHi(user.name));
// } else {
//   console.log("Tu nombre no tiene a, por eso no saludas");
// }

// function Clock({ template }) {
//   this._template = template;
// }

// Clock.prototype._render = function() {
//   let date = new Date();

//   let hours = date.getHours();
//   if (hours < 10) hours = "0" + hours;

//   let mins = date.getMinutes();
//   if (mins < 10) mins = "0" + mins;

//   let secs = date.getSeconds();
//   if (secs < 10) secs = "0" + secs;

//   let output = this._template
//     .replace("h", hours)
//     .replace("m", mins)
//     .replace("s", secs);

//   console.log(output);
// };

// Clock.prototype.stop = function() {
//   clearInterval(this._timer);
// };

// Clock.prototype.start = function() {
//   this._render();
//   this._timer = setInterval(() => this._render(), 1000);
// };

// class ClockClass {
//   constructor({ template }) {
//     this._template = template;
//   }

//   _render() {
//     let date = new Date();
//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;
//     // console.log(typeof this._template);

//     let output = this._template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }
//   stop() {
//     clearInterval(this._timer);
//   }
//   start(precision) {
//     this._render();
//     this._timer = setInterval(() => this._render(), precision);
//   }
// }

// class ColckClassExtend extends ClockClass {
//   constructor(obj) {
//     super(obj);
//     this.precision = obj.precision;
//   }
//   start() {
//     super._render();
//     this._timer = setInterval(() => this._render(), this.precision);
//   }
// }

// let lowResolutionClock = new ColckClassExtend({
//   template: "h:m:s",
//   precision: 5000
// });
// lowResolutionClock.start();
