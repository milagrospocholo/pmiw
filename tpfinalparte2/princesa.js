//Esta clase crea la princesa: guarda su posición y su imagen, y tiene un método que la dibuja en la pantalla.”
  class Princesa {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.img = princesaImg;
    }
  
    mostrar() {
      image(this.img, this.x, this.y);
    }
  }
