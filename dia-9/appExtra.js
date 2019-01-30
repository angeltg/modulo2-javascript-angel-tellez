/**
 * Crear una clase que cree personas.
 * Una persona va estar casada con otra persona.
 *
 * Esa clase tiene que tener funcionalidad para checkear si 2 personas estan
 * casadas aunque hayan mayusculas o minusculas en el nombre de las personas.
 *
 */

/**
 * Crear una funcion que al pasarle un objeto te de toda la informacion sobre el.
 *
 * Cuantas propiedades tiene, que valen sus propiedades, si el valor de una propiedad es un
 * string que me diga la longitud del string, si tiene un objeto dentro que entre dentro de el objeto
 * y lo analice tambien y asi sucesivamente. (Pista: RECURSIVIDAD)
 */

class Person {
  constructor(name, apellido, casadocon) {
    this.name = name;
    this.apellido = apellido;
    this.casadocon = casadocon;
  }
  static marriedWith(person1, person2) {
    return person1.casadocon.toUpperCase() == person2.name.toUpperCase();
  }
  totalinfo() {
    let i = 0;
    // muestra todas el número de propiedades, functions y herencias
    console.log(Object.getPrototypeOf(this));
    // muetra las propiedades y el número
    console.log(Object.getOwnPropertyNames(this));

    //mostramos el valor de cada propiedad
    for (const key in this) {
      i++;
      console.log(key + " = " + this[key]);
      if (typeof this[key] == "string") {
        console.log("Longitud del string " + this[key].length);
      }
    }
    // console.log("Número de propiedades:" + i);
  }
}

let person1 = new Person("Pepe", "López", "JUana");
let person2 = new Person("Juana", "Rodriguez", "Pepe");

console.log(Person.marriedWith(person1, person2));
person1.totalinfo();
