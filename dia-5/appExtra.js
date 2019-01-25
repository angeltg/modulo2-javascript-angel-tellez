// Obj con name de segundo parámetro

// function que ponga la primera letra de la propiedas en mayus que tengan más de 3 letras.

let user = {};

user.id = 0;
user.name = "Pepe";
user.calle = "Nicaragua";
user.pais = "España";

let changeFirstLetter = obj => {
  // function changeFirstLetter(obj) {

  let letra;
  for (let key in obj) {
    if (key.length > 3) {
      letra = key.charAt(0).toUpperCase();
      key = key.replace(key.charAt(0), letra);

      console.log(key);
    }
  }
};

let listObj = obj => {
  for (let key in obj) {
    console.log(key);
  }
};
listObj(user);
console.log(
  "Cambiamos los nombres de los parámetros que tengan más de 3 letras"
);
changeFirstLetter(user);
