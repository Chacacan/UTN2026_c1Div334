/*=========================================
    Callbacks en JavaScript
===========================================

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan despues de que ocurra algun evento o se complete alguna operacion*/

// Callbacks 1
function saludar(nombre, callback) {
    console.log(`Hola ${nombre}`);
    // Puedo hacer otras operaciones
    callback(); // Se ejecuta el callback
}

function despedirse() {
    console.log("Nos vemos!");
}

saludar("Juan", despedirse);
// Hola Juan
// Nos vemos!

// Callbacks 2, ejemplo con setTimeout: el primer parametro es una funcion, el segundo parametro es un Number
setTimeout(() => console.log("Esto se ejecuta despues de 1 segundo"), 1000);


/*===================================
    Caracteristicas principales
=====================================

1. Funciones de Primera Clase

En JavaScript, las funciones son tratadas como "ciudadanos de primer clase" (first class citizens), lo que significa que pueden:

    - Asignadas a variables
    - Pasadas como argumentos
    - Retornadas desde otras funciones
*/

// Asignar funcion a variable
const miCallback = function() {
    console.log("Callback ejecutado");
}

// Pasar como argumento
function ejecutarCallback(callback) {
    callback();
}

ejecutarCallback(miCallback); // Callback ejecutado

// 2. Sincronia vs Asincronia

/////////////////////
// Callback sincrono
/*
function procesoPesado(callback) {
    console.log("Iniciando proceso...");

    // Simular procesamiento pesado
    for (let i = 0; i < 10000; i++) {
        console.log("<- Numero de vueltas de la iteracion");
    }

    // Al termino de este bucle lento, se llamara finalmente a nuestra funcion
    callback();
}

// Este proceso va a detener durante bastantes segundos todo el hilo principal de ejecucion de JavaScript
procesoPesado(function() {
    console.log("Proceso completado");
});


// Vamos a ver cuanto tarde en verse este mensaje
console.log("Esto se ejecuta despues del callback");
*/

///////////////////////
// Callback asincrono

function procesoAsincrono(callback) {
    console.log("Iniciando proceso asincrono...");

    // Este proceso va a tardar 5 segundos
    setTimeout(function() {
        callback(); // Esta funcion se ejecutara al cabo de 5 segundos
    }, 5000);
}

procesoAsincrono(function() {
    console.log("Proceso asincrono de 5 segundos completado");
})


console.log("Esto se ejecuta despues del proceso asincrono, se vera de inmediato o despues de 5 segundos?");



/*=========================================
    Casos de usos comunes de callbacks
=========================================*/

////////////////////////
// 1. Temporizadores (Timers)
setTimeout(function() {
    console.log("Esto se ejecuta despues de 3 segundos");
}, 3000);

// setInterval es lo mismo pero se ejecuta cada x segundos


////////////////////////
// 2. Eventos del DOM
let boton = document.getElementById("boton");

// addEventListener es un callback que recibe de 1er parametro un string y de 2o parametro una funcion
boton.addEventListener("click", function(event) {
    console.log(`Jijiji, este es mi evento: ${event.target}`);
});


////////////////////////
// 3. Operaciones con arrays
let numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero, indice) {
    console.log(`Indice: ${indice}, valor: ${numero}`);
});

// map, filter, etc


/*
////////////////////////
// 4. Peticiones HTTP -> Ver mas abajo



////////////////////////
// 5. Lectura de archivos (Node.js)


======================
    Ventajas
======================

- Simplicidad: Facil de entender para operaciones simples
- Universalidad: Compatible con todos los navegadores
- Flexibilidad: Permiten crear codigo reutilizable



======================
    Desventajas
======================

- Callback Hell: Anidamiento excesivo que dificulta la lectura
- Manejo de errores: Complicado con callbacks anidados
- Flujo de control: Dificil de seguir con operaciones complejas


// Ejemplo de anidamiento "tramboliko" -> callback hell https://dev.to/jerrycode06/callback-hell-and-how-to-rescue-it-ggj



===================================
    Alternativas modernas
    para evitar estos problemas
===================================

    - Promesas: .then().catch()
    - Async/Await: Sintaxis mas limpia y legible


Promises: Objeto que representa un valor que puede estar disponible ahora, mas adelante o nunca. Sus estados son:

    - Pending
    - Fulfilled
    - Rejected
*/

// Hacer una peticion HTTP Get a una API Rest para traer usuarios ficticios

// Obtenemos usuarios
fetch("https://jsonplaceholder.typicode.com/users") // 1. Hago una peticion HTTP a la URL para obtener los usuarios

    .then(response => { // Aca recibo la respuesta del servidor con el JSON
        return response.json(); // Es el equivalente a JSON.parse() -> Transformamos el JSON a objetos
    })

    .then(data => console.table(data)) // Ahora en data tengo los objetos ya parseados

    .catch(error => {
        console.error("Error al obtener los datos:", error)
    });

// Los catch nos capturan errores reales de red: no hay internet o servidor caido


// async / await simplifica todavia mas esto y manejamos los errores con try catch
async function obtenerPosts() {

    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    
        const datos = await respuesta.json(); // El parseo o conversion de datos tb es una operacion asincrona
    
        console.log(datos);

    } catch(error) {
        console.error("Error al obtener los datos:", error)
    }
}

obtenerPosts();


/*===========================================================
    Diferencia entre Callbacks y High Order Functions
=============================================================

//////////////////
// 1. Callback

    Es simplemente una funcion que pasamos como argumento a otra funcion y que sera llamada en algun momento dentro de esa funcion.

    Es el uso concreto de pasar una funcion como parametro


////////////////
// 2. High Order Function 

    Una HOF es una funcion que cumple al menos una de estas dos condiciones

        1. Recibe una o mas funciones como argumentos
        2. Devuelve una funcion como resultado


- Callback es la funcion pasada como argumento
- High Order Function es la funcion que recibe o devuelve funciones
- Estan relacionadas pero NO son equivalentes: un callback se usa dentro de una HOF, pero no todas las HOF usan callbacks explicitamente porque pueden devolver funciones en lugar de recibirlas



=====================
    Ventajas
=====================

    - Reduccion de codigo repetitivo
    - Mayor legibilidad y expresividad
    - Composicion funcional: permite encadenar transformaciones como .map().filter().reduce()
*/

// Ejemplo 1 HOF -> recibe una funcion
const cuadrados = numeros.map(n => n * n);
console.log(cuadrados); // [1, 4, 9, 16, 25]


// Ejemplo 2 HOF -> devuelve una funcion
function multiplicador(factor) {
    return function(x) {
        return x * factor;
    }
}

const duplicar = multiplicador(2);
console.log(duplicar(5)); // 10


let usuarios = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Santiago", edad: 32 },
    { nombre: "Francisco", edad: 18 },
    { nombre: "Daiana", edad: 20 },
    { nombre: "Daira", edad: 22 },
];

let mayoresEdad = usuarios
    .filter(user => user.edad >= 21)
    .map(user => user.nombre);

console.log(mayoresEdad); // ['Juan', 'Santiago', 'Daira']




/*===========================
    Destructuring
=============================

El destructuring en JavaScript es una sintaxis que permite extraer valores de arrays o propiedades de objetos y asignarnos a variables de forma concisa.

El destructuring es una forma de descomponer estructuras de datos como arrays y objetos en variables individuales sin necesidad de acceder manualmente a cada elemento o propiedad


    - Mejora la legibildad del codigo
    - Facilita el acceso rapido a datos de estructuras complejas
    - Reduce la verbosidad (menos lineas para obtener lo mismo)
*/

// Sin destructuring
let listaNumeros = [1, 2, 3];
let primeroLista = listaNumeros[0];
let segundoLista = listaNumeros[1];


// Con destructuring
let [uno, dos] = listaNumeros;
console.log(uno, dos);// 1 2


// Sin destructuring
let persona = { nombre: "David", edad: 30 };
let edadPersona = persona.edad;
let nombrePersona = persona.nombre;


// Con destructuring
let { nombre, edad } = persona;
console.log(nombre, edad); // David 30


// Usos avanzados del destructuring

// 1. Asignar a nuevas variables
let { nombre: n, edad: e } = persona;
console.log(n, e); // David 30


// 2. Destructuring con valores por defecto
let { nom, ciudad = "Desconocida" } = { nom: "Gabi" };
console.log(ciudad); // Desconodida


// 3. Destructuring en parametros de funcion
function crearSaludo({nombre, edad}) {
    console.log(`Nombre: ${nombre}, tenes ${edad} años`);
}

let alumno = {nombre: "Johnny", edad: 20};
crearSaludo(persona); // Nombre: David, tenes 30 años
crearSaludo(alumno); // Nombre: Johnny, tenes 20 años


// 4. Destructuring de arrays con valores omitidos
let [primero, ,tercero] = [10, 20, 30];
console.log(primero, tercero); // 10 30


// 5. Rest operator con destructuring
let [a, ...resto] = [1, 2, 3, 4];
console.log(a); // 1
console.log(resto); // [2, 3, 4]




/*===========================
    Spread operator
=============================

El spread opreator (operador de propagacion) en JavaScript, denotado por "..." es una sintaxis introducida en ES6 que permite descomponer elementos iterables como arrays, strings y objetos en elementos individuales. Su

Su comportamiento varia segun el contexto en el que se use, pero su principal funcion es copiar, combinar o expandir estructuras de datos de manera eficiente

Como funciona el spread operator?
    El spread operator trabaja a nivel de valores individuales, extrayendo cada elemento de un iterable y colocandolos en el contexto donde se usa

    Cuando el interprete encuentra ...iterable, automaticamente:
        
        1. Convierte el iterable en una secuencia de valores individuales

        2. Propaga (spread) esos valores en el nuevo contexto (array, objeto, llamada a funcion, etc)

        3. No modifica el original


El spread operator es una herramienta en JavaScript que simplifica

    - Manipulacion de arrays (copiar y concatenar)
    - Combinacion de objetos (inmutabilidad, mezcla de propiedades)
    - Paso de argumentos a funciones
*/

// Copia superficial o shallow copy
let original = [1, 2, 3];
let copia = [...original]; 

console.log(copia); // [1, 2, 3]

/* ==========================
    1. Entendiendo la copia superficial (shallow copy)
=============================

    - No es una referencia: cambios en copia no afectan al original
    - Solo copia un nivel: si hay objetos anidados, estos si se referencian
*/

// Con numeros simples no tenemos problema
copia[0] = 10;
console.log(original); // [1, 2, 3]
console.log(copia); // [10, 2, 3]


let originalObj = [
    { nombre: "Ari" }
];

let copiaObj = [...originalObj];

copiaObj[0].nombre = "Carola";

// Solo un nivel significa que copia el array externo pero NO copia objetos ni arrays internos
console.log(originalObj);  
/* 
{
    "nombre": "Carola"
}
*/
console.log(copiaObj);
/* 
{
    "nombre": "Carola"
}
*/


// 2. Concatenacion de arrays
let arr1 = [1, 2];
let arr2 = [3, 4];

// Mas eficiente que concat(), mejor rendimiento en motores modernos
let combinados = [...arr1, ...arr2];
console.log(combinados); // [1, 2, 3, 4]



// 3. Uso con otros iterables (convierte strings en arrays sin usar split)
let str = "Holis";
let caracteres = [...str];
console.log(caracteres); // ['H', 'o', 'l', 'i', 's']


// 4. Combinacion de objetos
let defaults = { theme: "dark", fontSize: 14 };
let userSettings = { fontSize: 18 };
let finalConfig = {...defaults, ...userSettings}; // Las propiedades posteriores sobreescriben a las anteriores
console.log(finalConfig); // {theme: 'dark', fontSize: 18}


// 5. Spread opreator en funciones
let suma = (a, b, c) => a + b + c;
let listaSimple = [1, 2, 3];
console.log(suma(...listaSimple)); // 6


// 6. Recoger argumentos restantes (rest parameters)
function logArgs(first, ...rest) {
    console.log(first);
    console.log(rest);
}

logArgs("a", "b", "c");
// a
// ['b', 'c']


/*==========================
    Funciones anidadas
============================

En JavaScript, una funcion anidada es simplemente una funcion definida dentro de otra funcion. Es decir, una funcion interna que vive en el ambito lexico (scope) de una funcion externa.
Una funcion anidada es una funcion que:

    - Se declara adentro de otra funcion
    - Tiene acceso a todas las variables y parametros de su funcion externa
    - Puede ser utilizada para organizar mejor el codigo, modularizar logica o crear cloures


Consideraciones
    - Las funciones anidadas no estan disponibles fuera del scope donde se definen, a menos que se retornen o se expongan explicitamente

    - Demasiadas funciones anidadas pueden dificultar la legibilidad si no estan bien organizadas
*/

// Ejemplo basico de funcion anidada
function saludar(nombre) {

    // Funcion anidada dentro de saludar
    function construirMensaje() { 
        return `Hola, ${nombre}`; // Tenemos acceso al parametro nombre de la funcion madre
    }
    
    return construirMensaje();
}

console.log(saludar("Juan Cruz")); // Hola, Juan Cruz


// Usos comunes de funciones anidadas

// 1. Organizacion del codigo: En vez de escribir una gran funcion, se puden definir sub-funciones internas
function procesarTexto(texto) {

    function limpiar(t) {
        return t.trim().toLowerCase();
    }

    function contarPalabras(t) {
        return t.split(/\s+/).length;
    }

    let limpio = limpiar(texto);
    return contarPalabras(limpio);
}

let stringGabi = "     alto jugador el chelo weigandt    ";


console.log(procesarTexto(stringGabi)); // 5


// 2. Funciones helper privadas: Las funciones internas no son accesibles desde fuera, lo cual simula privacidad

function crearUsuario(nombre) {

    function validarNombre(n) {
        return typeof n === "string" && n.length > 2;
    }

    if(!validarNombre(nombre)) {
        throw new Error("Nombre no valido");
    }

    return nombre;
}
