let listaCarrito = [];
let listaCarritoEliminados = [];

//Funcion inicializar

function inicializar()
{
    imprimirDatosAlumno();
    agregarBotones();
    listaCarrito = obtenerProductosLocalStorage("listaCarrito");
    if(listaCarrito.length > 0)    {
        renderizarCarrito();
    }
}


//Punto 1: Creacion de array de frutas
const frutasInicial = 
[
    {id: 1, nombre: "Anana", precio: 80, ruta: "./img/anana.jpg"},
    {id: 2, nombre: "Arandano", precio: 100, ruta: "./img/arandano.jpg"},
    {id: 3, nombre: "Banana", precio: 120, ruta: "./img/banana.jpg"},
    {id: 4, nombre: "Frambuesa", precio: 150, ruta: "./img/frambuesa.png"},
    {id: 5, nombre: "Frutilla", precio: 180, ruta: "./img/frutilla.jpg"},
    {id: 6, nombre: "Kiwi", precio: 90, ruta: "./img/kiwi.jpg"},
    {id: 7, nombre: "Mandarina", precio: 70, ruta: "./img/mandarina.jpg"},
    {id: 8, nombre: "Manzana", precio: 100, ruta: "./img/manzana.jpg"},
    {id: 9, nombre: "Naranja", precio: 80, ruta: "./img/naranja.jpg"},
    {id: 10, nombre: "Pera", precio: 130, ruta: "./img/pera.jpg"},
    {id: 11, nombre: "Pomelo Amarillo", precio: 140, ruta: "./img/pomelo-amarillo.jpg"},
    {id: 12, nombre: "Pomelo Rojo", precio: 120, ruta: "./img/pomelo-rojo.jpg"},
    {id: 13, nombre: "Sandia", precio: 100, ruta: "./img/sandia.jpg"},
]

//Punto 2: Datos Alumnos
const alumno = {
    Dni: "35394776",
    Nombre: "Nicolás David",
    Apellido: "Gil"
};

function imprimirDatosAlumno()
{   
    console.log( `Nombre Alumno: ${alumno.Nombre}, ${alumno.Apellido}. Dni: ${alumno.Dni}`);
    const nombreAlumno = document.querySelector(".nombreAlumno");
    nombreAlumno.innerHTML = `<span>Alumno:</span> ${alumno.Nombre} ${alumno.Apellido}. <span>Dni:</span> ${alumno.Dni}`;
}

//Punto 3: Mostrar frutas y Punto 4: filtro(los hice juntos para simplificar)
function imprimirFrutas()
{
    if(!frutasInicial){return;}
    const patron = document
        .querySelector(".barra-busqueda")
        .value
        .toLowerCase();

    const listaFrutas = frutasInicial.filter(f =>
        f.nombre.toLowerCase().includes(patron)
    );
    const contenedorFrutas = document.querySelector(".contenedor-productos");
    contenedorFrutas.innerHTML = "";
    listaFrutas.forEach(prod => {
        contenedorFrutas.innerHTML += `
            <div class="card-producto">
            <img class="imagen-fruta" src="${prod.ruta}" alt="Imagen ${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>$${prod.precio}</p>
            <button class="btn-agregarCarrito" onclick="agregarCarrito(${prod.id})">Agregar al carrito</button>
            </div>
        `
    });
}

// Ejercicio 5 _____________
// 1. Implementar la funcionalidad de carrito, esta debe estar asociada al boton de cada elemento del carrito. El carrito debe
// mostrarse por console.log()
// 2. Incorporar la funcion mostrarCarrito() asociada al boton de cada elemento del carrito El HTML generado debe seguir
// esta estructura:
// <li class="bloque-item">
// <p class="nombre-item">nombreProducto - precioProducto</p>
// <button class="boton-eliminar">Eliminar</button>
// </li>
// 3. Incorporar la funcion eliminarProducto() . Este debe estar asociado al boton del carrito


function agregarCarrito(id)
{
    if(!id){return;}
    const fruta = frutasInicial.find(f=> f.id === id);
    if(!fruta){return;}
    const frutaExistente = listaCarrito.find(f=> f.id === id);
    if(frutaExistente)
    {
        frutaExistente.cantidad++;
    }else
    {
        listaCarrito.push({
            ...fruta,
            cantidad: 1
        });
    }
    mostrarSnackbar(`${fruta.nombre} agregado al carrito`);
    renderizarCarrito();
}

function renderizarCarrito()
{
    if(!listaCarrito)
    {
        document.getElementById("precio-total").innerHTML = "0.00";
        return;
    }
    let totalCarrito = 0;
    const secCarrito = document.querySelector(".lista-carrito");
    secCarrito.innerHTML = "";
    listaCarrito.forEach(f => {
        secCarrito.innerHTML += `
            <li class="bloque-item">
                <p class="nombre-item">${f.nombre} - $${f.precio} - Cantidad: ${f.cantidad}</p>
                <button class="boton-eliminar" onclick="eliminarProducto(${f.id})">-</button>
                <button class="boton-sumar" onclick="sumarProducto(${f.id})">+</button>
            </li>
        `;
        totalCarrito += f.precio * f.cantidad;
    });
    console.log("total:", totalCarrito);
    document.getElementById("precio-total").innerHTML = `$ ${totalCarrito.toFixed(2)}`;
    let pCarrito = document.getElementById("mensaje-carrito");
    pCarrito.hidden = listaCarrito.length > 0 ? true : false;
    document.getElementById("contador-carrito").innerHTML = listaCarrito.reduce((acc, f) => acc + f.cantidad, 0);
    guardarProductosLocalStorage(listaCarrito);
}

function eliminarProducto(id)
{
    if(!id){return;}
    const fruta = listaCarrito.find(f=> f.id === id);
    if(!fruta){return;}
    
    if(fruta.cantidad > 1)
    {
        fruta.cantidad--;
    }else
    {
        listaCarritoEliminados.push(fruta);
        listaCarrito = listaCarrito.filter(f => f.id !== id);
    }    
    mostrarSnackbar(`${fruta.nombre} eliminado del carrito`);
    renderizarCarrito();
}

// Ejercicio 6 _____________
// • Almacena los productos del carrito en localStorage
// • Los productos en el localStorage deben estar además con los últimos cambios de carrito y los productos que se hayan
// eliminado del carrito
// • Si existen productos previamente en el localStorage , deben poder verse cuando se cargue la pagina

function obtenerProductosLocalStorage() {
    let productosLS = localStorage.getItem("listaCarrito");
    return productosLS ? JSON.parse(productosLS) : [];
}

function guardarProductosLocalStorage(lista) {
    localStorage.setItem("listaCarrito", JSON.stringify(lista));
}

function limpiarProductosLocalStorage(lista) {
    localStorage.removeItem("lista");
}


// Ejercicio 7 _____________
// • Implementa un contador de números de productos del carrito. Este contador debe estar almacenado en una variable
// • Implementa dos botones y un contador al lado de cada item en el carrito tipo + 2 - . Pulsando + agregamos 1 producto
// mas de ese tipo y pulsando - reducimos un producto, si este numero llega a 0 debe desaparecer ese item del carrito
// • Además, actualiza la cantidad de productos en el header, en la parte superior derecha en la parte de Carrito: 0 productos
// • Actualiza el precio del valor total del carrito abajo de todo a la derecha (cuando haya productos en el carrito)
// • Asegurate de que este valor se actualiza con cada cambio en el carrito y que se conserva cuando recargamos la pagina

function sumarProducto(id)
{
    if(!id){return;}
    const fruta = listaCarrito.find(f=> f.id === id);
    if(!fruta){return;}
    fruta.cantidad++;
    renderizarCarrito();
}


// Ejercicio 8 _____________
// • Crea cuatro botones junto al título de sección productos. Un boton que diga ordenar por nombre a-z , otro que diga ordenar
// por nombre z-a, otro que diga ordenar por menor precio y otro que diga ordenar por mayor precio
// • Implementa la funcionalidad para ordenar los productos en estos cuatro botones botones. Un boton debe ordenar por
// nombre en orden alfabetico, los productos, el otro a la inversa del orden alfabetico, el otro por precio de menor a mayor y el
// último de mayor a menor

function ordenarPorNombreAZ()
{
    frutasInicial.sort((a, b) => a.nombre.localeCompare(b.nombre));
    imprimirFrutas();
    reiniciarBotones();
    const botones = document.querySelectorAll(".btn-orden");
    botones[0].style.backgroundColor = "slateblue";
}

function ordenarPorNombreZA()
{
    frutasInicial.sort((a, b) => b.nombre.localeCompare(a.nombre));
    imprimirFrutas();
    reiniciarBotones();
    const botones = document.querySelectorAll(".btn-orden");
    botones[1].style.backgroundColor = "slateblue";
}

function ordenarPorMenorPrecio()
{
    frutasInicial.sort((a, b) => a.precio - b.precio);
    imprimirFrutas();
    reiniciarBotones();
    const botones = document.querySelectorAll(".btn-orden");
    botones[2].style.backgroundColor = "slateblue";
}

function ordenarPorMayorPrecio()
{
    frutasInicial.sort((a, b) => b.precio - a.precio);
    imprimirFrutas();
    reiniciarBotones();
    const botones = document.querySelectorAll(".btn-orden");s
    botones[3].style.backgroundColor = "slateblue";
}

function agregarBotones()
{
    const contenedorBotones = document.querySelector(".row-buttons");
    contenedorBotones.innerHTML = "";
    contenedorBotones.innerHTML = `
        <button class="btn-orden" onclick="ordenarPorNombreAZ()">Ordenar por nombre A-Z</button>
        <button class="btn-orden" onclick="ordenarPorNombreZA()">Ordenar por nombre Z-A</button>
        <button class="btn-orden" onclick="ordenarPorMenorPrecio()">Ordenar por menor precio</button>
        <button class="btn-orden" onclick="ordenarPorMayorPrecio()">Ordenar por mayor precio</button>
    `;
    imprimirFrutas();
    const carro = document.querySelector(".seccion-carrito");
    carro.innerHTML += `<button id="btn-vaciar" onclick="vaciarCarrito()">Vaciar carrito</button>`;
}   

function reiniciarBotones()
{
    const botones = document.querySelectorAll(".btn-orden");
    botones.forEach(btn => {
        btn.style.backgroundColor = "grey";
    });
}

// Ejercicio 9 _____________
// • Implementa la funcionalidad para Vaciar carrito. 
// Crea un botón en la sección carrito que vacíe todo el carrito
// • Si no hay productos en el carrito incluye alguna imagen o gif tipo carrito vacio con un texto que diga, no hay productos en el
// carrito

function vaciarCarrito()
{
    if(listaCarrito.length === 0)
    {
        mostrarSnackbar("El carrito ya está vacío");
        return;
    }
    listaCarritoEliminados.push(...listaCarrito);   
    listaCarrito = [];
    mostrarSnackbar("Carrito vaciado");
    renderizarCarrito();
}

function mostrarSnackbar(mensaje)
{
    const snackbar = document.getElementById("snackbar");

    snackbar.innerHTML = mensaje;
    snackbar.classList.add("mostrar");

    setTimeout(() => {
        snackbar.classList.remove("mostrar");
    }, 3000);
}