# [JavaScript](https://es.wikipedia.org/wiki/JavaScript)

### LUNES 18 MAYO 1er PARCIAL
### MARTES 26 MAYO RECU 1er PARCIAL


## JavaScript VI / Manipulacion del DOM en JavaScript y Eventos
```js
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