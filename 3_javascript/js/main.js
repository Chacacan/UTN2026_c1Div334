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



/*============================================
    Repaso almacenamiento persistente!
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

let pedidos = [
    { id: 1, nombre: "Hamburguesa", cantidad: 2},
    { id: 2, nombre: "Papas fritas", cantidad: 3},
    { id: 3, nombre: "Birra", cantidad: 5},
    { id: 4, nombre: "Alfajores", cantidad: 2},
];


/* Introduccion a JSON
Ojota! localStorage y sessionStorage SOLO almacenan texto plano!
Tenemos la necesidad de transformar toda nuestra informacion en un choclo de string

JSON es basicamente texto plano, eficiente, ligero, ordenado y que se convirtió en un standard a la hora de enviar y recibir informacion en internet

JSON toma la sintaxis de objetos de JavaScript -> JSON es JavaScript Object Notation
Toma su sintaxis pero es independiente del lenguaje

Ahora sabemos que para almacenar informacion, como un carrito de compras, necesitamos transformar nuestros datos a texto plano JSON.

Para eso JavaScript nos proporciona dos métodos

    - JSON.stringify() -> Este metodo convierte datos a texto plano JSON, listo para ser enviado o almacenado en localStorage

    - JSON.parse() -> Este metodo revierte la conversion de datos a texto plano. Basicamente convierte texto plano JSON a objetos o array de objetos en JavaScript
*/

// Ahora, con esta data, vamos a guardar estos pedidos, en el almacenamiento persistente que nos ofrece el navegador con localStorage

// Vamos a transformar nuestros pedidos a JSON
// Guardamos todo en una variable y lo almacenamos
console.log(pedidos); // Como nos muestra la consola el array de objetos

let pedidosJSON = JSON.stringify(pedidos);
console.log(pedidosJSON); // Como nos muestra la consola nuestro array de objetos convertido en un string JSON

// Opcion 1, mas comodo, guardamos la variable
localStorage.setItem("pedidos", pedidosJSON);

// Opcion 2, ya hacen la conversion cuando guardan
// localStorage.setItem("pedidos", JSON.stringify(pedidos))

// Ahora vamos a obtener del almacenamiento persistente -> localStorage el item personas
let personasJSON = localStorage.getItem("personas");
console.log(personasJSON); // Ahora estoy viendo el JSON pero necesito transformar este texto plano JSON a objetos JavaScript para poder manipular el array, acceder a sus propiedades, etc

// Transformamos el JSON en objetos JavaScript
let personasArray = JSON.parse(personasJSON);
console.log(personasArray);



personasArray.forEach(persona => console.log(`Nombre: ${persona.nombre}`));

// Vamos a transformar el JSON, ahora almacenado en nuestro navegador y lo vamos a convertir en objetos JS para poder iterarlos, guardarlos en una lista HTML e imprimirlos por pantalla

// En una sola linea, guardo en una variable mi JSON extraido de la memoria del navegador y convertido ya a objetos para poder manipularlos
let pedidosArray = JSON.parse(localStorage.getItem("pedidos"));
console.log(pedidosArray);

// Vamos a recorrer pedidosArray y a crear dinamicamente el HTML para renderizarlo en el contenedor <div id="contenedor-pedidos"></div>
let contenedorPedidos = document.getElementById("contenedor-pedidos");
// Ahora mi contendor ya esta almacenado en una variable, a la que mas adelante le dire contenedorPedidos.innerHTML = "<ul><li>hamburguesa</li><li>papas fritas</li><li>birra</li><li>Alfajores</li></ul>"

// Necesitamos ir armando un choclo HTML con todos los nombres de los pedidos como elementos de una lista
let pedidosHTML = "<ul>";

// Ahora vamos a crear HTML dinamico, vamos a llenar la lista con los nombres como elementos lista <li>nombrePedido1</li>
// Opcion 2: Iteramos con un for clasico
for (let i = 0; i < pedidosArray.length; i++) {
    // El operador += toma el valor anterior y le va sumando nuevos valores
    pedidosHTML += `<li>${pedidosArray[i].nombre}</li>`;
    // Vamos armando un chocho HTML en cada iteracion
}

pedidosHTML += "</ul>"; // Ahora cierro la lista que fui creando
console.log(pedidosHTML); 
/*
<ul><li>Hamburguesa</li><li>Papas fritas</li><li>Birra</li><li>Alfajores</li></ul>*/

/* Opcion 1: Iteramos con un forEach
// Queremos crear un contenedor <ul> y cada nombre del pedido sera un elemento <li>
let htmlPedidos = "<ul>";

// Recorremos el array con pedidosArray.forEach()
pedidosArray.forEach(pedido => {
    htmlPedidos += `<li>`
});
*/

// Ahora que armamos nuestra lista dinamica en JavaScript, tenemos que renderizar nuestro HTML en el contenedorPedidos
contenedorPedidos.innerHTML = pedidosHTML;