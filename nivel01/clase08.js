// 8:53:22

const contenedor = document.querySelector(".contenedor");
const item = document.createElement("LI");
const textDelITem = document.createTextNode("probando creando una lista");
item.appendChild(textDelITem);
contenedor.appendChild(item);


const fragmento = document.createDocumentFragment();

for (let index = 0; index < 2; index++) {
  const item001 = document.createElement("LI");
  item001.innerHTML = "Este es un item de la lista";
  fragmento.appendChild(item001);
}

//

const primierhijo = contenedor.firstElementChild;
const ultimohijo = contenedor.lastElementChild;
const hijos = contenedor.childNodes;


contenedor.appendChild(fragmento);
console.log(item);
console.log(textDelITem);
console.log(primierhijo);
console.log(ultimohijo);
console.log(hijos);
hijos.forEach(item => console.log(item))