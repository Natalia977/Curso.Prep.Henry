// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  // Se puede aplicar el siguiente metodo: Object.entries(obj)
  //var arrayClaveValor = Object.entries(objeto);// este metodo convierte un objeto en un array de arrays
  //return arrayClaveValor;

  var arrayNuevo = [];
   for( var propiedad in objeto){
     arrayNuevo.push([propiedad, objeto[propiedad]]); // asigno la clave y el valor
   }

   return arrayNuevo;
 
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};
  for( var i = 0; i<string.length; i++){
    if ( obj[string[i]]){
      obj[string[i]] += 1;

    } else {
      obj[string[i]] = 1;
    }
  }
  return obj;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var nuevaCadena = '';
  var min = '';
  var mayus = '';
  for( var i = 0; i<s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      mayus = mayus + s[i];
    } else {
      min = min + s[i];
    }
  }
  nuevaCadena = mayus + min;

  return nuevaCadena;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aqui
   
  var nuevaStr = '';
  for(var i = str.length - 1; i >= 0; i--){
      nuevaStr = nuevaStr + str[i];//obtengo toda la cadena invertida en c/u de sus caracteres
  }
  
  var arrayInvertido = nuevaStr.split(' ');// convierte una cadena en un array de cadenas

  return arrayInvertido.reverse().join(' ');// reverse invierte el orden de los elementos del array y join los une con espacios de por medio

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  var cadena = numero.toString();
  var nuevaCadena = '';
  for (var i = cadena.length - 1; i >= 0; i--){
    nuevaCadena = nuevaCadena + cadena.charAt(i);

  }
  if (cadena === nuevaCadena){
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  var arrayAbc = ['a', 'b', 'c']; // array de comparacion
  var nuevaCadena = '';
  for ( var i = 0; i<cadena.length; i++){
    if (!arrayAbc.includes(cadena[i])){//si no incluye a,b,c, concatena el caracter actual
      nuevaCadena = nuevaCadena + cadena[i];
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for( var i = 0; i< arr.length; i++){//recorro el array
    var aux = arr[i]; //alojo el valor del elemento cadena actual
    var j = i - 1; //para recorrer la cadena
    while ( j>= 0 && aux.length < arr[j].length){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = aux;
  }
  return arr;
  
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  //[1,2,3,4,5]      [1,2,5]
  var arreglo3 = [];
  var arrVacio = [];

  for(var i = 0; i< arreglo1.length; i++){
    for( var j = 0; j< arreglo2.length; j++){
      if( arreglo1[i] === arreglo2[j]){
        arreglo3.push(arreglo1[i]);// 1 2

      }
    }
  }
  if (arreglo3 === arrVacio){
    return arrVacio;
  }else {
    return arreglo3;
  }

  

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

