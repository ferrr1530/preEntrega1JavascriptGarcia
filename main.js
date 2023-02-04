class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1; 
    }
}

const assassinsCreed = new Producto(1, "Assassins Creed-The ezio collection", 10000, "img/Assassins creed-The ezio collection.jfif");
const callOfDuty = new Producto(2, "Call of duty-Black ops", 5050, "img/Call of duty-Black ops.jfif");
const daysGone = new Producto(3, "Days gone", 8500, "img/Days gone.jfif");
const doomEternal = new Producto(4, "Doom eternal", 6500, "img/Doom eternal.jfif");
const farCry5 = new Producto(5, "Far cry 5", 5000, "img/Farcry5.jfif");
const godOfWar = new Producto(6, "God of war-Ragnarok", 7500, "img/God of war-Ragnarok.jfif");
const mortalKombat11 = new Producto(7, "Mortal Kombat 11", 9000, "img/Mortal kombat 11.jfif");
const theLastOfUs = new Producto(8, "The last of us-Parte 2", 12000, "img/The last of us-Part 2.jfif");

const productos = [assassinsCreed, callOfDuty, daysGone, doomEternal, farCry5, godOfWar, mortalKombat11, theLastOfUs];

let carrito = []; 

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorProductos = document.getElementById("contenedorProductos");

const mostrarProductos = () => {
    productos.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                    <div class= "card-body">
                        <h5>${producto.nombre}</h5>
                        <p> ${producto.precio} </p>
                        <button class="btn colorBoton" id="boton${producto.id}" > Agregar al Carrito </button>
                    </div>
                </div>
                        `
        contenedorProductos.appendChild(card);

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}

mostrarProductos();

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
 
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
}

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";

carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                    <div class= "card-body">
                        <h5>${producto.nombre}</h5>
                        <p> ${producto.precio} </p>
                        <p> ${producto.cantidad} </p>
                        <button class="btn colorBoton" id="eliminar${producto.id}" > Eliminar Producto </button>
                    </div>
                </div>
                        `
        contenedorCarrito.appendChild(card);

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })

    })
    calcularTotal();
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})
const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    localStorage.clear();
}

const comprarProductos = document.getElementById("comprarProductos")
comprarProductos.addEventListener("click", () => {
    Swal.fire({
        title:"Su compra ha sido realizada",
        text:"Gracias por su compra!!! 😁",
        icon:"success",
        imageUrl:"https://fotografias.flooxernow.com/clipping/cmsimages02/2022/12/20/390C1D91-69A4-4B94-B4D7-B7A3C732E3C1/esta-foto-record-messi-pero-tambien-mola_98.jpg?crop=1920,1080,x0,y131&width=1900&height=1069&optimize=high&format=webply",
        confirmButtonText:"Aceptar",
    })
})

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}

const criptoYa = "https://criptoya.com/api/dolar";

const precioDolar = document.getElementById("precioDolar");

setInterval( () => {
    fetch(criptoYa)
     .then ( response => response.json())
     .then (({blue, ccb, ccl, mep, oficial, solidario}) =>{
        precioDolar.innerHTML = `
        <h4>Tipos de dolar</h4>
        <p>Dolar Oficial: ${oficial} </p>
        <p>Dolar Solidario: ${solidario} </p>
        <p>Dolar MEP: ${mep} </p>
        <p>Dolar CCL: ${ccl} </p>
        <p>Dolar CCB: ${ccb} </p>
        <p>Dolar Blue: ${blue} </p>
        `
     })
     .catch(error => console.error(error))
},5000)