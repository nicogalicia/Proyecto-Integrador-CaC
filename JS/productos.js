// Limpiamos el localStorage
localStorage.clear();


// Lista de productos a mostrar
// Array formato JSON 

const productos = [
    {
        id: 1,
        nombre: "Computadora Intel I3",
        img: "../imagenes/Pc1.jpg",
        precio: 100,
        descripcion: "Pc Intel I3",
        stock: 10
    },
    {
        id: 2,
        nombre: "Computadora Intel I5",
        img: "../imagenes/Pc2.jpg",
        precio: 150,
        descripcion: "Pc Intel I5",
        stock: 10  
    },
    {
        id: 3,
        nombre: "Impresora Canon",
        img: "../imagenes/canon.jpg",
        precio: 100,
        descripcion: "Impresora a color multifunción Canon Pixma G3110 con wifi negra 110V/220V",
        stock: 10
    },
    {
        id: 4,
        nombre: "Impresora HP",
        img: "../imagenes/hp.jpg",
        precio: 100,
        descripcion: "Impresora a color multifunción HP Deskjet Ink Advantage 2775 con wifi blanca 100V/240V",
        stock: 10
    },
    {
        id: 5,
        nombre: "Computadora Intel I3",
        img: "../imagenes/Pc1.jpg",
        precio: 100,
        descripcion: "Pc Intel I3",
        stock: 10
    },
    {
        id: 6,
        nombre: "Computadora Intel I5",
        img: "../imagenes/Pc2.jpg",
        precio: 150,
        descripcion: "Pc Intel I5",
        stock: 10  
    },
    {
        id: 7,
        nombre: "Impresora Canon",
        img: "../imagenes/canon.jpg",
        precio: 100,
        descripcion: "Impresora a color multifunción Canon Pixma G3110 con wifi negra 110V/220V",
        stock: 10
    },
    {
        id: 8,
        nombre: "Impresora HP",
        img: "../imagenes/hp.jpg",
        precio: 100,
        descripcion: "Impresora a color multifunción HP Deskjet Ink Advantage 2775 con wifi blanca 100V/240V",
        stock: 10
    }
];

// Convertimos el array de objetos en un formato tipo JSON
const productosEnStorage = JSON.stringify(productos);

// Guardamos en el localstorage el array JSON convertido de productos en String
localStorage.setItem("productos", productosEnStorage);


let productosObtenidosDelStorage = JSON.parse(localStorage.getItem("productos"));

// Creamos un array (carrito)
carrito = [];

const generarcards =(productos) => {
    // obtenemos el div que contendra las cards de productos
    let cards =document.getElementById("products");
    
    
    let total = 0;
    
   

// recorremos todo el array productos 
productos.forEach(producto => {

    total += producto.precio;

    //creamos etiqueta card
    let cardProductos =document.createElement("div");
    cardProductos.className ="card-deck" ;
    cardProductos.style= "width: 20rem";

    //creamos una plantilla que es un string
    let card = `        
            <div class="card-body">
                <h4 class="card-text">${producto.nombre}</h4>
            </div>
                <img src="${producto.img}" alt="Card image" width="200px" height="100px">
            <div class="card-body">
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">Precio $ ${producto.precio}</p>
            </div>
            <a class="btn btn-primary"  id="cart${producto.id}">Agregar al Carrito </a>       
    `;
    // escribimos la plantilla card de ` en la etiqueta div que creamos
    cardProductos.innerHTML = card;

    // agregamos hijo a padre
    cards.appendChild(cardProductos);
    
    //tomamos el id del elemento que está siendo procesado
    let productCard = document.getElementById("cart" + producto.id);

    productCard.addEventListener("click", (evento) =>{
        evento.preventDefault();
        //agregamos producto al carrito
        carrito.push(producto);
    });
    
});
    localStorage.setItem("precioTotal", total);

}

// capturamos boton finalizar compra y enviamos lo del array carrito al LS
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    localStorage.setItem("Carrito", JSON.stringify(carrito));
    window.location.href ="../html/Carrito.html";
});


// llamo funcion para generar productos
 generarcards(productos);


 