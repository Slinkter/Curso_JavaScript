"use strict";
/*

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

const archivo = document.getElementById("archivo");

archivo.addEventListener("change", (e) => {
  ReaderFile(archivo.files[0]);
});

const ReaderFile = (file_element) => {
  const reader = new FileReader();
  reader.readAsText(file_element);
  reader.addEventListener("load", (e) => {
    // convertir de texto a json
    // console.log( typeof e.currentTarget.result);
    // console.log( JSON.parse(e.currentTarget.result) );
    // recoger con un for
    let array_data = JSON.parse(e.currentTarget.result);
    for (let element in array_data) {
      console.log(array_data[element]);
      let mail = array_data[element].email
    
      document.write(`Email  : ${mail}`)
      document.write(`<br>  `)
      if (array_data[element].id >= 10) {
        break;
      }
    }
  });
};
