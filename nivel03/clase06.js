/*
"use strict";
let count_textura = document.querySelector(".texturas").children.length;
const zona = document.querySelector(".zona");

zona.addEventListener("dragover", (e) => {
  console.log("4");
  e.preventDefault();
});

zona.addEventListener("drop", (e) => {
  console.log("3");
  let n = e.dataTransfer.getData("textura");
  zona.style.background = `url("./img/textura${n}.jpg") `;
});

for (let i = 1; i < count_textura + 1; i++) {
  console.log("2");
  document.querySelector(`.textura${i}`).addEventListener("dragstart", (e) => {
    console.log("5");
    transferirTextura(i, e);
  });
}

const transferirTextura = (n, e) => {
  console.log("1");
  e.dataTransfer.setData("textura", n);
};


*/