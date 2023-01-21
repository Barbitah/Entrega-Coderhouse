// Array para subir al carro 
let carro = []


let contenedor = document.querySelector(".contenedor")




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
                <h5>
                    $${element.precio}
                </h5>
                <h6>${element.descripción}</h6>
                <button class="boton-carrito" id="button-${element.id}">Añadir al carrito</button>     
            </div>
        `
    }, "")
    return arrayReducido
}



contenedor.innerHTML = cardsAHtml(sneakers)

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
            Toastify({

                text: "Producto agregado al carrito",
                style: {
                    background: "#F51D45",
                },
                offset: {
                    x: 40,
                    y: 140,
                },
                duration: 3000,
                className: 'toasty'

            }).showToast();
        }
    })
}

subirAlCarrito()


carro = carritoActualizado






//Funcion para cargar el carro de compras






// funciones validarOfertas
function validarOfertas(array) {
    const ofertasSneakers = [...array]
    let newArray = []
    ofertasSneakers.forEach(element => {
        if (element.oferta === true) {
            pushearArray(newArray, element)
        }
    })
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







function imprimirHtml(array) {

    const contenedor = document.querySelector(".contenedor")

    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
            <div class="card" id="card-${array.id}">
                <div class="card-img">
                    <img src=${array.img} alt=${array.producto}>
                </div>   
                <h5>
                    ${array.producto}
                </h5>    
                <h5>
                    $${array.precio}
                </h5>
                <h6>${array.descripción}</h6>
                <button class="boton-carrito" id="button-${array.id}">Añadir al carrito</button>     
            </div>

    `
    contenedor.appendChild(card)
}







// FUNCIONALIDADES FILTROS

const searchForm = document.querySelector(".d-flex")

searchForm.onsubmit = (e) => {
    e.preventDefault()
    document.querySelector(".contenedor").innerHTML = "";
    const inputSearch = document.querySelector("#searchText").value
    if (inputSearch.length === 0) {
        contenedor.innerHTML = cardsAHtml(sneakers)
        Toastify({

            text: "No se encuentra el producto",
            style: {
                background: "#F51D45",
            },
            offset: {
                x: 40,
                y: 140,
            },
            duration: 3000,
            className: 'toasty'

        }).showToast();
    } else {
        searchProduct(sneakers)
    }
}


function searchProduct(array) {
    let arr = [...array]
    const searchBar = document.querySelector("#searchText").value
    let busqueda = arr.find(elemento => elemento.producto == searchBar.toUpperCase());

    if (busqueda === undefined) {
        Toastify({

            text: "No se encuentra el producto",
            style: {
                background: "#F51D45",
            },
            offset: {
                x: 40,
                y: 140,
            },
            duration: 3000,
            className: 'toasty'

        }).showToast();
        contenedor.innerHTML = cardsAHtml(sneakers)
    } else {
        imprimirHtml(busqueda);
        subirAlCarrito()
        actualizarNro()
        console.log(busqueda);
    }

}


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


window.onload = function () {
    contenedor.innerHTML = cardsAHtml(sneakers)
    subirAlCarrito()
    actualizarNro()
};