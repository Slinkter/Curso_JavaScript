const container = document.querySelector(".container");
const item = document.createElement("li");
const text = document.createTextNode("esto es un texto");
item.appendChild(text);
container.appendChild(item);

for (i = 0; i <= 5; i++) {
  const element = document.createElement("li");
  element.textContent = "hola";
  container.appendChild(element);
}
