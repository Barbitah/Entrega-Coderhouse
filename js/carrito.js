// FUNCTION LS

const ObtenerLocal = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}

const enviarLocal = (clave, valor) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}


// función actualizar innerHtml nro productos en el carro

function actualizarNro() {
    let nro = JSON.parse(localStorage.getItem("carrito"))
    let carroNro = document.querySelector(".numerito")


    if (nro === null) {
        carroNro.innerHTML = "0"
    }else{
        carroNro.innerHTML = nro.length
    }
}

actualizarNro()


////Imprimir LS en carrito



let carrito = ObtenerLocal("carrito")

const cardsAHtml = (array) => {
    const arrR = array.reduce((acc, element) => {
        return acc + `
        <div class="card" id="card-${element.id}">

        <div class="column-labels">
            <label class="product-image">Imagen</label>
            <label class="product-details">Nombre</label>
            <label class="product-price">Precio</label>
            <label class="product-quantity">ID</label>
            <label class="product-removal">Quitar</label>
            <label class="product-line-price">Total</label>
        </div>
        <div class="product">
            <div class="product-image">
                <img src="${element.img}">
            </div>
            <div class="product-details">
                <p class="product-title">${element.producto}</p>
                <p class="product-description">${element.descripción}</p>
            </div>
            <p class="product-price">$${element.precio}</p>
            <p class="product-description">${element.id}</p>
            <div class="product-removal">
                <button class="boton-carrito" id="borrar-${element.id}">Quitar</button>
            </div>
            <div class="totals">
                <div class="totals-item">
                    <label>Subtotal</label>
                    <p class="totals-value" id="cart-subtotal">$${element.precio}</p>
                </div>
            </div>
        </div>
          
        `
    }, "")
    return arrR
}


const contenedor = document.querySelector(".container")
contenedor.innerHTML = cardsAHtml(ObtenerLocal("carrito"))

const actualizarCarrito = () => {
    const elementC = document.querySelectorAll(".card")
    const btnCarrito = document.querySelectorAll(".boton-carrito")
    for (let i = 0; i < elementC.length; i++) {
        btnCarrito[i].onclick = () => {
            const recortar = elementC[i].id.slice(5)
            const filtrar = carrito.filter((filtrado, index) => {
                return filtrado.id != recortar
            })
            console.log(filtrar)
            carrito = filtrar
            localStorage.setItem("carrito", JSON.stringify(carrito))
            contenedor.innerHTML = cardsAHtml(carrito)
            nro = JSON.parse(localStorage.getItem("carrito"))
            let carroNro = document.querySelector(".numerito")

            console.log(carroNro);
            carroNro.innerHTML = nro.length
            actualizarCarrito()
            total()
        }
    }
}

actualizarCarrito()



document.querySelector(".btn_vaciar").addEventListener("click", () => {
    console.log("hola");
    window.localStorage.removeItem('carrito');
    location.reload()
})



function total() {
    let ls = JSON.parse(localStorage.getItem("carrito"))
    arr = Object.values(ls)
    let acc = 0
    let arrayTotal = []

    for (let index = 0; index < ls.length; index++) {
        let element = ls[index].precio;

        let total = element
        acc = acc + Math.trunc(total)
        console.log(Math.trunc(total));
    }

    const resumen = document.querySelector(".total-pedido")
    resumen.innerHTML = acc

    let taxes = acc * 0.19
    document.querySelector(".total-tax").innerHTML = Math.trunc(taxes)

    let totalFinal = acc + taxes + 2500
    document.querySelector(".total-final").innerHTML = Math.trunc(totalFinal)
}

total()


document.querySelector(".btn_comprar").addEventListener("click", () => {
    const total = document.querySelector(".total-final")
    let dirección = ""
    let comuna = ""
    let pais = ""

    

    fetch("https://63c345978bb1ca34755f8dc8.mockapi.io/users")
        .then((respuesta) => respuesta.json())
        .then((data) => {
            data.forEach(element => {
                if (ObtenerLocal("login") === element.mail) {
                    dirección = element.street
                    comuna = element.state
                    pais = element.country
                }
            });
        })
        .catch((error) => console.log(error))

    swal({
            title: "Resumen del pedido",
            text: "Total a pagar : " + total.innerHTML,
            icon: "success",
            buttons: "Pagar",
        })
        .then((willDelete) => {
            if (willDelete) {
                swal( {
                    text: `Recibiras tus productos en la dirección :

                    📩 👟

                    Dirección: ${dirección}

                    Comuna: ${comuna}
                    
                    Pais: ${pais}
                    
                    En 48 horas hábiles
                    `,
                    icon: "success",
                });
            } else {
                swal("Has cancelado la transacción!");
            }
        });
    console.log(total.innerHTML);
})