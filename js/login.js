const usuarios = [{
    user: "cristian@gmail.com",
    pass: "coder1"
}, {
    user: "yohafierro@gmail.com",
    pass: "yohanafierro1"
}, {
    user: "barbamorales@gmail.com",
    pass: "coderhouse25"
}]




const inputUser = document.querySelector("#email")
const inputPass = document.querySelector("#password")
const formLogin = document.querySelector(".login-form")

formLogin.onsubmit = ( e ) => {
    e.preventDefault()  
    array = [...usuarios]

    array.forEach(element => {
        return inputUser.value == element.user && inputPass.value == element.pass ? window.location.assign("html/home.html") : false
    });

}

const validarUsuario = (e) =>{
    
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