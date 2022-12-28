const usuarios = [{
    name: "Cristian",
    user: "cristian@gmail.com",
    pass: "coder1"
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



// function validarCredenciales(username,password){

//     const array = [...usuarios]


//     array.forEach(element => {
//         if (username != element.user && password != element.pass) {
//             return false
//         }else{
//             return true
//         }


//         // return element.user=== username && element.pass === password ?true : false
//     });
// }







function showPass() {
    let pass = document.getElementById("password");

    if (pass.type === "password") {
        pass.type = "text"
    } else {
        pass.type = "password"
    }
}