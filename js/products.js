//IMPRIMIR EN HTML
function cardsAHtml(array) {
    const contenedor = document.querySelector(".contenedor")
    const mostrarTodo = [...array]

    mostrarTodo.forEach(array => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
    <div>
        <img src=${array.img} alt="sneaker"></img>
    </div>
    <h6>
        ID: ${array.id}
    </h6>
    <h6>
        ${array.producto}
    </h6>
    <h6 class="h4-precio">
        $${array.precio}
    </h6>
    <h6>
        ${array.fechaVencimiento}
    </h6>
    <p>
        Descripción: ${array.descripción}
    </p>
    <h6>
        Categoria: ${array.categoría}
    </h6>
    <h6>
        oferta: ${array.oferta}
    </h6>

    `
        contenedor.appendChild(card)
    });
}

function imprimirHtml(array) {

    const contenedor = document.querySelector(".contenedor")

    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
    <div>
        <img src=${array.img} alt="sneaker"></img>
    </div>
    <h6>
        ID: ${array.id}
    </h6>
    <h6>
        ${array.producto}
    </h6>
    <h6 class="h4-precio">
        $${array.precio}
    </h6>
    <h6>
        ${array.fechaVencimiento}
    </h6>
    <p>
        Descripción: ${array.descripción}
    </p>
    <h6>
        Categoria: ${array.categoría}
    </h6>
    <h6>
    oferta: ${array.oferta}
    </h6>

    `
    contenedor.appendChild(card)



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
        return element.oferta === true ? imprimirHtml(element) : false
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
        return element.categoría === "sandalias" ? imprimirHtml(element) : false
    })
}







//funciones para ordenar arrays
function ordenarMayor(array) {
    arr = [...array]
    orden = arr.sort(((a, b) => b.precio - a.precio))
    console.table(orden);
    cardsAHtml(orden)
}

function ordenarMenor(array) {

    arr = [...array]
    orden = arr.sort(((a, b) => a.precio - b.precio))
    console.table(orden);
    cardsAHtml(orden)
}

//---------------------DOM------------------------------
document.querySelector(".btn_search").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    searchID(sneakers)
})

//------------------------------



const searchForm = document.querySelector(".d-flex")

searchForm.onsubmit = ( e ) => {
    e.preventDefault()  
    document.querySelector(".contenedor").innerHTML = "";
    if (document.querySelector("#searchText").value  === "") {
        cardsAHtml(sneakers)
    }else{
        searchProduct(sneakers)
        
    }
}







// BUSCAR POR PRODUCTO
function searchProduct(array) {
    let arr = [...array]
    const searchBar= document.querySelector("#searchText").value

    let busqueda = arr.find(elemento => elemento.producto == searchBar.toUpperCase());


    imprimirHtml(busqueda)
    console.log(busqueda);
}

document.querySelector(".btn_searchProduct").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    searchProduct(sneakers)
})

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
    let confirmarOfertas = confirm("Deseas ver solo las ofertas?")
    if (confirmarOfertas === true) {
        document.querySelector(".contenedor").innerHTML = "";
        validarOfertas(sneakers)
    }
})

//MOSTRAR TODO

document.querySelector(".btn_todos").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
    cardsAHtml(sneakers)
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


//BTN para limpiar
document.querySelector(".btn_limpiar").addEventListener("click", () => {
    document.querySelector(".contenedor").innerHTML = "";
})


window.addEventListener("load", function () {
    cardsAHtml(sneakers)
})




document.querySelector(".form-control").addEventListener('keyup', (e) => {
    let texto = e.target.value
    console.log(texto);
})




