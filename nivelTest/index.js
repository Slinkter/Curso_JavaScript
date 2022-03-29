const data = [
  ["luis cave", "@luiscave"], // 0
  ["kiara keter", "@kariaketer"], // 1
  ["Jorge Camacho", "@jorgecamacho"], // 2
  ["Norma flores", "@floresnorma"], // 3
  ["mauro jiro", "@mjirom"], // 4
];

class Persona {
  constructor(name, ig) {
    this.name = name;
    this.ig = ig;
  }
}

const personas = [];

for (item in data) {
  personas.push(new Persona(data[item][0], data[item][1]));
}

const obtenerInfoPersonaName = (position) => {
  return new Promise((res, rej) => {
    if (personas[position] == "undefined") {
      rej("no existe le nombre la persona en tal posicion");
    } else {
      res(personas[position].name);
    }
  });
};

const obtenerInfoPersonaIG = (position) => {
  return new Promise((res, rej) => {
    if (personas[position] == "undefined") {
      rej("no existe el ig de la persona");
    } else {
      res(personas[position].ig);
    }
  });
};

position = 1;

obtenerInfoPersonaName(position)
  .then((rpta) => {
    console.log(rpta);
    return obtenerInfoPersonaIG(position);
  })
  .then((rpta) => console.log(rpta));
