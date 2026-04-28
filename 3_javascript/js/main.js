/*===========================
    Arrays y Objetos en JS
=============================

En JavaScript, los arrays y objetos son estructuras de datos fnudamentales.
    - Los arrays se utilizan para almacenar una lista ordenada de elementos
    - Los objetos son ideales para almacenar datos con propiedades clave-valor


///////////////
// Comparacion

Uso principal:
    - Array: Lista ordenada de elementos
    - Objeto: Coleccion de pares clave-valor

Acceso a datos:
    - Array: Por indice         ->  array[0]
    - Objeto: 
        Notacion de punto       -> objeto.propiedad
        Notacion de corchete    -> objeto["propiedad"]

Metodos:
    - Array: push(), pop(), map(), forEach()
    - Objeto: Metodos personalizados y funciones

Iteracion:
    - Array: forEach, map, bucles, etc
    - Objeto: for...in, Object.keys(), Object.values()


=====================
    Arrays en JS
=====================

Un array es una lista ORDENADA de elementos, donde cada uno tiene una posicion o indice.

Los arrays en JavaScript son muy flexibles: pueden contener cualquier tipo de dato (y los elementos no tienen que ser del mismo tipo)
    - numeros
    - strings
    - booleanos
    - otros arrays
    - objetos
    - funciones
    - etc
*/

let colores = ["rojo", "azul", "verde", "amarillo"];

// Los elementos en un array tienen indices que comienzan en 0
console.log(colores[1]); // azul
console.log(colores[3]); // amarillo


/*===================
    Objetos en JS
=====================

Un objeto en JavaScript es una coleccion de pares clave-valor.
Las claves son strings que identifican a cada valor, lo cual nos permite un acceso rapido y estructurado a los datos.

Los objetos son utiles cuando queremos representar una entidad con multiples propiedades

Accedemos a las propiedades de un objeto
    - Notacion de punto
    - Notacion de corches
*/

// Creacion literal de objeto
let persona = {
    nombre: "Estefano",
    edad: 25,
    ciudad: "Lanus"
};


// Notacion de punto
console.log(persona.nombre);

// Notacion de corchetes
console.log(persona["ciudad"]);

// Los objetos tambien pueden tener metodos, que son funciones almacenadas en una propiedad
let gato = {
    nombre: "Merlin",
    maullar: function(){ 
        console.log("Miau!");
    }
}

gato.maullar();


// Agregar una propiedad
persona.pais = "Argentina";
console.log(persona);


// Eliminar una propiedad
delete persona.edad;
console.log(persona);



/*=============================
    Metodos de strings en JS
===============================

Los strings en JavaScript son tipos de datos primitivos, PERO JavaScript los "envuelve" o trata como si fueran objetos -> Object Wrappers o envolvedores de objetos

JavaScript, al tratarlos como objetos, les proporciona metodos. A esto nos referimos con los object wrappers */


// 1. length: Devuelve la longitud del string
console.log("Hola".length); // 4


// 2. charAt(index): Devuelve el caracter en la posicion especificada
console.log("Hola".charAt(1)); // o


// 3. concat(string1, string2): Concatena strings
console.log("Hola".concat(" ", "mundo!")); // Hola mundo!


// 4. includes(substring): Devuelve true si el substring esta en el string
console.log("JavaScript".includes("Script")); // true -> es case sensitive


// 5. startsWith(substring): Comprueba si el string COMIENZA con el substring


// 6. endsWith(substring): Comprueba si el string TERMINA con el substring


// 7. indexOf(substring): Devuelve el indice de la PRIMERA aparicion del substring
console.log("banana".indexOf("a")); // 1


// 8. lastIndexOf(substring): Devuelve el indice de la ULTIMA aparicion del substring
console.log("banana".lastIndexOf("a")); // 5


// 9. replace(searchValue, newValue): Reemplaza una parte del string
console.log("Hola mundo".replace("mundo", "Div 334!")); // Hola Div 334!


// 10. replaceAll(searchValue, newValue): Reemplaza TODAS las apariciones del string
console.log("1,2,3".replaceAll(",", ";")); // 1;2;3


// 11. toLowerCase(): Convierte a minusculas
console.log("JAVASCRIPT".toLowerCase()); // javascript


// 12. toUpperCase(): Convierte a mayusculas
console.log("hola".toUpperCase()); // HOLA


// 13. trim(): Elimina espacios en blanco al inicio y al final
console.log("     hola  ".trim()); // hola


// 14. trimStart(): Elimina espacios al inicio


// 15. trimEnd(): Elimina espacios al final


// 16. slice(start, end): Extrae parte del string
console.log("JavaScript".slice(0, 4)); // Java (el caracter 4 no se incluye)
console.log("JavaScript".slice(-2)); // pt


// 17. substring(start, end): Similar a slice, pero NO acepta negativos
console.log("JavaScript".substring(4, 10)); // Script


// 18. split(separator): Divide el string en un array
console.log("rojo,verde,azul".split(",")); // ["rojo","verde","azul"]


// 19. repeat(count): Repite el string
console.log("ji".repeat(3));


// 20. match(regex): Devuelve coincidencias con una expresion regular (REGEX o Regular Expression)
console.log("abc123".match(/\d+/)); // ["123"]


// console.log("Hola"); // 







/*
console.log("Hola"); // 
console.log("Hola"); // 


console.log("Hola"); // console.log("Hola"); // 
console.log("Hola"); // 
console.log("Hola"); // 
*/