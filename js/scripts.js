// querySelector
const heading = document.querySelector("a")
console.log(heading)

// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a")
console.log(enlaces[0])
enlaces[0].textContent = "Nuevo texto para enlace"
enlaces[0].href = "www.google.com"
enlaces[0].classList.add("nueva")
enlaces[0].classList.remove("navegacion__enlace")


// getElementById

const heading2 = document.getElementById("#heading")