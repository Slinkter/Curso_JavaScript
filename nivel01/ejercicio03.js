class Celular {
  constructor(color, peso, rdp, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.rdp = rdp;
    this.rdc = rdc;
    this.ram = ram;
    this.on = false;
  }

  precionarBotonEncendido() {
    if (this.on == false) {
      alert("prendiendo celular");
    } else {
      alert("celular apagado");
    }
  }

  reiniciar() {
    if (this.on == true) {
      alert("reiniciando celular");
    } else {
      alert("el celular esta apagado");
    }
  }

  tomarFoto(){
      
  }



}
