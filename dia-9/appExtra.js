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
    for (const key in this) {
      console.log(key + " = " + this[key]);
      if (typeof this[key] == "string") {
        console.log(this[key].length);
      }
    }
  }
}

let person1 = new Person("Pepe", "López", "JUana");
let person2 = new Person("Juana", "Rodriguez", "Pepe");

console.log(Person.marriedWith(person1, person2));
person1.totalinfo();
