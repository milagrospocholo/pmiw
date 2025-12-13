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
