alumnos = [
  {
    nombre: "liam",
    email: "loam@fas.com",
    materia: "fisica 1",
  },
  {
    nombre: "jorge",
    email: "jorge@fas.com",
    materia: "biologia",
  },
  {
    nombre: "orlando",
    email: "orlando@fas.com",
    materia: "matematicas",
  },
  {
    nombre: "Kiara",
    email: "Kiara@fas.com",
    materia: "historia",
  },
];

console.log("for - of ");
for (item of alumnos) {
  //  console.log(item["nombre"]);
}
console.log("==========================");
console.log("for - in ");
console.log("==========================");
for (i in alumnos) {
  let datos = alumnos[i];

  let nombre = datos["nombre"];
  let email = datos["email"];
  let material = datos["materia"];
  let htmlCode = `
    
  <div class="grid-item nombre">${nombre} Cave</div>
  <div class="grid-item email">${email}</div>
  <div class="grid-item materia">${material}</div>
    <div class="grid-item semana">
          <select name="semana-elegida" id="">
              <option value="Semana 1">Semana 1 </option>
              <option value="Semana 2">Semana 2 </option>
          </select>
      </div>
  
  `;

  document.querySelector(".grid-container").innerHTML += htmlCode;
}
// 3:30:00
const btn_confirmar = document.querySelector(".btn_confirmar ");
btn_confirmar.addEventListener("click", sendFormulario());

function sendFormulario(evt) {
  console.log("function sendFormulario");
  let elementos = document.querySelectorAll(".semana");
  let semanasElegidas = document.querySelectorAll(".semana-elegida");
  for (elemento in elementos) {
    semana = elementos[elemento];
    semana.innerHTML = semanasElegidas[elemento].value;
  }
  console.log(elementos);
  console.log(semanasElegidas);
}
