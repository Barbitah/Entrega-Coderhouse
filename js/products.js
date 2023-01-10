// Se crea un nuevo array para el carrito

let carro = []

const contenedor = document.querySelector(".contenedor")

// funciones para LS
const alLs = ( clave, valor ) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

const pushAArray = ( array, value ) => {
    array.push(value)
}

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}



const cardsAHtml = ( array ) => {
    const arrayReducido = array.reduce( (acc, element ) => {
        return acc + `
            <div class="card" id="card-${element.id}">
                <div class="card-img">
                    <img src=${element.img} alt=${element.producto}>
                </div>   
                <h5>
                    ${element.producto}
                </h5>    
                <h5>
                    $${element.precio}
                </h5>
                <button class="boton-carrito" id="button-${element.id}">Añadir al carrito</button>     
            </div>
        `
    }, "")
    return arrayReducido
}


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

cargarOfertas()

// se llama al contenedor para imprimir al card
contenedor.innerHTML = cardsAHtml(sneakers)


// se crea funcion para comparar el ID con el array
const buscarProducto = ( producto, array) => {
    return array.find( product => {
        return product.id === Number(producto)
    })
}


//funcion para agregar al carro de compra por LS

const subirAlCarrito = () => {
    const botonesCards = document.querySelectorAll(".boton-carrito")
    botonesCards.forEach( boton => {
        boton.onclick = () => {     
            const recortarId = boton.id.slice(7) 
            console.log(recortarId) 
            const producto = buscarProducto(recortarId, sneakers)
            pushAArray(carro, producto)
            alLs("carrito", carro)
            actualizarNro()
        }
    })
}

subirAlCarrito()

const carritoActualizado = obtenerDelLs("carrito") || []
carro = carritoActualizado


function actualizarNro(){
    nro = JSON.parse(localStorage.getItem("carrito"))
    let carroNro = document.querySelector(".numerito")
    carroNro.innerHTML = nro.length
}
actualizarNro()