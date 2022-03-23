// Esto es un objeto
let pc1 = {
  nombre: "Maquinola-PC1",
  procesador: "Core i9 ",
  ram: "16  GB",
  espacio: "1TB",
};
// Esto es un array
let pc2 = ["Maquinola-PC2", "AMD F8x ", "32gb", "2TP"];

document.write("-----------<br>");
document.write("pc1 : ", pc1);
document.write("<br>-----------<br>");
document.write("pc2 : ", pc2);
document.write("<br>-----------<br>");
document.write("<br>");
// mostrar datos
document.write(pc1["nombre"]);
document.write(pc1.nombre);
// mostrar datos
document.write(pc1.nombre);
document.write("<br>");
document.write(pc2[0]);
document.write("<br>");

// asignar datos a nuevas variables
let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];
// crear cadena de texto
let frase = ` <b>  nombre:   </b>    ${nombre} <br> 
<b>  procesador:   </b>    ${procesador} <br> 
<b>  ram:   </b>    ${ram} <br> 
<b>  espacio:   </b>    ${espacio} <br> `;
document.write("<br>-----------<br>");
document.write(frase);

let name_pc2 = pc2[0];
let cpu_pc2 = pc2[1];
let ram_pc2 = pc2[2];
let space_pc2 = pc2[3];

let phrase = ` <b>  nombre:   </b>    ${name_pc2} <br> 
<b>  procesador:   </b>    ${cpu_pc2} <br> 
<b>  ram:   </b>    ${ram_pc2} <br> 
<b>  espacio:   </b>    ${space_pc2} <br> `;
document.write("<br>-----------<br>");
document.write(phrase);

document.write("<br>-----------<br>");
document.write("WHILE ");
let numero = 0;
// while siempre se ejecutar y pregunta primero la condicion
while (numero < 10) {
  numero++;
  document.write("<br>");
  document.write(numero);
  if (numero == 4) {
    break;
  }
}
document.write("<br>-----------<br>");
document.write("DO-WHILE <br>");
// do-while se ejecutar y pregunta despues
numero = 0;
do {
  document.write(numero + "<br>");
  numero++;
} while (numero <= 6);

// bucle for - termina la operacion
document.write("<br>-----------<br>");
document.write("FOR  - break <br>");
for (let index = 0; index < 10; index++) {
  if (index == 6) {
    break;
  }
  document.write(index + "<br>");
}
// bucle for - salta la operacion y continua
document.write("<br>-----------<br>");
document.write("FOR  - continue <br>");
for (let index = 10; index >= 0; index--) {
  if (index == 5) {
    continue; // se salta valor del index
  }
  document.write(index + "<br>");
}
document.write("<br>-----------<br>");
document.write("for - avanzado 1 - in  (numero)<br>");
let animales = ["gatos", "perro", "ave"];
for (animal in animales) {
  document.write(animales[animal] + "<br>");
}
document.write("<br>-----------<br>  ");
document.write("for - avanzado 2 - of (imprime la propiedad)<br>");
for (animal of animales) {
  document.write(animal + "<br>");
}

//3:07:00
