# [JavaScript](https://es.wikipedia.org/wiki/JavaScript)

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