// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //charAt(0).toUpperCase(), devuelve el primer caracter en mayuscula
  //.slice(1), devuelve el residuo de la cadena a partir del segundo caracter.
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);//concateno el 1er caracter en mayuscula con el resto de la cadena

  
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb(); 
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  const suma = numeros.reduce(function(acumulador, elemento){ //acumulador, es el valor inicial y el total del acumulador 
    return acumulador + elemento;                            // elemento, es el valor del elemento actual del ARRAY
  });
  return cb(suma);


}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(array) {// function(array), es el valor del elemento actual

    return cb(array);//callback 

  } )

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray = array.map(function(elemento){
    return cb(elemento);

  })
  
  return nuevoArray;
  
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = [];
  
  for (var i = 0; i < array.length; i++){
    if (array[i][0] === 'a'){
      nuevoArray.push(array[i]);
    }
  }

  return nuevoArray;
  
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
