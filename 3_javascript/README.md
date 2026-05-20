# [JavaScript](https://es.wikipedia.org/wiki/JavaScript)

### *(A confirmar) A partir de Martes / 26 MAYO RECU 1er PARCIAL*

### Continuar JS VIII desde asincronia

---

## JavaScript VIII / JSON, asincronia, promesas y fetch, asnyc / await y try..catch

### JSON o JavaScript Object Notation
JSON o JavaScript Object Notation (*Notacion de Objetos de JavaScript*) es un formato muy ligero de intercambio de datos que se convirtiö en el estandar para la comunicacion entre aplicaciones en la web.

Aunque su sintaxis proviene de JavaScript, es independiente del lenguaje y ampliamente usado en todo tipo de sistemas y lenguajes de programacion.

#### Que es?
Basicamente cuando hablamos de JSON, hablamos de un string, texto plano con un formato para ordenar los datos, super ligero, facil de manipular.

- Es textual y legible por humanos
- Es super ligero (ocupa muy poco espacio)
- Es facil de parsear y generar
- Es independiente del lenguaje aunque usa convenciones de JS

JSON es un formato de texto que representa datos estructurados basados en dos estructuras fundamentales:

1. **Coleccion de pares nombre/valor** (equivalente a un objeto en JavaScript)
2. **Lista ordenada de valores** (equivalente a un array en JavaScript)

#### Reglas de sintaxis
- Los datos estan en pares **nombre/valor** (clave/valor)
- Los datos estan separados por comas
- Las llaves `{}` representan objetos
- Los corchetes `[]` representan arrays
- Las comillas dobles `""` son obligatorias para nombres de propiedades y strings


#### Tipos de datos en JSON
1. Strings: `"texto"` (siempre con comillas dobles)
2. Numbers: `42` o `3.14`
3. Booleans: `true` o `false`
4. Null: `null`
5. Objects: `{"clave": "valor"}`
6. Arrays: `["valor1", "valor2"]`

#### Metodos JSON en JavaScript
```js
// Convierte un objeto JavaScript a una cadena JSON
JSON.stringify();

//  Convierte una cadena JSON a un objeto JavaScript
JSON.parse(); 
// Recomendable usar try-catch porque puede lanzar excepciones con JSON invalido
```

#### Uso comun de JSON
1. **Comunicacion Cliente-Servidor**: JSON es el formato estandar para APIs REST

2. **Almacenamiento local**: Guardar datos en el navegador

3. **Configuraciones**: Muchas herramietnas usan JSON para configuraciones como `package.json` en Node.js

#### Limitaciones de JSON
1. **No soporta comentarios**: A diferencia de los objetos de JavaScript
2. **No funciones**: No se pueden serializar metodos
3. **Sin tipos especiales**" Fechas, RegExp, Map, Set

#### Buenas practicas
1. **Validar JSON**: Antes de parsear, especialmente si viene de fuentes externas
2. **Manejar errores**: Siempre `try...catch` con `JSON.parse()`
3. **No usar para datos sensibles**: JSON no es un formato seguro por si mismo
4. **Optimizar para tamaño**: Minimizar el JSON en produccion

#### En resumen
JSON es fundamental en el ecosistema JavaScript y en la web moderna:

- Es el formato estandar para intercambio de datos
- Simple pero muy util
- Integrado en todos los navegadores y en Node.js



---



## JavaScript VII / Web APIs, Callbacks, High Order Functions, Destructuring, Spread Operator, Funciones anidadas

```js
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
```

---

### High Order Functions

Una **higher-order function** (función de orden superior) en JavaScript es una función que **recibe una o más funciones como argumentos** o **devuelve una función como resultado**. Esta capacidad se basa en el concepto de que las funciones en JavaScript son "ciudadanas de primera clase", lo que significa que pueden ser tratadas como cualquier otro valor, asignadas a variables o pasadas entre funciones.

Estas funciones permiten **abstraer acciones** en lugar de solo valores, facilitando un código más modular, reutilizable y declarativo. Las formas más comunes y nativas de higher-order functions en JavaScript son los métodos de arrays:

*   **`map()`**: Transforma cada elemento de un array y devuelve un nuevo array con los resultados.
*   **`filter()`**: Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
*   **`reduce()`**: Ejecuta una función reductora sobre cada elemento del array para reducirlo a un único valor de salida.
*   **`forEach()`**: Ejecuta una función proporcionada una vez por cada elemento del array.

Un ejemplo básico de una higher-order function personalizada es una función que acepta otra función como callback para ejecutarla dinámicamente:

```javascript
function ejecutarFuncion(func) {
  console.log("Ejecutando la función principal...");
  func(); // Llama a la función pasada como argumento
}

function miCallback() {
  console.log("Ejecutando la función de callback...");
}

ejecutarFuncion(miCallback);
```

---


### Objetos globales y APIs web
- **JavaScript**: lenguaje
- **Web APIs**: herramientas y funcionalidades del navegador
- **Objeto global**: Lugar donde el entorno expone las herramientas

Consideremos el siguiente metodo `setTimeout()`, que es?

- una Web API en el navegador
- expuesta como funcion global
- accesible desde el objeto global `window`
- utilizada por JavaScript
- pero NO es parte del lenguaje ECMAScript 

#### Que son las Web APIs?
**Son funcionalidades que provee el navegador.** No forman parte del lenguaje, JavaScript por si solo no incluye

- `console`
- `setTimeout`
- `fetch`
- `document`
- `alert`
- `localStorage`

Todo esto lo agrega el navegador. El navegador, como entorno de ejecucion de JavaScript **expone las Web APIs dentro del objeto global**

```js
window.setTimeout();

// setTimeout existe porque el navegador inyecta esta funcion en window

// Recordemos, las Web APIs se acceden a traves de objetos globales
window.fetch();         // API de peticiones HTTP
window.localStorage();  // API de almacenamiento
window.navigator;       // API de navegador
window.document;        // API del DOM

// En la practica, podemos omitir 'window'

console.log(window);    // Para ver desde la consola este objeto global
```

### Que es una API?
**API** significa **Application Programming Interface** (Interfaz de Programacion de Aplicaciones).

**Una API es un conjunto de funciones y herramientas que podemos usar para interactuar con algo, como el navegador, el servidor o una libreria**

#### Que es concretamente una Web API?
En el contexto del navegador (chrome, firefox, etc), una Web API es una funcion o conjunto de funciones que el navegador nos da para que las usemos con JavaScript

JavaScript por si solo es un lenguaje de programacion bastante basico. Pero cuando se ejecuta en un navegador, puede acceder a funcionalidades especiales qe el navegador le proporciona

### Ejemplos de Web APIs
> Como vimos, las Web APIs son herramientas que el navegador le da a JavaScript para interactuar con el entorno: HTML, red, audio, video, dispositivos, almacenamiento, etc

JavaScript puro es simple pero el navegador le da "superpoderes" con las Web APIs, que permiten que JS haga cosas reales: hablar con servidores, manipular la pagina, guardar datos, usar la camara, etc:


#### 1. APIs del DOM (Document Object Model)
Permiten acceder y modificar el HTML y CSS de la pagina

- `document.querySelector()`
- `document.addEventListener()`

Uso: manipulacion de elementos, eventos, clases, estilos, etc

---

#### 2. APIs de Red
Permiten comunicarnos con servidores o cargar recursos

- `fetch()`: Muy usada
- `XMLHttpRequest()`: Manera antigua, reemplazada por fetch
- `WebSocket`: Comunicacion en tiempo real
- `EventSource`: Server-sent events

Uso: Peticiones HTTP, chats, notificaciones en tiempo real

---

#### 3. APIs de almacenamiento
Guardan informacion en el navegador

- `localStorage`
- `sessionStorage`
- `IndexedDB`
- `Cookies` mediante `document.cookie`

Uso: Guardar prefererencias, datos de sesion, apps sin conexion

---

#### 4. Timers
Permiten ejecutar funciones luego de un cierto tiempo

- `setTimeout()`
- `setInterval()`
- `clearInterval()`

Uso: Retrasos, animaciones, etc

---

#### 5. APIs de dispositivos y multimedia
Interaccion con hardware o medios

- `navigator.geolocation`: Para el GPS
- `MediaDevices.getUserMedia()`: Para el micronofo y camara
- `Notification`: Para notificaciones de sistema
- `Battery API`, `Clipboard API`

Uso: Apps moviles, camara, permisos, grabaciones, notificaciones

---

#### 6. APIs de interfaz grafica
Controlar animaciones, graficos y visualizacion

- `Canvas API`
- `WebGL`
- `Fullscreen API`
- `Screen Orientation API`

Uso: Juegos, visualizaciones, graficos dinamicos


---


## Notas para previa a parcial
- `JSON.stringify()` y `JSON.parse()`
- Practicar con almacenamiento persistente
- Repasamos iteracion en array de objetos, convirtiendo y desconvirtiendo con los metodos de JSON

- Repaso conceptual todo JS
- SUBIR AL AULA + AVISO -> Ejercicios parecidos para practicar para el parcial
- Maquetado HTML CSS
- Mas ejercicios practica!!!!
- Ejercios extra

- [Clase grabada repaso parcial div 334 11/05/26](https://youtu.be/DeFdzNcf9bs)

---


## JavaScript VI / Manipulacion del DOM en JavaScript y Eventos

### Que es el DOM? 
El DOM HTML o Document Object Model (**Modelo de Objectos del Documento**), es una interfaz de programacion que reprenseta un documento HTML como una estructura jerarquica de objetos, conocida comunmente como arbol DOM.

Esta estructura (de un documento en el navegador) permite a los programas, especialmente con JS, acceder, modificar añadir o eliminar elementos, contenido, estilos y atributos del documento de forma dinamica.

Cada elemento HTML se convierte en un nodo dentro de este arbol, y todos los elementos estan relacionados entre si mediante padres, hijos y hermanos, creando una **representacion en memoria del documento que el navegador puede manipular**.

**El DOM es la base que permite a JavaScript interactuar con el contenido de una pagina web, transformando el codigo HTML en una estructura de objetos manipulable.**

#### Resumen
- DOM es una representacion en memoria de la estructura de una pagina web. Transforma el HTML en una estructura de nodos y objetos que puede ser manipulada mediante JS
- Cada etiqueta HTML es un nodo en el DOM
- El DOM le permitira a JS modificar el contenido, la estructura y el estilo de una pagina

---

#### Donde está disponible el DOM?
El **DOM (Document Object Model)** es una interfaz de programación de aplicaciones (API) estandarizada por el W3C que es **independiente del lenguaje**, lo que permite su uso en una amplia variedad de lenguajes de programación.

Los lenguajes más comunes para interactuar con el DOM incluyen:

*   **JavaScript**: Es el lenguaje nativo de los navegadores web y su uso más frecuente para manipular el DOM del lado del cliente.
*   **Lenguajes del lado del servidor**: Como **Java**, **PHP** o **Python**, que utilizan el DOM para analizar, generar o modificar documentos HTML y XML.
*   **Otros lenguajes**: También se emplea en **C++**, **VBScript** y otros entornos que requieren interactuar con documentos estructurados.

Aunque el **DOM no forma parte del lenguaje JavaScript** en sí mismo, están íntimamente ligados en el desarrollo web, ya que JavaScript es la herramienta principal para acceder y modificar dinámicamente la estructura y el contenido de las páginas web a través de esta API.

---

#### Ejemplo de estructura DOM
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mi página</title>
    </head>
    <body>
        <h1>Bienvenidos</h1>
        <p>Este es un párrafo</p>
    </body>
</html>
```

Este HTML sera representado en el DOM como una estructura en forma de arbol. `document` es el objeto que representa toda la pagina web

#### Diagrama del arbol del DOM
- document
    - html
        - head
            - title
        - body
            - h1
            - p

---

```js
/*===============================================
    Como funciona la manipulacion del DOM?
=================================================

- JavaScript puede acceder y modificar cualquier elemento del DOM utilizando el objeto global document

- JavaScript podra
    - Modificar el contenido (texto, atributos, clases)
    - Añadir o eliminar elementos del DOM
    - Escuchar eventos de usuario (clicks, teclas, ble)


===========================================
    Seleccion de elementos en el DOM
===========================================

- getElementById()
    - Este metodo selecciona un unico elemento por su ID (si no lo encuentra, devuelve null)
    - Solo selecciona el primer elemento que coincida con el ID
*/

// Guardamos este elemento en una variable
let titulo = document.getElementById("titulo");
console.log(titulo); // <h1 id="titulo">Introduccion a JavaScript</h1>
console.log(titulo.textContent); // Introduccion a JavaScript


/* 
    - querySelector(): Selecciona el PRIMER elemento que coincida con un selector CSS

    - querySelectorAll(): Selecciona TODOS los elementos que coincidan con el selector CSS
*/

let primerParafo = document.querySelector(".mensaje");
console.log(primerParafo.textContent); // Primer parrafo

let parrafos = document.querySelectorAll(".mensaje");
console.log(parrafos);

parrafos.forEach(parrafo => console.log(parrafo.textContent)); 
// Primer parrafo
// Segundo parrafo



/*=========================================
    Modificar contenido y atributo
===========================================

Una vez seleccionado un elemento, podemos modificar su contenido, atributos o estilo.

- textContent:      Modifica el texto dentro de un elemento
- innerHTML:        Modifica el contenido HTML dentro de un elemento
- setAttribute():   Modifica los atributos de un elemento
- style:            Permite cambiar el estilo CSS en linea de un elemento
*/

let parrafo = document.getElementById("parrafo");

// Cambiamos el texto
parrafo.textContent = "Holi! Soy el nuevo texto desde JavaScript! Wiiiiiiiiiiii";

// Modificamos el contenido HTML (incluye etiquetas)
parrafo.innerHTML = "<strong>Soy el nuevo texto JS en negrita, holis!</strong>";

// Cambiamos el atributo id del boton
let boton = document.getElementById("boton");

// Cambiamos el atributo
boton.setAttribute("id", "nuevoId");

// Cambiamos el estilo
boton.style.backgroundColor = "purple";
boton.style.color = "white";

// PRACTICA SUGERIDA (guiño guiño), recorran un array de objetos e imprimanlos en listas, tablas, etc con innerHTML


/*=======================
    Eventos en JS
=========================

- Los eventos en JS permiten a los desarrolladores detectar interacciones del usuario con la pagina web, como hacer click en un boton, mover el mouse, escribir un campo de texto, etc. Los eventos son clave para que una pagina web sea interactiva

- Un evento es una señal que se envia cuando ocurre una interaccion o cambio en el documento, como un click, o una pulsacion de tecla

- JavaScript permite escuchar estos eventos y ejecutar funciones especificas cuando ocurren


=============================
    Eventos comunes
=============================

- Eventos de mouse: click, mouseover, mouseout, mousemove
- Eventos de teclado: keydown, keyup
- Eventos de formulario: submit, change, input, focus
- Eventos de ventana: resize, scroll, load, unload
*/

// add event listener -> añadir escuchador de eventos (creamos un proceso en permanente ejecucion)
// Escuchamos el evento click

// Opcion 1: Definimos la funcion como parte del segundo parametro del metodo addEventListener
/*
boton.addEventListener("click", function() {
    // alert("jijiji me hace cosquillas");
    console.log("Era broma, no me hace cosquillas");
});
*/
   
function mensajeConsola() {
    console.log("Soy un mensaje desde la consola");
}

// Opcion 2: Definimos afuera la funcion y la invocamos por su nombre
boton.addEventListener("click", mensajeConsola);


/*=====================
    Entendiendo event
=======================

La razon por la cual algunos addEventListener incorporan la palabra clave event tiene que ver con la necesidad de acceder a la informacion de evento que fue disparado

El event es un objeto que contiene TODOS LOS DATOS del evento que ocurrió: que tecla se presiono, coordenadas del mouse, etc

Cuando necesitamos event?
Solo necesitamos incluir event ennuestra funcion si vamos a usar informacion sobre el event
*/

// Escuchamos el evento de teclado
let input = document.getElementById("input");

// En este caso, usamos una funcion flecha (un solo parametro, parentesis opcionales)
input.addEventListener("keydown", event => {
    console.log(`Tecla presionada: ${event.key}`); // Imprimimos el caracter o nombre de la tecla presionada
    console.log(`Codigo de la tecla: ${event.code}`); // Codigo fisico de la tecla (independiente del idioma del teclado)
});


/*=============================
    Propagacion de eventos
===============================

Cuando ocurre un evento, este se propaga a traves del DOM en 2 fases
    
    - fase de captura (de arriba para abajo)
    - fase de burbuja (de abajo para arriba)

Podemos evitar la propagacion de un evento usando el metodo event.stopPropagation()

<div id="padre">
        <button id="hijo">Boton hijo</button>
    </div>
*/

let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");

padre.addEventListener("click", function() {
    console.log("Se hizo click ene l div padre"); 
});

hijo.addEventListener("click", function(event) {
    event.stopPropagation(); // Evitamos la propagacion
    console.log("Se hizo click en el elemento hijo")
});
```


---


## JavaScript V / Objetos y objetos globales. Almacenamiento persistente. Iteracion en arrays, objetos y arrays de objetos

- *Clave en ete modulo, intentar cranear como hacer las operaciones de transformacion, filtrado, etc sin usar estos metodos!*
```js
/*====================================
    Objetos globales en JavaScript
======================================
1. Objetos globales en el navegador
2. Que es el objeto console en JavaScript
3. Por que en JavaScript todo es un objeto

## Que es el entorno de ejecucion? (Explicacion detallada mas abajo)
Es el lugar donde corre JavaScript! Puede ser tanto en el navegador como en Node.js


En JavaScript, los objetos globales son aquellos que estas disponibles en todo el entorno de ejecucion, sin necesidad de importarlos o declararlos explicitamente.

Los objetos globales varian depende del entorno de ejecucion (sea el navegador o Node.js), pero su proposito es facilitar el acceso a ciertas funciones y valores predeterminados.


======================================
    Objetos globales en el navegador 
======================================

    En el entorno del navegador, los objetos globales incluyen todos los objetos estandar de JavaScript (Array, String, Object), asi como un conjunto de objetos especificos para la interaccion con la pagina web y su entorno.
    
    ////////////////
    // window
    
    El objeto global principal en el entorno del navegador es window.
    Representa toda la ventana del navegador y actua como el contenedor global para todas las variables, funciones y objetos globales en una pagina web.
    Todos los objetos, variables y funciones definidos en el ambito global estan automaticamente disponibles como propiedades del objeto window.

    Objetos y Metodos importantes del objeto window:

    * document: Representa el DOM de la pagina web actual permitiendo el acceso y la manipulacion de elementos HTML
        document.getElementById("nombreId");
    
    document lo trabajaremos mucho en JavaScript VI


    * alert(), prompt(), confirm(): Son metodos que permiten mostrar dialogos al usuario y recoger input


    * setTimeout() y setInterval(): Son metodos para programar la ejecucion de codigo despues de un tiempo con setTimeout o en intervalos regulares setInterval

        setTimeout(() => console.log("Holis a los 2 segundos"), 2000);


    * location: Proporciona informacion sobre la URL actual de la pagina y permite redireccionar a otras URL

        console.log(window.location.href); // URL actual
        

    * navigator: Contiene informacion sobre el navegador, como la version, agente de usuario, geolocalizacion, etc
        console.log(navigator.userAgent); // Info del navegador


    * console: Proporciona acceso a la consola del navegador para mostrar mensajes de depuracion



    ////////////////////////////
    // Otros objetos globales

    * localStorage y sessionStorage: Permiten almacenar datos en el navegador de manera persistente o temporal

        localStorage.setItem("nombre", "Ari");

    * history: Proporciona acceso al historia de navegacion del navegador

    * XMLHttpRequest: EN DESUSO, reemplazado por fetch() que veremos en JavaScript VII
        Es un objeto para realizar solicitudes HTTP asincronicas

*/

/*============================================
    localStorage / sessionStorage
==============================================

El almacenamiento persistente en JavaScript es una parte fundamental para crear aplicaciones web que puedan recordar info del usuario entre sesiones o durante la navegacion

sessionStorage y localStorage son mecanismos que nos proporciona el navegador para almacenar datos del lado del cliente, pero cada uno tiene un propósito distinto en términos de persistencia, capacidad y ámbito de acceso


/////////////////
// localStorage

localStorage es una API web (Veremos concretamente que son las API web en JS VII) que nos permite almacenar datos de manera persistente en el navegador.
Los datos almacenados en localStorage no tienen una fecha de expiracion, por loq ue estaran disponibles incluso despues de que el usuario cierre el navegador o apague la compu.

- Tamaño máximo: 5-10 MB por dominio
- Persistente
- Accesible solo desde JS (no se envía al servidor)


Usos tipicos, almacenar...
    - Configuraciones de usuario
    - Temas
    - Carrito de compras


/////////////////
// sessionStorage

Muy similar a localStorage, pero los datos solo se mantienen disponibles durante la sesion del navegeador.
Cuando cerramos la pestaña o la ventana del navegador, los datos se eliminan automaticamente

- Tamaño máximo: 5-10 MB por dominio
- Se borra al cerrar la pestaña
- Accesible solo desde JS (no se envía al servidor)


Usos tipicos, almacenar...
    - Guardar datos temporales mientras la pestaña está abierta
    - Información de formularios



///////////////////////////////////////
// Metodos de localStorage y sessionStorage

    1. Guardar datos:               localStorage.setItem(key, value)
    2. Leer datos:                  localStorage.getItem(key)
    3. Eliminar datos:              localStorage.removeItem(key)
    4. Eliminamos todos los datos:  localStorage.clear()



///////////////////////////////////////
// Cuando no usar local o sessionStorage?

- Nunca para informacion sensible como contraseñas o tokens de autenticacion
- No son seguras, ya que el contenido es accesible desde cualquier script en la pagina
*/

// Guardamos un nombre con la clave "nombre"
sessionStorage.setItem("nombre", "Ari");
console.log(sessionStorage.getItem("nombre")); // Ari

// Guardamos tema e idioma
localStorage.setItem("tema", "oscuro");
localStorage.setItem("idioma", "es");

// Eliminamos el item "nombre"
localStorage.removeItem("nombre");

// Eliminamos todo
// localStorage.clear()



/*==============================================
    Almacenamiento de datos en JavaScript
================================================

En JS, almacenar datos implica elegir la estructura adecuada de acuerdo con el tipo de informacion que se quiere guardar y como se desea manipular.

Tipos basicos para almacenar datos en JavaScript

    - Variables simples: Para valores unicos como numeros y strings

    - Objetos: Para representar datos complejos con propiedades
    
    - Arrays: Para almacenar una lista de elementos, IDEALMENTE del mismo tipo
    
    - Arrays de objetos: Para manejar listas de elementos complejos que contienen multiples propiedades

////////////
// Objetos

Un objeto en JS es una coleccion de propiedades, donde cada propiedad tiene un nombre clave (key) y un valor.

Los objetos son ideales para representar una unica entidad o elemento que tiene varias propiedades o atributos.

En el siguiente caso, alumno es un objeto que almacena varias propiedades de una persona.
Usamos este tipo de almacenamiento cuando queremos acceder a atributos especificos de una unica entidad.
Es muy util para representar conceptos unicos en la aplicacion, como UN usuario, UN producto en particular o UNA configuracion de un sistema.

Cuando usar objetos?
    - Cuando deseamos representar una entidad UNICA con multiples atributos
    - Cuando sabemos que no habra multiples instancias o copias de estos datos en la aplicacion
    - Cuando necesitamos acceder a propiedades especificas mediante sus nombres
*/
// Ejemplo de lo contraintuitivo que seria guardar info de este usuario en un array
let usuario = ["Gaston", 21, "Abogado"];

// Como estructurar la entidad alumno de forma intuitiva y ordenada
let alumno = {
    nombre: "Gaston",
    edad: 21,
    ocupacion: "Abogado"
}

/*//////////////////////////
// Array de objetos 

Almacenamiento de multiples elementos similares con Array de Objetos.

Si necesitamos almacenar varias instancias del mismo tipo de entidad (lista de personas, productos, pedidos, etc) es comun utilizar un array de objetos.

Un array de objetos es una estructura que permite almacenar multiples objetos, donde cada objeto tiene la misma estructura o contiene atributos similares

Cuando usar array de objetos?

    - Cuando necesitamos almacenar MULTIPLES instancias de una misma entidad o estructura de datos

    - Cuando planeamos realizar operaciones sobre una lista de elementos, como iteraciones, filtrados, agrupaciones, ble
    
    - Si necesitamos aplicar metodos de los arrays como map, filter, reduce, etc


Ejemplos de casos de uso

    - Listado de usuarios registrados en una plataforma
    - Inventario de productos en una tienda
    - Historial de transacciones o registros
*/
// Gracias al array de objetos, almacenamos multiples elementos, cada uno representando una persona con sus propiedades
let listaAlumnos = [
    { nombre: "Gaston", edad: 21, ocupacion: "Avogado" },
    { nombre: "Daiana", edad: 25, ocupacion: "Costurera" },
    { nombre: "Matias", edad: 28, ocupacion: "Personal no docente" },
    { nombre: "Rocio", edad: 32, ocupacion: "Profesora de gallego" },
    { nombre: "Manuel", edad: 36, ocupacion: "Chef" },
];


/*===============================
    Cual estructura elegimos?
=================================

La decision de cual estructura utilizar depende de las necesidades del proyecto y el tipo de manipulacion de datos que deseamos realizar

Usaremos un objeto simple
    - Si solo tenemos una entidad (configuracion de usuario)
    - Un unico elemento que contiene datos con varias propiedades
    - Acceder a propiedades individuales de un objeto es rapido y sencillo


Usaremos un array simple
    - Para una lista ordenada de elementos individuales (lista de nombres o identificadores), donde cada elemento no require atributos adicionales
    - En este caso un array simple (de valores primitivos) es suficiente


Usaremos un array de objetos
    - Cuando tenemos una lista de enetidades complejas, cada una con multiples propiedades
    - Esta configuracion permite realizar operaciones en lote y mantener una coleccion de elementos de forma organizada
*/



/*========================================================
    Iteracion en arrays, objetos y arrays de objetos
==========================================================

/////////////////////
// Metodos clasicos (ES5 y anteriores)

////////////////
// for clasico

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

- Ventajas: Maximo control, podemos usar break y continue
- Desventajas: Mas verboso, propenso a errores de off-by-one
*/

// Ejemplo 1: Sumar elementos
const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log(suma);

// Ejemplo 2: Buscar elemento
const frutas = ["manzana", "banana", "naranja"];
let frutaEncontrada;

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].startsWith("ban")) {
        frutaEncontrada = frutas[i];
        break;
    }
}

console.log(frutaEncontrada);


// Ejemplo 3: Filtrar objetos
const productos = [
    { id: 1, nombre: "Laptop", precio: 500000 },
    { id: 2, nombre: "Mouse", precio: 20000 },
    { id: 3, nombre: "Teclado", precio: 40000 },
];

const productosCaros = [];

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > 30000) {
        productosCaros.push(productos[i]);
    }
}

console.log(productosCaros);


/*//////////////
// forEach()

    array.forEach((elemento, indice, arrayOriginal) => {
        console.log(elemento, indice)
    })

- Ventajas: Sintaxis limpia, no necesitamos contador
- Desventajas: No podemos romper el bucle (no break)
*/

// Ejemplo 1: Imprimir elementos
frutas.forEach(fruta => console.log(fruta));

// Imprimimos elemento e indice
frutas.forEach( (fruta, indice) => {
    console.log(`Indice: ${indice} / Fruta: ${fruta}`)
});


// Ejemplo 2: Modificar array externo
const arrayNums = [1, 2, 3];
const arrayDobles = [];

arrayNums.forEach(num => arrayDobles.push(num * 2));
console.log(arrayDobles); // [2, 4, 6]


// Ejemplo 3: Actualizar propiedades
const estudiantes = [
    { nombre: "Nicolas", nota: 6 },
    { nombre: "Daira", nota: 7 },
    { nombre: "Juan", nota: 4 },
    { nombre: "Gabriel", nota: 10 },
    { nombre: "Gaston", nota: 8 },
];

// llamamos estudiante a cada elemento de la iteracion
estudiantes.forEach(estudiante => {
    estudiante.aprobado = estudiante.nota > 6;
});

console.log(estudiantes);



/*////////////////////
// Metodos funcionales (ES5+)

///////////////
// map()

    const nuevosValores = array.map(elemento => elemento * 2);

- Proposito: Transformar cada elemento
- Retorna: Nuevo array con los resultados
*/

// Ejemplo 1: Crear array de cuadrados
// const arrayNums = [1, 2, 3];

// Directamente escribimos el nuevo array en el que vamos a guardar los nuevos valores
const cuadrados = arrayNums.map(num => num * num);
console.log(cuadrados); // [1, 4, 9]


// Ejemplo 2: Convertir a string
const edades = [48, 35, 20, 27];
const edadesString = edades.map(edad => `Tengo ${edad} años`);
console.log(edadesString); // ['Tengo 48 años', 'Tengo 35 años', 'Tengo 20 años', 'Tengo 27 años']


/* Ejemplo 3: Extraer propiedades

const estudiantes = [
    { nombre: "Nicolas", nota: 6 },
    { nombre: "Daira", nota: 7 },
    { nombre: "Juan", nota: 4 },
    { nombre: "Gabriel", nota: 10 },
    { nombre: "Gaston", nota: 8 },
];
*/
const nombresEstudiantes = estudiantes.map(estudiante => estudiante.nombre);
console.log(nombresEstudiantes); // ['Nicolas', 'Daira', 'Juan', 'Gabriel', 'Gaston']


/*//////////////
// filter()

    const filtrados = array.filter(elemento => elemento > 10);

- Proposito: Seleccionar elementos que cumplan una condicion
- Retorna: Nuevo array con los elementos filtrados
*/

// Ejemplo 1: Filtrar numeros pares
const nums = [1, 2, 3, 4, 5, 6];
const numsPares = nums.filter(numero => numero % 2 === 0);
console.log(numsPares); // [2, 4, 6]


// Ejemplo 2: Filtrar strings largos (mayores a 4 caracteres)
const palabras = ["hola", "adios", "bienvenido", "oki"];
const palabrasLargas = palabras.filter(palabra => palabra.length > 4);
console.log(palabrasLargas); // ['adios', 'bienvenido']


/* Ejemplo 3: Filtrar por propiedad / Alumnos +30
let listaAlumnos = [
    { nombre: "Gaston", edad: 21, ocupacion: "Avogado" },
    { nombre: "Daiana", edad: 25, ocupacion: "Costurera" },
    { nombre: "Matias", edad: 28, ocupacion: "Personal no docente" },
    { nombre: "Rocio", edad: 32, ocupacion: "Profesora de gallego" },
    { nombre: "Manuel", edad: 36, ocupacion: "Chef" },
];
*/

const alumnosVHS = listaAlumnos.filter(alumno => alumno.edad >= 30);
console.log(alumnosVHS);


// Ejemplo 4: Filtrar multiples condiciones
const ordenes = [
    { id: 1, nombre: "Laptop", precio: 500000, cantidad: 1, completada: true },
    { id: 2, nombre: "Mouse", precio: 20000, cantidad: 3, completada: false },
    { id: 3, nombre: "Teclado", precio: 30000, cantidad: 2, completada: true },
    { id: 4, nombre: "Monitor", precio: 100000, cantidad: 4, completada: false },
    { id: 5, nombre: "RAM", precio: 150000, cantidad: 3, completada: true },
];

// Queremos filtrar las ordenes que esten completadas y sean mayores a 1 unidad

// NO necesariamente tenemos que escribir arrow functions, como podemos ver, podemos declarar una funcion adentro del filter. Las funciones flecha nos resultan mas comodas porque nos permiten hacerlas single line y por tanto prescindir de {} y return

const ordenesFiltradas1 = ordenes.filter(function(orden) {
    return orden.completada && orden.cantidad > 1
});
console.log(ordenesFiltradas1);

// Ejemplo con arrow function
const ordenesFiltradas2 = ordenes.filter(orden => orden.completada && orden.cantidad > 1);
console.log(ordenesFiltradas2);



/*//////////////
// find() y findIndex()

    const encontrado = array.find(elemento => elemento.id === 123);
    const indice = array.findIndex(elemento => elemento.id === 123);

- Proposito: Buscar el primer elemento que cumpla una condicion
- Retorna: Retorna el elemento find() o el indice findIndex()
- Si no lo encuentra puede devolver undefined o -1
*/

// Ejemplo 1: Buscar numero > 10
const numerosRandom = [5, 12, 8, 130, 44];
const numeroEncontrado = numerosRandom.find(numero => numero > 10);
console.log(numeroEncontrado); // 12

// Ejemplo 2: Buscar indice del primer elemento > 100
const numeroMas100 = numerosRandom.findIndex(numero => numero > 100);
console.log(numeroMas100); // 3

// Ejemplo 3: Buscar alumnos activos
let usuariosConectados = [
    { nombre: "Gaston", edad: 21, ocupacion: "Avogado", activo: true },
    { nombre: "Daiana", edad: 25, ocupacion: "Costurera", activo: false },
    { nombre: "Matias", edad: 28, ocupacion: "Personal no docente", activo: true },
    { nombre: "Rocio", edad: 32, ocupacion: "Profesora de gallego", activo: false },
    { nombre: "Manuel", edad: 36, ocupacion: "Chef", activo: true },
];

const usuarioActivo = usuariosConectados.find(usuario => usuario.activo);
console.log(usuarioActivo); // {nombre: 'Gaston', edad: 21, ocupacion: 'Avogado', activo: true}



/*//////////////
// reduce()

    const suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0)

- Proposito: Reduce el array a un unico valor
- Retorna: Retorna el valor acumulado
*/

// Ejemplo 1: Sumar elementos
const decenas = [10, 20, 30];
const resultadoDecenas = decenas.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(resultadoDecenas); // 60

/*
    - El 0 al final es el valor inicial del acumulador
    - Sin valor inicial, tomaria el primer elemento como acumulador inicial
*/


// Ejemplo 2: Sumar propiedades, sumaremos el valor de las ventas (cantidad x precio)
const ventas = [
    { producto: "Camisa", cantidad: 3, precio: 25 },
    { producto: "Zapatos", cantidad: 2, precio: 40 },
    { producto: "Pantalon", cantidad: 1, precio: 80 },
];

// Si no indicamos el valor inicial acá, hará una concatenación errónea [object Object]8080 
// El 0 nos permite entender cual va a ser el valor y el TIPO inicial del acumulador

// Opcion 1: Funcion flecha en una sola linea, tal vez un poco complicada y larga de leer
//const acumuladoVentas = ventas.reduce((acumulador, p) => acumulador + (p.cantidad * p.precio), 0);

// Opcion 2: La misma funcion flecha pero con {} y return para separar mas la logica y facilitar la lectura
const acumuladoVentas = ventas.reduce((acumulador, p) => {
    return acumulador + (p.cantidad * p.precio)
}, 0);
console.log(acumuladoVentas);



/*///////////////////
// Metodos modernos (ES6+)

///////////////
// for...of

    for (const elemento of array) {
        console.log(elemento);

        if (elemento === "stop") break; // Podemos usar break!
    }

- Ventaja: Sintaxis limpia y permite break/continue
- Desventajas: No provee indice automatico
*/

// Ejemplo 1: Iterando con posibilidad de break
const simbolos = ["€", "$", "¥", "£"];

for (const simbolo of simbolos) {
    // Ejemplo de que podemos prescindir de las {} en una sola instruccion. NO recomendado!
    if (simbolo === "¥") break; 
    console.log(simbolo);
}

// Ejemplo 2: Iterar objetos, buscaremos (al primer) empleado que gane > 3500
const empleados = [
    { nombre: "Santiago", salario: 3000 },
    { nombre: "Nicolas", salario: 3500 },
    { nombre: "Juan", salario: 4000 },
    { nombre: "Juansen", salario: 4500 },
    { nombre: "Nahuel", salario: 2000 },
];

for (const empleado of empleados) {
    if (empleado.salario > 3500) {
        console.log(`${empleado.nombre} gana mas de 3500`);
        break;
    }
}


/*///////////////////
// Metodos de comprobacion
 
    some()
    every()

    const algunoCumple = array.some(elemento => elemento > 0);
    const todosCumplen = array.every(elemento => elemento > 0);

- Proposito: Verificar si alguno/todos cumplen una condicion
- Retorna: Booleano
*/

// some()
// Ejemplo 1: Verificar si hay numeros pares
const listaNumeros = [1, 3, 5, 7, 8];
const hayPares = listaNumeros.some(num => num % 2 === 0);
console.log(hayPares); // true

// Ejemplo 2: Verificar si hay usuarios admin
const usuariosForo = [
    { nombre: "Xoana", rol: "user" },
    { nombre: "Uxia", rol: "admin" },
    { nombre: "Rixela", rol: "user" },
];

const hayAdmin = usuariosForo.some(user => user.rol === "admin");
console.log(hayAdmin); // true


// every()
// Ejemplo 1: verificar si todos son positivos
const todosPositivos = listaNumeros.every(num => num > 0);
console.log(todosPositivos); // true


/* Ejemplo 2: Verificar si todos sacaron > 7
    const estudiantes = [
        { nombre: "Nicolas", nota: 6 },
        { nombre: "Daira", nota: 7 },
        { nombre: "Juan", nota: 4 },
        { nombre: "Gabriel", nota: 10 },
        { nombre: "Gaston", nota: 8 },
    ];
*/
const todosNotables = estudiantes.every(estudiante => estudiante.nota > 7);
console.log(todosNotables); // false


/*===============================  
    Comparacion de rendimiento
=================================

1. Bucles clasicos: (for, while) son los mas rapidos para iteraciones simples
2. Metodos funcionales: (map, filter, etc) son mas lentos pero mas expresivos
3. for...of ofrece un buen equilibrioo entre rendimiento y legibilidad


============================
    Recomendaciones
============================

- Transformar array:        map()
- Filtrar elementos:        filter()
- Reducir a 1 valor:        reduce()
- Buscar elemento:          find() y findIndex()
- Iterar:                   forEach() o for...of
- Iterar break/continue:    for o for...of
- Verificar condiciones:    some() y every()
*/


/*===========================
    Iteracion en Objetos
=============================

    for...in
    entries()
    keys()
    values()

Objetos como una coleccion de pares clave valor
Estos metodos nos permiten acceder a propiedades y modificar valores
*/

// for...in para iterar claves
const estudiante = { nombre: "Francisco", edad: 36, curso: "Progra III" };

for (const propiedad in estudiante) {
    console.log(`${propiedad}: ${estudiante[propiedad]}`)
}

// Object.keys() para obtener claves
const claves = Object.keys(estudiante);
console.log(claves); // ['nombre', 'edad', 'curso']

claves.forEach(clave => console.log(clave));


// Object.values() para obtener valores
const valores = Object.values(estudiante);
console.log(valores);


// Object.entries() para obtener pares clave-valor
for (const [clave, valor] of Object.entries(estudiante)) {
    console.log(`${clave}: ${valor}`);
}
```



---


### *Como ejecuta las instrucciones JavaScript internamente?*
**JavaScript internamente “lee” el código antes de ejecutarlo**, realizando un proceso en dos fases:

**1. Fase de compilación** (o creación del contexto)

Antes de ejecutar línea por línea, el motor de JavaScript analiza todo el código. En esta etapa:

- Registra variables y funciones.
- Determina el alcance (scope).
- Prepara el entorno de ejecución.

**2. Fase de ejecución**

Recién después ejecuta el código en orden.


---


### Por que en JavaScript todo es un objeto?
En JavaScript, **tanto los objetos como las funciones** se tratan como "ciudadanos de primera clase", lo que significa que **pueden ser asignados a variables pasados como argumentos y ser retornados por otras funciones**.

Aunque no todos los tipos de datos en JS son objetos, muchos tipos de datos tienen comportamiento de objeto o estan envueltos en un objeto:

1. *Datos primitivos*: strings, numeros, booleanos null y undefined. Strings y numeros son "envolturas" de objetos.

2. *Funciones*: En JavaScript las funciones son en realidad objetos de tipo `Function`. Lo que permite asignarlas a variables o pasarlas como argumentos.

3. *Arrays*: Los arrays son tambien objetos en JavaScript, pero un tipo particular de objeto. Un objeto que organiza sus datos mediante indices numerados.

4. *Objetos globales*: Todo el entorno de ejecucion esta basado en objeto globales. `window` en el navegador o `global` en Node.js.


---


### Que es el entorno de ejecucion en JavaScript?
**El entorno de ejecución en JavaScript** es el conjunto de mecanismos que permiten la ejecución del código, compuesto por un motor (que incluye el compilador y el motor de ejecución), un bucle de eventos, timers y librerías de APIs específicas del entorno. Los entornos más comunes son el **navegador web** (cliente) y **Node.js** (servidor), aunque existen alternativas como **Deno** o **Bun**.

### Componentes y Tipos de Entorno
*   **Motor de JavaScript**: Responsable de analizar, compilar y ejecutar el código. En navegadores se usan motores como V8 (Chrome), SpiderMonkey (Firefox) o JavaScriptCore (Safari); en Node.js se utiliza V8.
*   **Navegador Web**: Ofrece APIs del DOM y del navegador (como `document` o `window`). El código se ejecuta dentro de pestañas independientes para garantizar la seguridad.
*   **Node.js**: Permite ejecutar JavaScript fuera del navegador, utilizando el sistema operativo y APIs de servidor. El objeto global es `global` (equivalente a `window` en el navegador).
*   **Compatibilidad**: Si el código no depende de APIs específicas del navegador o del sistema operativo, puede ejecutarse indistintamente en ambos entornos.

---

### Contexto de Ejecución
Dentro de este entorno, el código se gestiona mediante el **Contexto de Ejecución** (Execution Context), que define el entorno léxico, las variables disponibles y el valor de `this`.

1.  **Contexto Global**: Se crea al iniciar el script. Contiene variables y funciones declaradas fuera de bloques.
2.  **Contexto de Función**: Se crea cada vez que se invoca una función, permitiendo el aislamiento de variables locales.
3.  **Fases**: Cada contexto pasa por una **fase de creación** (donde ocurre el *hoisting* y se establecen los ámbitos) y una **fase de ejecución** (donde el código se procesa línea por línea).

La gestión de estos contextos se realiza mediante una **pila de ejecución** (call stack), una estructura LIFO que determina el orden en que se ejecutan las funciones, asegurando que solo una operación se procese a la vez en el hilo principal.


---


## JavaScript IV / Introduccion a arrays, metodos de strings y arrays
```js
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



/*=============================
    Metodos de array en JS
===============================
Los metodos que nos provee JavaScript nos permiten modificar, recorrer, filtrar y trasformar arrays
*/
let arr = [1, 2];

// 1. length: Devuelve la longitud del array
console.log(arr.length); // 2

//////////////////////////////
// Operar al final del array

// 2. push(element): Agrega un elemento AL FINAL del array
arr.push(3);
console.log(arr); // [1, 2, 3]


// 3. pop(): Elimina el ULTIMO elemento y lo devuelve
console.log(arr.pop()); // 3
console.log(arr); // [1, 2]


//////////////////////////////////
// Operar al principio del array

// 4. unshift(element): Agrega un elemento AL PRINCIPIO del array
arr.unshift(0); 
console.log(arr); // [0, 1, 2]

// 5. shift(): Elimina el PRIMER elemento y lo devuelve
console.log(arr.shift()); // 0
console.log(arr); // [1, 2]


// 6. concat(array): Concatena arrays
console.log([1, 2].concat([3, 4])); // [1, 2, 3, 4]


// 7. join(separator): Une los elementos en un string
console.log([1, 2, 3].join(" ")); // 1 2 3
console.log([1, 2, 3].join(",")); // 1,2,3


// 8. slice(start, end): Extrae una copia parcial del array
console.log([1, 2, 3, 4].slice(1, 3)); // [2, 3] (la posicion 3 no se incluye)


// 9. splice(start, deleteCount, ...items): modifica el array in situ. Puede borrar y agregar
let nuevoArr = [1, 2, 3];
// En la posicion 1, modificamos 1 caracter, lo reemplazamos por "a"
nuevoArr.splice(1, 1, "a");
console.log(nuevoArr); // [1, "a", 3]


// 10. indexOf(element): Devuelve la PRIMERA POSICION del elemento (si no existe, devuelve -1)
console.log([1, 2, 3].indexOf(2)); // 1


// 11. lastIndexOf(element): Devuelve la ULTIMA posicion en el array


// 12. includes(element): Devuelve true si el elemento existe
console.log([1, 2, 3].includes(2)); // true


// Proximos metodos en JavaScript V
```


---


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