function actualizarNro() {
    nro = JSON.parse(localStorage.getItem("carrito"))
    let carroNro = document.querySelector(".numerito")
    carroNro.innerHTML = nro.length
}
actualizarNro()





/////////////////////////////////////////

const obtenerDelLs = (clave) => {
    return JSON.parse(localStorage.getItem("carrito"))
}

let carrito = obtenerDelLs("carrito")

const cardsAHtml = (array) => {
    const arrR = array.reduce((acc, element) => {
        let taxValor = (element.precio * 0.19)
        let valorConTax = element.precio - (element.precio * 0.19)

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
contenedor.innerHTML = cardsAHtml(obtenerDelLs("carrito"))

const actualizarCarrito = () => {
    const elementC = document.querySelectorAll(".card")
    for (let i = 0; i < elementC.length; i++) {
        elementC[i].onclick = () => {
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



function total(){
    let ls = JSON.parse(localStorage.getItem("carrito"))
    arr = Object.values(ls)
    let acc = 0

    for (let index = 0; index < ls.length; index++) {
        let element = ls[index].precio;

        let total = element + (element * 0.19) + 2500 
        acc = acc + Math.trunc(total)
        console.log(Math.trunc(total));
    }
    console.log("hola "+ acc);

    const resumen = document.querySelector(".total-pedido")
    resumen.innerHTML= "$" + acc

    let taxes = acc * 0.19
    document.querySelector(".total-tax").innerHTML = "$"+Math.trunc(taxes)

    let totalFinal = acc + taxes + 2500
    document.querySelector(".total-final").innerHTML = "$" + Math.trunc(totalFinal)
}


total()



