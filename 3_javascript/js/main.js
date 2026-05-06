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