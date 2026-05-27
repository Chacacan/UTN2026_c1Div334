/*=========================================
    Asincronia en JavaScript
===========================================

(Repaso de procesos sincronos y asincronos en JavaScript VII)
La asincronia es la capacidad de un programa de ejecutar tareas que toman tiempo (acceder a una API o esperar un temporizador) SIN BLOQUEAR la ejecucion del resto del codigo

En JavaScript esto es clave porque es un lenguaje de de un solo hilo (single-threaded) lo que significa que solo puede ejecutar una tarea a la vez.
Por eso, para evitar que el hilo principal se bloquee, se introducen mecanismos asincronicos que permiten "deletgar" operaciones que tomaran tiempo y continuar ejecutando el resto del codigo mientras esas tareas se completan.

Herramientas de JavaScript para asincronia

=====================
    Callbacks
=====================
Funcion que se pasa como argumento para ejecutarse despues de completar una operacion. Flexible pero puede llevar a callback hell (anidamiento excesivo)



========================
     Promises 
========================
OBJETO que representa un valor que puede estar disponible ahora, mas adelante o nunca. Sus estados son:

    - pending (pendiente)
    - fulfilled (completado)
    - rejected (rechazado)


La asincronia es fundamental en JavaScript porque nos permite

    - Hacer llamadas a APIs externas
    - Acceder a archivos
    - Animaciones
    - Eventos de usuario
    - etc

No deben bloquear el flujo del programa.
*/

/*===================
    fetch
=====================

fetch() es una funcion incorporada (nativa) en los navegadores modernos que permite realizar peticiones HTTP (y HTTPS) de forma asincronica utilizando promesas

Forma parte de las Web APIs proporcionadas por el navegador (no es parte del lenguaje JavaScript)
Fue introducida como parte del Fetch API para reemplazar al viejo y complejo XMLHttpRequest

///////////////////////////
// Caracteristicas de fetch

    - Devuelve un objeto Promise que se resuelve con un objeto Response
    - Usa el estandar HTTP: Metodos como GET, POST, PUT, DELETE, etc
    - Funciona muy bien con asnyc/await
    - Es mas limpia y moderna que XMLHttpRequest
    - Soporta CORS, cabeceras (headers), envio de JSON y demas


///////////////////////////
// Sintaxis basica

    fetch(url, options)
        .then(response => {
            // Respuesta cruda del servidor    
        })
        .catch(error => {
            // Captura errores de red o fallo total (no hay internet o servidor caido)    
        })


Parametros:
    - url: string -> La URL a la que queremos hacer una solicitud
    - options: (opcional) -> Objeto que especifica configuracion adicional como metodo (method), cabeceras (headers), cuerpo (body), etc
*/

let contenedorUser = document.getElementById("contenedor-users");
let htmlUsuarios = "<ul>";

// Vamos a consumir los usuarios de la API Rest de prueba y a imprimirlos por pantalla

// Paso 1: Estamos realizando una solicitud HTTP a este servidor para obtener los recursos del siguiente link
fetch("https://jsonplaceholder.typicode.com/users") // Esta URL nos provee informacion de una BBDD en formato JSON

    // Paso 2: Concluida esta peticion HTTP, recibimos una respuesta cruda (no procesada) del servidor
    .then(response => {
        console.log(response); // Aca mostramos por consola la respuesta cruda

        // Aca filtramos si la respuesta fue exitosa -> Codigo 200 "OK"
        if(!response.ok) {
            throw new Error("Error HTTP", response.status);
        }

        return response.json(); // Aca parseamos el JSON, como es una operacion asincronica, continuamos en el .then siguiente
    })

    // Paso 3: Recibida la respuesta cruda y parseada la info que solicitamos
    .then(data => {
        // Aca recibo el JSON parseado (la informacion en texto plano JSON -> Objetos JavaScript con los que podemos interactuar)
        console.table(data)

        // Voy llenando mi nueva lista <ul> con elementos hijos <li> que contienen el apodo de los usuarios
        data.forEach(user => {
            htmlUsuarios += `<li>${user.username}</li>`
        });

        // Aca termino de llenar el choclo string con etiquetas HTML
        htmlUsuarios += "</ul>";
        console.log(htmlUsuarios)

        // Con el choclo html lleno (en formato string) paso a inyectarselo al HTML gracias a innerHTML
        contenedorUser.innerHTML = htmlUsuarios;

    })

    // Paso Opcional: Si hubiera algun error real de red (sin internet, servidor caido)
    .catch(error => console.error("Error al obtener los datos: ", error));


/* Ejemplo con opciones con POST para crear recursos

    fetch("http://api.ejemplo.com/posts", {
        method: "POST", // Crearemos un recurso
        headers: {
            "Content-Type": "application/json" // El server recibira un contenido JSON
        },
        body: JSON.stringify({ // Convertimos a JSON el siguiente objeto
            titulo: "Hola",
            contenido: "Este es un post"
        })
    })
        .then(respuesta => respuesta.json()) // Convertiremos a objetos JS la respuesta que nos de el servidor
        .then(data => console.log("Respuesta del servidor:", data)) // Por ejemplo "Post creado con exito"
        .catch(error => console.error("Error: ", error));

*/


/*==========================
    El objeto response
============================

La promesa que devuelve fetch() se resuelve con un objeto Response que tiene:

    - .ok -> booleano (true si el status esta entre 200 y 299)

    - .status -> Codigo HTTP (200, 404)

    - .statusText -> Texto del estado ("OK", "Not Found")

    - .headers -> Cabeceras HTTP de la respuesta

    - .json(), .text(), .blob(), .formData -> Para leer el contenido de la respuesta


Recordemos que fetch() solo rechaza la promesa en errores de red reales (sin internet, servidor caido)
No rechaza en codigos de error HTTP (404 o 500), por eso debemos revisar el response.ok



=========================================
    Casos de uso comunes de fetch
=========================================

    - Consumir APIs Rest (ej obtener datos de usuarios, productos, cotizaciones, info meteorologica)
    
    - Enviar formularios con POST
    
    - Cargar contenido dinamico en una SPA (Single Page Application) -> https://fullstackopen.com/en/part0/fundamentals_of_web_apps

    - Interacciones cliente-servidor en tiempo real con WebSockets


=========================================
    Resumen conceptual
=========================================

- Que es? fetch es una web api que permite hacer peticiones HTTP
- Que devuelve? Un objeto Promise
- Es sincronica? No, es asincronica
- Que reemplaza? Al obsoleto XMLHttpRequest
- Que recibe? Una url y un objeto options ocional
- Que devuelve? Un objeto Response con metodos para acceder al cuerpo
- Rechaza en error HTTP? No, solo en errores de red, por eso revisar el response.ok
*/




/*=========================================
    async/await en JavaScript
===========================================

async/await es "syntactic sugar" sobre las Promises (una forma mas sencilla de escribir promesas).
Introducida en ECMAScript 2017 (ES8) que permite escribir codigo asincrono con una sintaxis similar al codigo sincrono

El objeto es hacer el manejo de la asincronia mas legible, estructurado y facil de depurar

    - La palabra clave asnyc se usa para declarar una funcion asincronica, la cual siempre devuelve una promesa

    - La palabra clave await pausa la ejecucion de la funcion async hasta que una Promesa sea resuelta (fulfilled) o rechazada (rejected)



Que pasa internamente con await?
Cuando usamos await, JavaScript

    1. Evalua la expresion que devuelve una promesa
    2. SUSPENDE la ejecucion de la funcion hasta que la promesa se resuelva o rechace
    3. Si se resuelve, se continua con el valor
    4. Si se rechaza, lanza un error que puede ser atrapado por try...catch


Recordemos
    - await bloquea la ejecucion dentro de la funcion asnyc, NO bloquea el hilo principal
    - Las funciones asnyc siempre devuelven una Promesa
    - await tambien puede usarse con funciones que no devuelven promesas
*/


// Paso 1: Defino una funcion asincrona que hara una peticion HTTP a una API Rest para obtener datos en JSON
async function obtenerPosts() {
    
    // Paso 2: Manejo los errores en async/await con un bloque try...catch
    try {
        let contenedorPosts = document.getElementById("contenedor-posts");
        let htmlPosts = "<ul>";

        // Paso 3: Inicio una peticion HTTP a la url para obtener posts en JSON
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!response.ok) {
            throw new Error("Error HTTP", response.status);
        }
        
        console.log(response); // aca imprimo por consola la respuesta cruda del servidor
    
        // Paso 4: Parseo los datos en JSON que me trae response y cuando se parsee se guarda en la variable datos
        const datos = await response.json();
    
        console.log(datos);

        datos.forEach(post => {
            htmlPosts += `<li>${post.title}</li>`
        });

        htmlPosts += "</ul>";

        contenedorPosts.innerHTML = htmlPosts;

    } catch(error) {
        console.error("Error: ", error);
    }

}

obtenerPosts();



/*==========================
    .then vs async/await
============================

Como escribir nuestras promesas?

Ventajas del async/await    
    - Codigo mas legible y secuencial
    - Mejor manejo de errores con try/catch
    - Ideal para flujos largos y complejos de asincronia
*/

// Opcion 1: Encadenando promesas con .then
function obtenerAlbums() {
    fetch("https://jsonplaceholder.typicode.com/albums") // 1. peticion http
        .then(response => response.json()) // 2. parseo el json
        .then(data => console.log(data)) // 3. Imprimo por consola la informacion que solicité
        .catch(error => console.error(error));
}

// Opcion 2: Usando async/await
async function obtenerTodos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos"); // 1. peticion http
        const data = await response.json(); // 2. parseo el json
        console.log(data); // 3. Imprimo por consola la informacion que solicité
    } catch (error) {
        console.error(error);
    }
}



/*==========================
    try...catch en JS
============================

try...catch es una estructura de control utilizada para manejar errores que ocurren durante la ejecucion de bloques de codigo.
Esta tecnica forma parte del manejo de excepciones en JavaScript. 
Su objetivo es evitar que errores inesperados detengan la ejecucion del programa y en su lugar permitir maneajr dichos errores de forma controlada


////////////////////////////
// Que errores puede capturar?
try.. catch captura errores en tiempo de ejecucion (runtime) como:

    - Acceso a variables no definidas
    - Llamadas a funciones inexistentes
    - Errores lanzados con throw
    - Problemas en funciones como JSON.parse()
    - Ojota! NO captura errores de sintaxis, porque estos impiden que el codigo siquiera se ejecute


////////////////////////////
// Como funciona internamente?

    1. El bloque try se ejecuta normalmente

    2. Si ocurre un error dentro del try, se detiene inmediatamente la ejecucion y pasa al bloque catch

    3. El objeto de error (por convencion llamado "error" o "e") contiene informacion como:

        - .name -> tipo de error (TypeError, ReferenceError, etc)
        - .message -> Mensajje descriptivo
        - .stack -> pila de llamadas (stack trace)

    4. El bloque finally, si existe, siempre se ejecuta, ocurra o no un error




////////////////////////////
// throw: lanzar errores manualmente

Podemos lanzar nuestro propios errores con throw, util para validaciones o control de flujo



////////////////////////////
// por que no usar try...catch en exceso?

    - Puede ocultar errores reales si no se maneja correctamente
    - Tiene costo de rendimiento, especialmente en bucles
    - Es mejor usarlo en secciones donde hay riesgo real de error (I/O, parsing, red, etc)



////////////////////////////
// Buenas practicas

    - No atrapemos errores que no podemos manejar
    - Usemos try...catch solo donde esperamos errores (como parsear datos o hacer llamadas a APIs)
    - Usemos finally para cerrar recursos, limpiar o terminar tareas (conexiones, indicadores de carga, etc)
    - Siempre proporcionamos informacion util en el error (e.message)

*/

try {
    // Bloque de codigo que puede lanzar errores
    const resultado = 10 / 0;
    console.log(resultado); // Infinity
    throw new Error("Error personalizado")

} catch (error) {
    // Codigo para manejar el error
    console.error("Ocurrio un error: ", error.message); // main.js:311 Ocurrio un error:  Error personalizado

} finally { // OPCIONAL
    // Codigo que se ejecuta siempre con o sin error
    console.log("Esto se ejecuta siempre"); 
}