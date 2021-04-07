//

let number_one = 1;
let number_two = 2;
let number_three = 3;

const name = "Liam Cave";
const school = "School JavaScript";

// alert(number_one)

// let input_name = prompt("dame tu nombre")

// document.write(number_two**=number_three)

let saludo = "hola liam";
let pregunta = "¿Como estas ? ";
let frase = saludo + pregunta;

let nombre = "liam cave";
let frase1 = `<br> soy ${nombre} que vive en la molina <br> `;

document.write(frase);

document.write(frase1);
// b  significa booleano
let b_num_1 = 23;
let b_num_2 = 13;
let b_text_1 = "23";

let rpta1 = b_num_1 == b_num_2;
let rpta2 = b_num_1 != b_num_2;
let rpta3 = b_num_1 === b_num_2;
let rpta4 = b_num_1 !== b_num_2;
let rpta5 = b_num_1 < b_num_2;
let rpta6 = b_num_1 > b_num_2;

document.write(`==================`);
document.write(`<br> `);
document.write(` ¿ b_num_1 == b_num_2 ? ` + "  rpta  :  " + rpta1);
document.write(`<br> `);
document.write(rpta1);
document.write(`<br>`);
document.write(rpta2);
document.write(`<br>`);
document.write(rpta3);
document.write(`<br>`);
document.write(rpta4);
document.write(`<br>`);
document.write(rpta5);
document.write(`<br>`);
document.write(rpta6);
document.write(`<br>`);

let afirmacion_1 = b_num_1 > b_num_2;
let afirmacion_2 = b_num_2 < b_num_2;
document.write(`<br>`);
document.write(afirmacion_1 || afirmacion_2);
document.write(`<br>`);
document.write(afirmacion_1 && afirmacion_2);

nombre = "jhonny"

if(nombre == "liam"){
    alert("entonces eres hermano de Julio ")
}

if(nombre == "jhonny"){
    alert("entonces eres primo de Andrea ")
}










