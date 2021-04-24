// el elemento windows es mas grande que el dom ,es el mas alto jerarquia
let youtubeURL = "https://youtube.com";
//let ventana = window.open(youtubeURL);
// ventana.close()
// window.alert('mensaje ')
// print()

const screen = window.screen
let altura = screen.availWidth;
let ancho = screen.availHeight;
console.log(altura);
console.log('<br>');
console.log(ancho);

const screenLeft = window.screenLeft;
const screenTop = window.screenTop
console.log(screenLeft);
console.log('<br>');
console.log(screenTop);