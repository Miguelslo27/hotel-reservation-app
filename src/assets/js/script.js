
// var lista = [1,4,5,10,14,28];

// console.log(lista);

// for (var i = 0; i < lista.length; i++) {
//   console.log(lista[i]);
// }

// for (var i in lista) {
//   console.log(lista[i]);
// }

// for (var v of lista) {
//   console.log(v);
// }

// objeto con propiedades
var persona = {
  edad: 14,
  nombre: 'Juan',
  sexo: 'masculino',
  identificacion: '1234',
};

// console.log(Object.keys(persona)); ['edad', 'nombre']

for (var prop of Object.entries(persona)) {
  // console.log(prop);
  var [key, valor] = prop;
  console.log(valor) // persona['edad']
}
