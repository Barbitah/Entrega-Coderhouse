// Variables globales
const inputUser = document.querySelector("#email")
const inputName = document.querySelector("#name")
const inputPass = document.querySelector("#password")
const formLogin = document.querySelector(".login-form")



//FUNCIONES LS

const enviarLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}


// 


formLogin.onsubmit = (e) => {
    e.preventDefault()
    fetch("https://63c345978bb1ca34755f8dc8.mockapi.io/users")
        .then((respuesta) => respuesta.json())
        .then((data) => {
            if (validarEmail(inputUser.value) === true) {
                if (validarPass(inputPass.value.length) === true) {
                    data.forEach(element => {
                        if (element.mail === inputUser.value && element.password) {
                            window.location.assign("html/home.html")
                            enviarLocal("login", inputUser.value)
                        }
                    });
                }
            }
        })
        .catch((error) => console.log(error))
}


//funciones de orden superior
function validarPass(pass) {
    return pass >= 8 ? true : swal("Error de ingreso", "La contraseña debe ser mayor a 8 carácteres", "warning")
}

function validarEmail(email) {
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    let esValido = expReg.test(email)

    return esValido === true ? true : swal("Error de ingreso", "El correo debe contener un @", "warning")
}


document.querySelector("#showPassword").onclick = () => {
    let pass = document.querySelector("#password")
    if (pass.type === "password") {
        pass.type = "text"
    } else {
        pass.type = "password"
    }
}


function showPass() {


    if (pass.type === "password") {
        pass.type = "text"
    } else {
        pass.type = "password"
    }
}


//Toggle campos para register

document.querySelector("#btn_register").onclick = () => {
    let x = document.getElementById("register");
    let y = document.getElementById("btn_registrar");
    let z = document.getElementById("btn_submit");
    let dir = document.getElementById("direccion");
    let com = document.getElementById("comuna");
    let pais = document.getElementById("pais");

    let inp = document.getElementById("btn_register")


    if (x.style.display === "none" && inp.value === "Registrarse") {
        x.style.display = "block";
        y.style.display = "block";
        dir.style.display = "block";
        com.style.display = "block";
        pais.style.display = "block";
        z.style.display = "none";
        inp.value = "Volver"
    } else {
        x.style.display = "none";
        y.style.display = "none";
        dir.style.display = "none";
        com.style.display = "none";
        pais.style.display = "none";
        z.style.display = "block";
        inp.value = "Registrarse"

    }
}


// función para registrar usuario
document.querySelector("#btn_registrar").onclick = () => {
    let n = document.querySelector("#name")
    let e = document.querySelector("#email")
    let p = document.querySelector("#password")
    let dir = document.getElementById("inputdireccion");
    let com = document.getElementById("inputcomuna");
    let pais = document.getElementById("inputpais");


    if (n.value != "") {
        if (validarEmail(e.value) === true) {
            if (validarPass(p.value.length) === true) {
                if (dir.value != "" && com.value != "" && pais.value != "") {
                    fetch("https://63c345978bb1ca34755f8dc8.mockapi.io/users", {
                            method: "POST",
                            body: JSON.stringify({
                                name: n.value,
                                mail: e.value,
                                password: p.value,
                                street: dir.value,
                                state: com.value,
                                country: pais.value
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            window.location.assign("html/home.html")
                            infoAlLs("login", e.value)
                        })
                } else {
                    swal("Error de Ingreso", "Debe completar todos los campos", "warning")
                }
            }
        }
    } else {
        swal("Error de Ingreso", "Debe completar todos los campos", "warning")
    }
}
