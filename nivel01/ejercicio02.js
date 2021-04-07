const sumar = (num1, num2) => {
  return parseInt(num1) + parseInt(num2);
};

const restar = (num1, num2) => {
  return parseInt(num1 - num2);
};

const multiplicar = (num1, num2) => {
  return parseInt(num1 * num2);
};

const dividir = (num1, num2) => {
  return parseInt(num1 / num2);
};

alert("que operacion deseas hacer ?");
let operacion = prompt("1:suma , 2 : resta , 3 : multiplicar , 4:divir");

if (operacion == 1) {
  let num1 = prompt("ingresar numero 1 ");
  let num2 = prompt("ingresar numero 2 ");
  let rpta = sumar(num1, num2);
  alert(rpta);
} else if (operacion == 2) {
} else if (operacion == 3) {
} else if (operacion == 4) {
} else {
  alert("error");
}
