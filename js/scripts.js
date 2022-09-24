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

console.log(nuevoEnlance)


// Eventos

console.log(1)

window.addEventListener("load", function() {
    console.log(2)
})

window.onload = function(){
    console.log(3)
}

document.addEventListener("DOMContentLoaded", function() {
    console.log(4)
})

window.onscroll = function() {
    console.log("Moviendo")
}

console.log(15)


// Seleccionar elementos

const btnEnviar = document.querySelector(".boton--primario")
btnEnviar.addEventListener("click", function(evento) {
    console.log(evento)
    evento.preventDefault()
    console.log("Enviando formulario")
})

