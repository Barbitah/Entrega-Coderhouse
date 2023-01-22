// Array para subir al carro 
let carro = []


let contenedor = document.querySelector(".contenedorHome")




// funciones para LS
const enviarLs = (clave, valor) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}
const obtenerLocal = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}

//Funcion de orden superior para subir al carrito
const pushearArray = (array, value) => {
    array.push(value)
}
//Variables Globales
const carritoActualizado = obtenerLocal("carrito") || []


// Impimir cards de productos

const cardsAHtml = (array) => {
    const arrayReducido = array.reduce((acc, element) => {
        return acc + `
            <div class="card" id="card-${element.id}">
                <div class="card-img">
                    <img src=${element.img} alt=${element.producto}>
                </div>   
                <h5>
                    ${element.producto}
                </h5>    
                <h5 id="cardPrecio">
                <svg width="19" height="19" fill="none" stroke="#d4d4d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.904 1.5h-5.762c-.18 0-.351.07-.478.197L1.144 13.214a1.352 1.352 0 0 0 0 1.908l5.484 5.484a1.353 1.353 0 0 0 1.908 0L20.053 9.094a.678.678 0 0 0 .197-.478V2.85a1.342 1.342 0 0 0-1.346-1.35Z"></path>
                <path fill="#d4d4d4" stroke="none" d="M16.5 6.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path>
                <path d="m10.781 22.5 12.281-12.281a.647.647 0 0 0 .188-.469v-6"></path>
                </svg>
                    $${element.precio}
                </h5>
                <button class="boton-carrito" id="button-${element.id}"><svg width="19" height="19" fill="none" stroke="#d4d4d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
                <path d="M18.75 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
                <path d="M2.25 3.75h3L7.5 16.5h12"></path>
                <path d="M7.5 13.5h11.692a.375.375 0 0 0 .369-.301l1.35-6.75a.376.376 0 0 0-.37-.449H6"></path>
                </svg> Añadir al carrito</button>     
            </div>
        `
    }, "")
    return arrayReducido
}





// Aplicar descuento a productos
function cargarOfertas() {
    const ofertasSneakers = [...sneakers]
    ofertasSneakers.filter(element => {
        if (element.oferta === true) {
            ofert = Math.floor(element.precio - (element.precio * 0.20))
            element.precio = ofert
            console.log("Oferta de 20% " + element.precio + " en producto con ID " + element.id);
        }
    })
}

// se cargan las ofertas al cargar html
cargarOfertas()


// se crea funcion para comparar el ID con el array
const buscarProducto = (producto, array) => {
    return array.find(product => {
        return product.id === Number(producto)
    })
}

function validarID(id) {
    let carr = obtenerLocal("carrito")
    carr.forEach(element => {
        return element.id === id ? true : false
    });
}

function actualizarNro() {
    let nro = JSON.parse(localStorage.getItem("carrito"))
    let carroNro = document.querySelector(".numerito")


    if (nro === null) {
        carroNro.innerHTML = "0"
    } else {
        carroNro.innerHTML = nro.length
    }
}




//funcion para agregar al carro de compra por LS
const subirAlCarrito = () => {
    const botonesCards = document.querySelectorAll(".boton-carrito")
    botonesCards.forEach(boton => {
        boton.onclick = () => {
            const recortarId = boton.id.slice(7)
            console.log(recortarId)
            const producto = buscarProducto(recortarId, sneakers)
            pushearArray(carro, producto)
            enviarLs("carrito", carro)
            actualizarNro()
        }
    })
}

subirAlCarrito()


carro = carritoActualizado

// funciones validarOfertas
function validarOfertas(array) {
    const ofertasSneakers = [...array]
    let newArray = []
    ofertasSneakers.forEach(element => {
        if (element.oferta === true) {
            pushearArray(newArray, element)
        }
    })
    console.log(newArray);
    contenedor.innerHTML = cardsAHtml(newArray)
    subirAlCarrito()

}


//Funcion para cargar el carro de compras









// FUNCIONALIDADES FILTROS




window.onload = function () {
    validarOfertas(sneakers)
    subirAlCarrito()
    actualizarNro()
};