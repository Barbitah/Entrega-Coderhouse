 // variables
 let botonesAgregar = document.querySelectorAll(".producto-agregar");
 const contenedorCards = document.querySelector(".contenedor")

// IMPRIMIR EN HTML

const cardsAHtml = ( array ) => {
    const arrayReducido = array.reduce( (acc, element ) => {
        return acc + `
        <div class="card" id="card-${element.id}">
            <div class="card-img">
                <img src=${element.img} alt=${element.producto}>
            </div>   
            <h2>
                ${element.producto}
            </h2>    
            <h3>
                ${element.precio}
            </h3>
            <h6>
            ${element.oferta}
            </h6>
            <button class="boton-carrito" id="button-${element.id}">Añadir al carrito</button>     
        </div>
    `

         
    }, "")
    return arrayReducido
}




function imprimirHtml(array) {
    array = [...sneakers]

    array.forEach(element => {
        if (element.oferta === true) {
            return contenedorCards.innerHTML = cardsAHtml(array)
        }
    });

}


//------------------------------
// METODO 1 SIN FILTER
// function validarOfertas(array) {
//     const contenedor = document.querySelector(".contenedor")
//     const ofertasSneakers = [...sneakers]
//     array.forEach(ofertasSneakers => {

//         if (ofertasSneakers.oferta === true) {
//             ofert = Math.floor(ofertasSneakers.precio - (ofertasSneakers.precio * 0.20))
//             ofertasSneakers.precio = ofert
//             console.log("Oferta de 20% " + ofertasSneakers.precio);
//             imprimirHtml(ofertasSneakers)
//         }

//     });
// }


//METODO 2 CON FILTER
//METODO 2 CON FILTER
function validarOfertas(array) {
    const contenedor = document.querySelector(".contenedor")
    const ofertasSneakers = [...sneakers]
    ofertasSneakers.filter(element => {
        return element.oferta === true ? contenedorCards.innerHTML = cardsAHtml(sneakers) : false
    })
}


function cargarOfertas() {
    const contenedor = document.querySelector(".contenedor")
    const ofertasSneakers = [...sneakers]
    ofertasSneakers.filter(element => {
        if (element.oferta === true) {
            ofert = Math.floor(element.precio - (element.precio * 0.20))
            element.precio = ofert
            console.log("Oferta de 20% " + element.precio + " en producto con ID " + element.id);
        }
    })
}

window.onload = cargarOfertas()


function categoriaSandalia(array) {
    const contenedor = document.querySelector(".contenedor")
    const sandalias = [...sneakers]
    sandalias.filter(element => {
        return element.categoría === "sandalias" ? imprimirHtml(element) : false
    })
}


function categoriaZapatillas(array) {
    const contenedor = document.querySelector(".contenedor")
    const sandalias = [...sneakers]
    sandalias.filter(element => {
        return element.categoría === "sneakers" ? imprimirHtml(element) : false
    })
}







//funciones para ordenar arrays
function ordenarMayor(array) {
    arr = [...array]
    orden = arr.sort(((a, b) => b.precio - a.precio))
    console.table(orden);
    cardsAHtml(sneakers)
}

function ordenarMenor(array) {

    arr = [...array]
    orden = arr.sort(((a, b) => a.precio - b.precio))
    console.table(orden);
    cardsAHtml(orden)
}




const searchForm = document.querySelector(".d-flex")

searchForm.onsubmit = (e) => {
    e.preventDefault()
    document.querySelector(".contenedor").innerHTML = "";
    if (document.querySelector("#searchText").value === "") {
        cardsAHtml(sneakers)
    } else {
        searchProduct(sneakers)

    }
}







// BUSCAR POR PRODUCTO
function searchProduct(array) {
    let arr = [...array]
    const searchBar = document.querySelector("#searchText").value

    let busqueda = arr.find(elemento => elemento.producto == searchBar.toUpperCase());


    imprimirHtml(busqueda)
    console.log(busqueda);
}


document.querySelector(".btn_sandalias").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    categoriaSandalia(sneakers)
})
document.querySelector(".btn_sneakers").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    categoriaZapatillas(sneakers)
})
//------------------------------

// funciones para mostrar y buscar


document.querySelector(".btn_ofertas").addEventListener('click', function (e) {
    let confirmarOfertas = swal("Ofertas", "Deseas ver solo las ofertas?")

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

//MOSTRAR TODO

document.querySelector(".btn_todos").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    contenedorCards.innerHTML= cardsAHtml(sneakers)
})










//DOM para ordenar
document.querySelector(".btn_ord_mayor").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    ordenarMayor(sneakers)
})


document.querySelector(".btn_ord_menor").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    ordenarMenor(sneakers)
})




window.addEventListener("load", function () {
    contenedorCards.innerHTML = cardsAHtml(sneakers)
})




document.querySelector(".form-control").addEventListener('keyup', (e) => {
    let texto = e.target.value
    console.log(texto);
})







function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}





function agregarAlCarrito(e){
    botonesAgregar = document.querySelectorAll("producto-agregar")
    console.log("agregado");
    console.log(botonesAgregar);
}



document.querySelectorAll(".producto-agregar").addEventListener("click", () => {
    botonesAgregar = document.querySelectorAll("producto-agregar")
    console.log("agregado");
    console.log(botonesAgregar);
})