const sumar = (x, y) => {
  return parseInt(parseInt(x) + parseInt(y));
};

const restar = (x, y) => {
  return parseInt(parseInt(x) - parseInt(y));
};

const multiplicar = (x, y) => {
  return parseInt(parseInt(x) * parseInt(y));
};

const dividir = (x, y) => {
  return parseInt(parseInt(x) / parseInt(y));
};

const ask = prompt("ingresar metodo ");

if (ask === "1") {
  const a = prompt("ingresar a");
  const b = prompt("ingresar b");
  const rpta = sumar(a, b);
  document.write(rpta);
  console.log(rpta);
  alert(rpta);
} else if (ask === "2") {
  const a = prompt("ingresar a");
  const b = prompt("ingresar b");
  const rpta = restar(a, b);
  document.write(rpta);
  console.log(rpta);
  alert(rpta);
} else if (ask === "3") {
  const a = prompt("ingresar a");
  const b = prompt("ingresar b");
  const rpta = multiplicar(a, b);
  document.write(rpta);
  console.log(rpta);
  alert(rpta);
} else if (ask === "4") {
  const a = prompt("ingresar a");
  const b = prompt("ingresar b");
  const rpta = dividir(a, b);
  document.write(rpta);
  console.log(rpta);
  alert(rpta);
}
