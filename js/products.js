// Se crea un nuevo array para el carrito

window.onload = function () {
    contenedor.innerHTML = cardsAHtml(sneakers)
    subirAlCarrito()
};


let carro = []

const contenedor = document.querySelector(".contenedor")

// funciones para LS
const enviarLs = (clave, valor) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

const pushearArray = (array, value) => {
    array.push(value)
}

const obtenerDelLs = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}



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


// se crea funcion para comparar el ID con el array
const buscarProducto = (producto, array) => {
    return array.find(product => {
        return product.id === Number(producto)
    })
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

const carritoActualizado = obtenerDelLs("carrito") || []
carro = carritoActualizado


function actualizarNro() {
    nro = JSON.parse(localStorage.getItem("carrito"))
    let carroNro = document.querySelector(".numerito")
    carroNro.innerHTML = nro.length
}
actualizarNro()






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

document.querySelector(".btn_ofertas").addEventListener('click', function (e) {

    swal("Ofertas", "Deseas ver solo las ofertas?", {
            buttons: {
                cancel: "Cancelar",
                catch: {
                    text: "Aceptar",
                    value: "catch"
                }
            }
        })
        .then((value) => {
            if (value === "catch") {
                document.querySelector(".contenedor").innerHTML = "";
                validarOfertas(sneakers)
            }
        });
})






// btn todos
document.querySelector(".btn_todos").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    contenedor.innerHTML = cardsAHtml(sneakers)
    subirAlCarrito()
})




// funciones para ordenar
function ordenarMayor(array) {
    arr = [...array]
    orden = arr.sort(((a, b) => b.precio - a.precio))
    contenedor.innerHTML = cardsAHtml(orden)
    subirAlCarrito()
}

function ordenarMenor(array) {

    arr = [...array]
    orden = arr.sort(((a, b) => a.precio - b.precio))
    contenedor.innerHTML = cardsAHtml(orden)
    subirAlCarrito()
}



document.querySelector(".btn_ord_mayor").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    ordenarMayor(sneakers)
})


document.querySelector(".btn_ord_menor").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    ordenarMenor(sneakers)
})










// categorias

function categoriaSandalia(array) {
    const contenedor = document.querySelector(".contenedor")
    const sandalias = [...sneakers]
    sandalias.filter(element => {
        const ofertasSneakers = [...array]
        let newArray = []
        ofertasSneakers.forEach(element => {
            if (element.categoría === "sandalias") {
                pushearArray(newArray, element)
            }
        })
        console.log(newArray);
        contenedor.innerHTML = cardsAHtml(newArray)
        subirAlCarrito()
    })
}


function categoriaZapatillas(array) {
    const contenedor = document.querySelector(".contenedor")
    const sandalias = [...sneakers]
    sandalias.filter(element => {
        const ofertasSneakers = [...array]
        let newArray = []
        ofertasSneakers.forEach(element => {
            if (element.categoría === "sneakers") {
                pushearArray(newArray, element)
            }
        })
        console.log(newArray);
        contenedor.innerHTML = cardsAHtml(newArray)
        subirAlCarrito()
    })
}

document.querySelector(".btn_sandalias").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    categoriaSandalia(sneakers)
})
document.querySelector(".btn_sneakers").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    categoriaZapatillas(sneakers)
})