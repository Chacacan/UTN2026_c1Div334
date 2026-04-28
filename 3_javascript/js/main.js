/*======================
    Scope o Ambito
========================

El scope o ambito en JS se refiere al contexto en el cual las variables y las funciones son accesibles y pueden ser referenciadas.
Hay distintos tipos de scope:

1. Global scope o Ambito global
    - Las variables declaradas fuera de cualquier funcion o bloque tienen alcance global y son accesibles desde cualquier parte del codigo
    - Con var, en un navegador, las variables globales se adjuntan al objeto window


2. Local scope / Function scope o Ambito local o ambito de funcion (var)
    - Las variables declaradas dentro de una fucnion solo son accesibles dentro de esa funcion. Estas variables tienen un ambito local

3. Block scope o Ambito de bloque
    - A partir de ES6 (2015), las variables declaradas con let y const tienen alcance de bloque, lo que significa que solo son accesibles dentro del bloque en que se declararon -> dentro de las llaves {}, de un if, de un for, etc
*/

/*========================
    Variables globales
========================*/
let letGlobal = "Holis, soy una let accesible";
const constGlobal = "Yo tambien!";

// 1. Ejemplo ambito global
var globalVar = "Soy global";

function mostrarGlobal() {
    console.log(globalVar);
}

mostrarGlobal();
console.log(globalVar);


// 2. Ejemplo ambito de funcion
function mostrarLocal() {
    var localVar = "Soy local";
    console.log(localVar);
}

mostrarLocal(); // imprime correctamente el mensaje
// console.log(localVar); // Nos muestra un error


// 3. Ejemplo de ambito de bloque
if(true) {
    let bloqueLet = "Soy de bloque";
    console.log(bloqueLet);
}

// console.log(bloqueLet); // Error, bloqueLet no esta definida


/*========================================
     Scope chain o cadena de ambito
     =====================================

Cuando intentamos acceder a una variable, JavaScript busca en la cadena de ambito, comenzando por el ambito mas interno y moviendose hacia los ambitos externos hasta encontrar la variable o llegar al ambito global */

var globalVar2 = "Soy una var global";

function externa() {
    var externaVar2 = "Soy de externa";

    function interna() {
        var internaVar2 = "Soy de interna";
        console.log(globalVar2);    // "Soy una var global"
        console.log(externaVar2);   // "Soy de externa"
        console.log(internaVar2);   // "Soy de interna"
    }

    interna();
    // console.log(internaVar2);       // Error: internaVar2 no esta definida
}

externa();


/*========================================
     Ambito de funcion vs Ambito de bloque
     =====================================

Function Scope: Las variables declaradas con VAR tienen ambito de funcion.
Esto significa que si se declararn dentro de una funcion, no son accesibles fuera de esa funcion, pero no estan limitadas por bloques 

Block Scope: Las variables declaradas con let y vconst estan limitadas por el bloque {} en el que se declaran
*/

// Ejemplo function scope
function scopeFunction() {
    if (true) {
        var funcionVar3 = "Soy de funcion";
    }

    console.log(funcionVar3); // "soy de funcion"
}

scopeFunction();



// Ejemplo block scope
function blockScope() {
    if (true) {
        let bloqueLet3 = "Soy de bloque";
        const bloqueConst3 = "Tambien soy de bloque"
    }

    // console.log(bloqueLet3); // Error bloqueLet3 is not defined
    // console.log(bloqueConst3); // Error bloqueConst3 is not defined

    console.log(letGlobal);
    console.log(constGlobal);
}

blockScope();


/*==========================
    Hoisting o Elevacion
============================

Las variables y funciones en JavaScript se mueven "hacia arriba" de su contexto de ejecucion (scope o alcance). */

// Variables con var: Se elevan y se inicializan con undefined
console.log(elevadaVar);        // undefined
var elevadaVar = "Soy elevada!";
console.log(elevadaVar);        // "Soy elevada!"


// Variables con let y const: Se elevan pero no se inicializan, lo que lleva a un error si se accede antes de la declaracion
// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let elevada!";
console.log(elevadaLet);



/*================================
    Comparacion var, let y const
==================================

    - var:      Tiene ambito de FUNCION y permite la redeclaracion y la reasignacion

    - let:      Tiene ambito de BLOQUE y no permite la redeclaracion, pero si la reasignacion

    - const:    Tiene ambito de BLOQUE y prohibe la redeclacion y la reasignacion


- let y const se introdujeron en el estandar ES6 (2015) para mejorar el ambito de las variables y reducir la probabilidad de anulaciones accidentales de variables

- tanto let como const no permiten la elevacion, mientras que var si

- const asegura que el valor de la variable permanece constante, mientras que let permite la reasignacion. Aunque OJO, objetos y arrays si pueden modificarse


===========================================
    Resumen comparacion de variables
===========================================

var:
    - Ambito global o ambito de funcion
    - Puede ser redeclarado y reasignado
    - Tiene elevacion a nivel de funcion, por lo que puede utilizarse antes de la declaracion

let:
    - Ambito global o de bloque {}
    - Se puede volver a reasignar, pero no a redeclarar
    - Tiene elevacion a nivel de bloque, por lo que no es accesible antes de la declaracion

const:
    - Ambito global o de bloque {}
    - No se puede volver a declarar ni reasignar
    - Tiene elevacion a nivel de bloque, por lo que no es accesible antes de la declaracion


===============================
    Buenas practicas
===============================

- Usar const para variables de solo lectura, como constantes u objetos inmutables.
- Usar let para variables que puedan cambiar con el tiempo
- Evitar usar var debido a su ambito global que puede dar lugar a conflictos y bugs
*/

// Ejemplo Let con redeclaracion pero sin reasignacion
let x = 10;
x = 20;
console.log(x);
// let x = 30; // Uncaught SyntaxError: Identifier 'x' has already been declared

const obj = { nombre: "Andy" };
obj.nombre = "Gavin";
console.log(obj.nombre); // "Gavin"

// obj = {}; // Uncaught TypeError: Assignment to constant variable.



/*========================================
     Introduccion a las funciones
     =====================================

Una funcion es un bloque de codigo reutilizable que se puede ejecutar cuando se llama por su nombre (se invoca)

Las funciones son fundamentales para la modularidad y reutilizacion del codigo

Por que usarlas?
    - Facilita la organizacion del codigo
    - Permite la reutilizacion , principio DRY (Dont Repeat Yourself)
    - Mejora la legibilidad y el mantenimiento


Funcion declarada: La forma mas comun de declarar una funcion en JS es con la palabra clave function

    function nombreFuncion() {
        // Bloque de codigo que se ejecutara cuando se llame a la funcion
    }

Funciones con parametros: Se pueden definir variables en las funciones que acepten valores cuando se les llame

    - Los parametros son los nombres de las variables que definimos en la declaracion de la funcion
    - Los argumentos son los valores que pasamos a la funcion cuando la llamamos
*/

// Ejemplo funcion con parametros
function sumar(a, b) { // (a y b son nuestros parametros)
    let resultado = a + b;
    console.log(`El resultado es: ${resultado}`);
}

// 5 y 3 son los argumentos (los valores que les pasamos a los parametros)
sumar(5, 3);

// Funciones que devuelven un valor: Las funciones pueden devolver un valor utilizando la palabra clave return
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(4, 5));



/*==========================================
    10 tipos de funciones en JavaScript
============================================

1. Funcion declarada / Named funcion o Basic function
    
    Es la declaracion basica de JavaScript, usa la keyword function

    Se recomienda para funciones con nombre o cuando se necesite hoisting. Las funciones declaradas con la keyword function se pueden elevar a la parte superior de su ambito, es decir, del scope que las contiene.
    Esto permite llamar a la funcion antes de ser declarada.

*/
// Ejemplo funcion declarada
saludito(); // Hola holiiita

function saludito() {
    console.log("Hola holiiita");
}

/* 2. Funcion expresada / Function expression
    Es la funcion que esta dentro de una variable.
    
    Son utiles para:
        funciones anonimas
        cuando se quiere controlar donde va a estar disponible la funcion
        cuando va a ser usada como argumento para otra funcnion
*/

// Ejemplo funcion expresada
const lamento = function() {
    console.log("Muy lunes che... fah");
}

lamento();


/* 3. Funcion anonima / Anonymous funcion
    No tiene nombre y se usan como callbacks generalmente
*/

// Ejemplo funcion anonima
setTimeout(function() {
    console.log("Hola mundo");
}, 1000);


/* 4. Funcion de flecha / Arrow function
    Especialmente utiles para escribir funciones de una linea.
    No tienen su propio this
*/

// Ejemplo funcion flecha (ambas hacen exactamente lo mismo)
const sumame = (a, b) => a + b;
const sumame2 = (a, b) => {
    return a + b;
}

/* 5. Funcion de metodos / Method function
    Son las funciones definidas dentro de un objeto
*/

// Ejemplo funcion de metodos
const persona = {
    nombre: "Juan",
    saludar() {
        console.log(`Hola! me llamo ${this.nombre}`);
    }
}

persona.saludar();


/* 6. Funcion de constructor / Constructor function
    Se usan para crear objetos, se invocan usando la keyword new
*/

function Usuario(nombre, id) {
    this.nombre = nombre;
    this.id = id;
}

const marcos = new Usuario("Marcos", 12345);
console.log(marcos.id);


/* 7. Expresion de funcion ejecutada inmediatamente / IIFE - Immediately Invoked Function Expression
    Las IIFE son funciones que se ejecutan inmediatamente despues de haberse definido
*/

(function() {
    console.log("Holis! Soy una IIFE y me ejecuto al toque, perro");
})();



/* 8. Funcion generadora o Generadores / Generator function
    Son un tipo especial de funciones que sirven como una fabrica de iteradores. Es decir, pausan su ejecucion y continuan mas tarde
*/

function* crearId() {
    let index = 0;
    while (true) {
        yield index++
    }
}

const generador = crearId();

console.log(generador.next().value); // 0
console.log(generador.next().value); // 1
console.log(generador.next().value); // 
console.log(generador.next().value); // 
console.log(generador.next().value); // 
console.log(generador.next().value); // 
console.log(generador.next().value); // 


/* 9. Funciones de orden superior / High Order Functions
    Las veremos mas adelante en JavaScript VI
*/


/* 10. Funcion asincronica / Async function
    Las veremos mas adelante en JavaScript VII y VIII
*/



/*======================
    Funciones flecha
========================

Son una forma mas compacta de escribir funciones. Se introdujeron en ES6 y tienen una sintaxis mas concisa.

    const nombreFuncion = (parametros) => {
        // Bloque de codigo    
    }

    // Ojo! Cuando tiene solamente una instruccion, podemos prescidir de las {} y lleva implicito un return
    const nombreFuncion = (parametros) => Bloque de codigo

    es lo mismo que 
    const nombreFuncion2 = () => {
        return // bloque de codigo    
    }
*/

// Flecha 1. Funcion sin parametros: Se pueden usar parentesis vacias
const saludar = () => console.log("Hola mundo!");
saludar();

// Flecha 2. Un solo parametro: Las parentesis son opcionales
const cuadrado = x => x * x;
console.log(cuadrado(4));

// Flecha 3. Mas de un parametro
const sumarFlecha = (a, b) => a + b;

//  Flecha 4. Mas de una instruccion: Si el cuerpo de la funcion tiene mas de una instruccion, necesitamos usar {} y la palabra clave return si queremos devolver un valor
const saludarPersona = nombre => {
    const saludo = `Holis ${nombre}!`;
    return saludo;
}

console.log(saludarPersona("Ari"));


// Flecha 5: Muy populares en las funciones de orden superior y callbacks