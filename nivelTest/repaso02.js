function changeColor(color) {
  const para = document.getElementById("para");
  para.style.color = color;
}

const titulo = document.querySelector(".titulo");
// settiando
titulo.style.fontSize = "50px";
titulo.style.color = "red";
titulo.style.padding = "15px";
titulo.style.background = "blue";
titulo.style.margin = "50px";
console.log(titulo);
titulo.classList.add("titulo2");
titulo.classList.add("titulo3");
titulo.classList.add("titulo4");
// obteniendo - extraer
let selector00 = titulo.classList.item(0);
let selector01 = titulo.classList.item(1);
let selector02 = titulo.classList.contains("titulo3");
console.log(selector00);
console.log(selector01);
console.log(selector02);
