/**
 * Crear una clase que cree personas.
 * Una persona va estar casada con otra persona.
 *
 * Esa clase tiene que tener funcionalidad para checkear si 2 personas estan
 * casadas aunque hayan mayusculas o minusculas en el nombre de las personas.
 *
 */

class Person {
  constructor(name, apellido, casadocon, direc) {
    this.name = name;
    this.apellido = apellido;
    this.casadocon = casadocon;
    this.direc = direc;
  }
  static marriedWith(person1, person2) {
    return person1.casadocon.toUpperCase() == person2.name.toUpperCase();
  }
}

let direccion = {
  calle: "Nicaragua",
  coord: {
    lat: 4243,
    long: 43534
  },
  cp: 15000,
  municipio: "A coruña"
};

let person1 = new Person("Pepe", "López", "JUana", direccion);
// let person2 = new Person("Juana", "Rodriguez", "Pepe");

// console.log(Person.marriedWith(person1, person2));

/**
 * Crear una funcion que al pasarle un objeto te de toda la informacion sobre el.
 *
 * Cuantas propiedades tiene, que valen sus propiedades, si el valor de una propiedad es un
 * string que me diga la longitud del string, si tiene un objeto dentro que entre dentro de el objeto
 * y lo analice tambien y asi sucesivamente. (Pista: RECURSIVIDAD)
 */

function totalinfo(obj) {
  let i = 0;
  // muestra todas el número de propiedades, functions y herencias
  // console.log(Object.getPrototypeOf(obj));
  // muetra las propiedades y el número
  // console.log(Object.getOwnPropertyNames(obj));

  //mostramos el valor de cada propiedad

  for (const key in obj) {
    i++;
    console.log(i);
    // si es string mostramos su longitud
    console.log(typeof obj[key]);
    if (typeof obj[key] != "object") {
      console.log(
        key + " = " + obj[key] + " y su longitud es " + obj[key].length
      );
    } else {
      totalinfo(key);
    }
    console.log("Número de propiedades:" + i);
  }
}

totalinfo(person1);
