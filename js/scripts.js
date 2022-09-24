// querySelector
const heading = document.querySelector("a")
// console.log(heading)

// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a")
// console.log(enlaces[0])
// enlaces[0].textContent = "Nuevo texto para enlace"
// enlaces[0].href = "www.google.com"
// enlaces[0].classList.add("nueva")
// enlaces[0].classList.remove("navegacion__enlace")


// getElementById

const heading2 = document.getElementById("#heading")

// Generar un nuevo enlace
const nuevoEnlance = document.createElement("a")

nuevoEnlance.href = "nuevo-enlace.html"
nuevoEnlance.textContent = "Nuevo enlace"
nuevoEnlance.classList.add("navegacion__enlace")

const navegacion = document.querySelector(".navegacion")
navegacion.appendChild(nuevoEnlance)

// console.log(nuevoEnlance)


// Eventos

// console.log(1)

window.addEventListener("load", function() {
    // console.log(2)
})

window.onload = function(){
    // console.log(3)
}

document.addEventListener("DOMContentLoaded", function() {
    // console.log(4)
})

window.onscroll = function() {
    // console.log("Moviendo")
}

// console.log(15)


// Seleccionar elementos

// const btnEnviar = document.querySelector(".boton--primario")
// btnEnviar.addEventListener("click", function(evento) {
//     console.log(evento)
//     evento.preventDefault()
//     console.log("Enviando formulario")
// })

// Eventos de teclado

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const mensaje = document.querySelector("#mensaje")
const formulario = document.querySelector(".formulario")

nombre.addEventListener("input", leerTexto)
email.addEventListener("input", leerTexto)
mensaje.addEventListener("input", leerTexto)

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    // Validar
    const {nombre, email, mensaje} = datos;

    if (nombre === "" || email === "" || mensaje === "") {
        mostrarError("Todos los campos son obligatorios")
        return
    }
    // Enviar

    envioCorrecto("Envio exitoso")
})

function leerTexto(evento) {
    console.log(evento.target.value)
    datos[evento.target.id] = evento.target.value
    // console.log(datos)
}

// Muestra un error 

function mostrarError(mensaje) {
    const error = document.createElement("p")
    error.textContent = mensaje
    error.classList.add("error")

    formulario.appendChild(error)
    
    // Desparacer
    setTimeout(() => {
        error.remove()
    }, 5000)
}

function envioCorrecto(mensaje) {
    const envio = document.createElement("p")
    envio.textContent = mensaje
    envio.classList.add("correcto")

    formulario.appendChild(envio)

    setTimeout(() => {
        envio.remove()
    }, 5000)
}


