const usuarios = [{
    name: "Cristian",
    user: "cristian@gmail.com",
    pass: "coder1",
}, {
    name: "Yohana",
    user: "yohafierro@gmail.com",
    pass: "yohanafierro1"
}, {
    name: "Andres",
    user: "barbamorales@gmail.com",
    pass: "coderhouse25"
}]




const inputUser = document.querySelector("#email")
const inputName = document.querySelector("#name")
const inputPass = document.querySelector("#password")
const formLogin = document.querySelector(".login-form")

formLogin.onsubmit = (e) => {
    e.preventDefault()
    array = [...usuarios]

    array.forEach(element => {
        return inputUser.value.toLowerCase() == element.user && inputPass.value.toLowerCase() == element.pass ? window.location.assign("html/home.html") : false
    });

}






function myFunction() {
    let x = document.getElementById("register");
    let y = document.getElementById("btn_registrar");
    let z = document.getElementById("btn_submit");
    let inp = document.getElementById("btn_register")


    if (x.style.display === "none" && inp.value === "Registrarse") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none";
        inp.value = "Volver"
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        inp.value = "Registrarse"

    }
}



function registrarUser() {

    let n = document.querySelector("#name").value
    let e = document.querySelector("#email").value
    let p = document.querySelector("#password").value
    

    arr = [...usuarios]

    if (n != "" && e != "" && p != "") {
        if (p.length >= 8) {
            if (validarEmail(e) === true && validarUser(e) === true) {
                usuarios.push({
                    name: document.querySelector("#name").value,
                    user: document.querySelector("#email").value,
                    pass: document.querySelector("#password").value
                })
                console.log("usuario ingresado");
                console.table(usuarios);
                debugger
            }
        }else{
            console.log(p);
            alert("La contraseña debe ser mayor a 8 caracteres")
        }
    } else {
        alert("Debe llenar todos los campos")
    }

    // usuarios.push({
    //     name: document.querySelector("#name").value,
    //     user: document.querySelector("#email").value,
    //     pass: document.querySelector("#password").value
    // })
    // debugger
    // console.log("usuario ingresado");
    // console.table(usuarios);
}


function validarEmail(email){
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    let esValido = expReg.test(email)

    return esValido === true ? true : alert("el correo debe contener @")

}


function validarUser(mail){
    mail = document.querySelector("#email").value
    array = [...usuarios]

    array.forEach(element => {

        if (element.user != mail) {
            return true
        }else{
            alert("El correo ya se encuentra registrado")
        }


    });

}





function showPass() {
    let pass = document.getElementById("password");

    if (pass.type === "password") {
        pass.type = "text"
    } else {
        pass.type = "password"
    }
}