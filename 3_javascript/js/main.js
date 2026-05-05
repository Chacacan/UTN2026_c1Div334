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