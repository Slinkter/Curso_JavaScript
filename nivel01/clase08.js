// 8:53:22
const contenedor = document.querySelector(".contenedor");
contenedor.style.background = "red";
//
const text = document.createTextNode("Item 1");
const item = document.createElement("LI");
item.appendChild(text);
item.style.background = "yellow";
//
contenedor.appendChild(item);
//
const fragmento = document.createDocumentFragment();
//
for (let i = 0; i < 5; i++) {
  const element = document.createElement("LI");
  element.innerHTML = `Este es un item de la lista ${i}`;
  element.style.background= "green"
  fragmento.appendChild(element);
}
//
contenedor.appendChild(fragmento);
//

const primierhijo = contenedor.firstElementChild;
const ultimohijo = contenedor.lastElementChild;
const hijos = contenedor.childNodes;
const array = [...hijos]

console.log(primierhijo);
console.log(ultimohijo);
console.log(hijos);
console.log(array);
