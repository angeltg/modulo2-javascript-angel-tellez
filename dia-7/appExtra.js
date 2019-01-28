// // Write a JavaScript program to list the properties of a JavaScript object.

// class student {
//   constructor(name, secondname, age) {
//     this.name = name;
//     this.secondname = secondname;
//     this.age = age;
//   }
//   listProperties() {
//     console.log("Las propiedades son: ");

//     for (let key in this) {
//       console.log(key);
//     }
//   }
// }

// let student1 = new student("Pepe", "Rodriguez", 25);
// student1.listProperties();

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

class Student {
  constructor(name, sclass, rollno) {
    this.name = name;
    this.sclass = sclass;
    this.rollno = rollno;
  }
  listProperties() {
    for (const key in this) {
      console.log(key + " " + this[key]);
    }
  }
}

let student1 = new Student("Lourdes", "3A", "Buen estudiante");
student1.listProperties();

console.log("Añadimos una propiedad con bark");
Student.bark = "secondname";
student1.secondname = "Rodriguez";
student1.listProperties();
console.log("Borramos una propiedad de la clase con delete");
let deleteproperty = "rollno";
delete Student.rollno;
student1.listProperties();
