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

const enviarLs = (clave, valor) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

let carrito = obtenerDelLs("carrito")

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
contenedor.innerHTML = cardsAHtml(obtenerDelLs("carrito"))

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



function total(){
    let ls = JSON.parse(localStorage.getItem("carrito"))
    arr = Object.values(ls)
    let acc = 0
    let arrayTotal= []

    for (let index = 0; index < ls.length; index++) {
        let element = ls[index].precio;

        let total = element 
        acc =acc + Math.trunc(total)
        console.log(Math.trunc(total));
    }
    console.log("hola "+ acc);

    const resumen = document.querySelector(".total-pedido")
    resumen.innerHTML=acc

    let taxes = acc * 0.19
    document.querySelector(".total-tax").innerHTML = Math.trunc(taxes)

    let totalFinal = acc + taxes + 2500
    document.querySelector(".total-final").innerHTML = Math.trunc(totalFinal)
}

total()


document.querySelector(".btn_comprar").addEventListener("click", () => {
    const total = document.querySelector(".total-final")

    swal({
        title: "Resumen del pedido",
        text: "Total a pagar : "+ total.innerHTML,
        icon: "success",
        buttons: "Pagar",
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Recibiras un mail con todos los detalles! Gracias por comprar con nosotros", {
            icon: "success",
          });
        } else {
          swal("Has cancelado la transacción!");
        }
      });
    console.log(total.innerHTML);
})

// sweet alert


