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
    Representa toda la ventana dle navegador y actua como el contenedor global para todas las variables, funciones y objetos globales en una pagina web.
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
    Metodos de localStorage / sessionStorage
==============================================

    1. Guardar datos:               localStorage.setItem(key, value)
    2. Leer datos:                  localStorage.getItem(key)
    3. Eliminar datos:              localStorage.removeItem(key)
    4. Eliminamos todos los datos:  localStorage.clear()
*/

localStorage.setItem("nombre", "Ari");

console.log(localStorage.getItem("nombre")); // Ari