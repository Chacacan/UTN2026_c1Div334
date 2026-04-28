# [JavaScript](https://es.wikipedia.org/wiki/JavaScript)


## JavaScript III / Scope y ambito, funciones, tipos de funciones
```js
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
```

---

## JavaScript II / Control de Flujo, Estructuras de Control, Condicionales y Bucles I

```js
/* Control de fujo

El control de flujo en JS determina como se ejecutan las instrucciones de un programa.

Al diseñar un programa, es importante establecer qué partes del código se ejecutan y bajo qué condiciones.
En JS esto lo logramos mediante estructuras de control que permiten ejecutar secuencias de codigo basadas en DECISIONES, REPETICIONES o CONDICIONES especificas.

Que tipos de estructuras de control de flujo tenemos en JavaScript?

    1. Condicionales
    - if, else if, else
    - Operadores logicos: &&, ||, !
    - Operadores ternarios

    2. Bucles I
    - for, while, do...while

    3. Control de flujo avanazado
    - break
    - continue
    - switch
*/

// Condicionales
let edad = 22;

if(edad >= 18) {
    console.log("Sos mayor de edad");

} else if(edad < 18 && edad > 0) {
    console.log("Sos menor de edad");
    
} else {
    console.log("Edad invalida")
}

// PRACTIQUEN INTRODUCCION DE DATOS CON prompt()


/* Operadores logicos
    AND (&&): Ambas condiciones deben ser verdaderas
    OR (||): Al menos una condicion debe ser verdadera
    NOT (!): Niego el valor de una condicion. Es el operador de negacion logico
*/

// Recordemos, window.prompt devuelve un string
// let edad2 = prompt("Que edad tenes");
/*
let edad2 = parseInt(prompt("Que edad tenes"));
console.log(typeof edad2);
console.log(edad2)

let tieneLicencia = true;

if(edad >= 18 && tieneLicencia) {
    console.log("Podes manejar");
}

if(edad < 18 || !tieneLicencia) {
    console.log("No podes manejar.. pibe!");
}
*/

// Ejemplo negacion logica basica "!"
// El operador "!" invierte el valor booleano de una expresion. Si la expresion es true, devuelve false y viceversa

let esVerdadero = true;
console.log(!esVerdadero); // false

/* Valores "Falsy"

    En JS, los valores "falsy" son aquellos que en un contexto boooleano, devuelve false. Algunos ejemplo de "falsy" son: false, 0, "", null, undefined y NaN

    =============================
    Truthy y Falsy en JavaScript
    =============================

    En JavaScript, los valores **truthy** y **falsy** son aquellos que se evalúan como `true` o `false` respectivamente cuando se utilizan en un contexto booleano, como en sentencias `if` o operadores lógicos.

    Los **valores falsy** son exclusivamente los siguientes:
    *   `false`
    *   `0` (y `-0`)
    *   `0n` (BigInt cero)
    *   `""`, `''`, `` `` (cadenas vacías)
    *   `null`
    *   `undefined`
    *   `NaN`

    Todos los demás valores son **truthy**, lo que incluye:
    *   Cadenas no vacías (incluso `"false"` o `"0"`).
    *   Números distintos de cero (incluyendo negativos e infinitos).
    *   Objetos y arrays (incluso si están vacíos: `{}`, `[]`).
    *   Funciones.
    *   El valor booleano `true`.

    Para verificar explícitamente si un valor es truthy o falsy, se puede usar la función `Boolean()` o el operador de doble negación `!!`. Por ejemplo, `Boolean(0)` devuelve `false`, mientras que `Boolean({})` devuelve `true`. Es importante notar que en JavaScript, a diferencia de otros lenguajes como Python, los contenedores vacíos como arrays u objetos se consideran **truthy**.

    https://conermurphy.com/blog/truthy-falsy-values-explained/
*/

let valor1 = 0;
let valor2 = "Holis";

console.log(!valor1); // true, porque 0 es falsy, entonces se convierte en true

console.log(!valor2); // false, porque una cadena no vacia es truthy, asi que se convierte en false


// Podemos usar ! para invertir una condicion en una declaracion if

let usuarioActivo = true;

if(!usuarioActivo) {
    console.log("Cuenta inactiva");
} else {
    console.log("Cuenta activa")
}

// Ejemplo de toggle con el operador !
// El uso del operador ! es comun para implementar la logica del "alternador" (toggle) que alterna entre true y false cuando se activa

let estado = true;

function alternarEstado() {
    estado = !estado; // Invierte el valor de "estado" sea cual sea

    console.log("Nuevo estado: ", estado);
}

alternarEstado(); // false
alternarEstado(); // true
alternarEstado(); // false
alternarEstado(); // true


// Operador ternario: Nos ofrece una forma ams compacta de escribir una condicion if...else
let edad3 = 34;
let mensaje = (edad3 >= 18) ? "Sos mayor de edad, wiii" : "Sos menor de edad";
console.log(mensaje); // Sos mayor de edad, wiii

// Prueben a hacer esto con el prompt()




/*================
     Bucle for
==================
    Se usa cuando se conoce de antemano el numero de iteraciones

    for(inicializacion; condicion; incremento) {
        // Codigo a ejecutar en cada iteracion
    }
*/

for (let i = 0; i < 5; i++) {

    console.log("Iteracion: ", i);

}

// Bucle for anidado

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
        console.log(i + "-" + j);
    }

}

// Generen una tabla de multiplicar del 1 al 5


/*================
     Bucle while
==================
    Ejecuta el bloque de codigo mientras la condicion sea verdadera

    while (condicion) {
        // Codigo a ejecutar mientras la condicion sea verdadera
    }
*/

let i = 0;
while (i < 5) {
    console.log("Iteracion while: ", i);
    i++;
}

/*================
     Bucle do while
==================
    Similar al while, pero la condicion se evalua DESPUES de ejecutar el bloque de codigo, lo que garantiza que el codigo se ejecutara al menos una vez

    do {
        // Codigo a ejecutar
    } while (condicion)
*/

let j = 0;

do {
    console.log("Iteracion do while:", j);
    j++;
} while (j < 5);


/*===============================
     Control de flujo avanzado
=================================
    
    break: Se usa para salir inmediatamente de un bucle o una estructura de control

    continue: salta a la siguiente iteracion del bucle, omitiendo el codigo restante para esa iteracion
*/

// ejemplo con la keyword: break
for (let i = 0; i < 10; i++) {
    if(i === 5) {
        break; // Sale del bucle cuando i es 5
    }
    console.log("Iteracion: ", i);
}

// ejemplo con la keyword: continue
for (let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        continue; // Saltamos las iteraciones en las que i es par
    }
    console.log("Numero impar: ", i);
}


/*================
    Switch
==================
    El switch es otra estructura de control que permite evaluar una expresion y ejecutar el blqoeu de codigo correspondiente al caso que coincide

    switch(expresion) {
        case valor1:
            // Codigo a ejecutar si la expresion es igual a valor1
            break;

        case valor2:
            // Codigo a ejecutar si la expresion es igual a valor2
            break;

        default:
            // Codigoa  ejecutar si ninguno de los casos coincide
    }
*/


// Ejercicio sugerido: Pidan al usuario con prompt() el dia de la semana y devuelvan lunes, martes, miercoles, jueves, viernes o fin de semana
```


---

## JavaScript I / Conceptos elementales, sintaxis básica, variables, tipos de datos y operadores

```js
// Comentario una sola linea

/* Comentario
    de multiples
    lineas
*/

// Imprimimos un mensaje por consola
console.log("Hola mundo");

/* La consola de JavaScript es una herramienta de depuracion en nuestro navegador web.

Nos permite ejecutar comandos en JavaScript, ver mensajes de registro y errores y hacer pruebas interactivas de codigo */

// Imprimimos una ventana flotante
// alert("Holisss");

/* Las variables nos permiten almacenar datos que peuden ser reutilizados y modificados

var: Usado historicamente para declarar variables, tiene limintaciones como el hoisting

let: Permite declarar variables que pueden cambiar.

const: Se utiliza para declarar variables que no se deben reasignar. El valor en un const puede ser modificado si es un objeto o un array, pero la referencia (en memoria) no puede cambiar
*/

// NO RECOMENDADO, var
var nombre = "Juan";

// VARIABLES MODERNAS -> let
let edad = 25;

// VARIABLES MODERNAS -> const
const pi = 3.1416; // const declara constantes, cuyo valor no puede cambiar una vez asignado y no permite reasignacion

console.log(nombre);
console.log(edad);
console.log(pi);


/* Tipos de datos primitivos

    - Numeros: Valores numericos
    - Cadenas: (Strings) texto encerrado entre comillas simples o dobles
    - Booleanos: true o false
    - null: Representa un valor intencionalmente vacio
    - undefined: Una variable declarada pero que no tiene valor
*/

let numero = 42;
let texto = "Hola";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(vacio);
console.log(indefinido);


/* Operadores en JavaScript

    Los operadores son simbolos especiales que nos permiten realizar operaciones sobre valores o variables.

    Estos operadores pueden ser aritmeticos, de comparacion, logicos, de asignacion, etc.

    https://www.w3schools.com/js/js_operators.asp
*/

/*    Operadores aritmeticos:
    Se utilizan para realizar operaciones matematicas sobre valores numericos
    https://www.w3schools.com/js/js_arithmetic.asp
*/

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


/*    Operadores de asignacion:
    Asignan valores a las variables
    
    https://www.w3schools.com/js/js_assignment.asp
*/

let x = 10;
x += 5; // x = x + 5; Ahora x es 15
x -= 2; // x = x -2; Ahora x es 13
x++;
console.log(x);


/*    Operadores de comparacion:
    Se usan para comparar valores y devuelven un resultado booleano (true o false)
    
    https://www.w3schools.com/js/js_comparisons.asp

    La diferencia entre == e ===
        "==" compara los valores despues de hacer una conversion de tipo (si fuera necesario)

        "===" compara tanto el valor como el tipo sin hacer conversion
*/

let c = 5;
let d = "5";

console.log("============");
/*
    console.log(c == d); // true porque compara solo el valor (realizo un parseo previo)

    console.log(c === d); // false porque compara tanto el valor como el tipo (sin hacer parseo)
*/

console.log(c == "5"); // 5 (number) == 5  (number) / true (no hubo necesidad de hacer conversion)

console.log(c === "5"); // 5  (number) === 5  (number) / true (igual valor y tipo)

// Hacemos la misma operacion de == (igual valor) PERO invertimos el resultado
console.log(c != "5"); // 5 (number) es distinto a "5" (string) (comparamos los valores, no los tipos) -> es true pero lo invertimos, mismo valor, por tanto tenemos false

// Hacemos la misma operacion de === (igual valor y tipo) PERO invertimos el resultado
console.log(c !== "5"); // 5 (number) es estrictamente distinto a "5" (string) (comparamos valores y tipos) -> es false pero lo invertimos, por tanto tenemos true

console.log("============");


/*    Operadores lógicos:
    Se usan para combinar expresiones booleanas
    
    https://www.w3schools.com/js/js_assignment.asp
*/

let e = true;
let f = false;

console.log(e && f); // false porque ambos deben ser true
console.log(e || f); // true porque al menos uno es true
console.log(!f); // true porque invierte el valor de false

/*  Operadores de tipo:
    Permiten verificar el tipo de dato o su relacion

    typeof: Devuelve el tipo de datos de una variable
    instanceof: Verifica si un objeto es instancia de una clase
*/

console.log(typeof 42);
console.log(typeof "42");
console.log([] instanceof Array);

```