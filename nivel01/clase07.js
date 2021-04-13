// Metodos de seleccion elemtos
// .getElementById
// .getElementByTagName("p")
// .querySelector
// .querySelectorAll



//-----> modificar css 
// query selector coger el valor de las clases
const titulo = document.querySelector(".titulo");
//titulo.setAttribute("hidden", "true");
//titulo.removeAttribute("hidden");
titulo.style.color = "blue"
titulo.style.padding = "50px"
titulo.style.background = "red"
//
titulo.classList.add("classmartes")
let valor_titulo = titulo.classList.item(1)
document.write(valor_titulo)
let valor_contains = titulo.classList.contains("classmartes")
document.write("<br>",valor_contains)

let resultado = titulo.textContent;
document.write("<br>",resultado)

const input_001 = document.querySelector(".input_001");
const input_002 = document.querySelector(".input_002");
const input_normal = document.querySelector(".input_003");
input_normal.minLenght = 1
input_normal.placeholder ="hola"
input_normal.required = "true"


