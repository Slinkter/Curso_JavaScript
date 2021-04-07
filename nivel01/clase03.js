//Funciones

function saludar() {
  rpta = prompt("es de dia o de noche");
  if (rpta == "noche") {
    alert("ir  a domir");
  } else {
    alert(" anda a la calle");
  }
}

//saludar();

saludar_2 = function () {
  rpta = prompt("es de dia o de noche");
  if (rpta == "noche") {
    alert("ir  a domir");
  } else {
    alert(" anda a la calle");
  }
};

//saludar_2()

function mostramensaje() {
  return "soy un mensaje ";
}

let msj = mostramensaje();
document.writeln(msj);
document.writeln("<br>");
let num1 = 12;
let num2 = 32;

function sumar(a, b) {
  document.writeln("<br>");
  return a + b;
}

let rpta = sumar(num1, num2);
document.writeln(rpta);
rpta = sumar(5, 5);
document.writeln(rpta);
rpta = sumar(51, 5);
document.writeln(rpta);


const check = () => {}

