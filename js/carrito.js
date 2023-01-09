function actualizarNro() {
    nro = JSON.parse(localStorage.getItem("carrito"))
    let carroNro = document.querySelector(".numerito")

    console.log(carroNro);
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
        return acc + `
            <div class="card" id="card-${element.id}">
            <div class="shopping-cart">

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
              <div class="product-title">${element.producto}</div>
              <p class="product-description">${element.descripción}</p>
            </div>
            <div class="product-price">${element.precio}</div>
            <div class="product-quantity">
                <p class="product-description">${element.id}</p>
            </div>
            <div class="product-removal">
              <button class="boton-carrito" id="borrar-${element.id}">Quitar</button>
            </div>
            <div class="product-line-price">${element.precio}</div>
          </div>
          
        `
    }, "")
    return arrR
}


{
    /* <div class="totals">
                <div class="totals-item">
                    <label>Subtotal</label>
                    <div class="totals-value" id="cart-subtotal">71.97</div>
                </div>
                <div class="totals-item">
                    <label>Tax (5%)</label>
                    <div class="totals-value" id="cart-tax">3.60</div>
                </div>
                <div class="totals-item">
                    <label>Shipping</label>
                    <div class="totals-value" id="cart-shipping">15.00</div>
                </div>
                <div class="totals-item totals-item-total">
                    <label>Grand Total</label>
                <div class="totals-value" id="cart-total">90.57</div>
              </div> */
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
        }
    }
}

actualizarCarrito()