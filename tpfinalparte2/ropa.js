class Ropa {
  constructor(x, y) {
      // Posición donde se va a dibujar el vestido elegido
    this.x = x;
    this.y = y;

    this.vestidoSeleccionado = 0;
//Arreglo con las imágenes de los vestidos
    this.vestidos = [vestido1, vestido2, vestido3];

    // Coordenadas y tamaños de los iconos que se ven abajo
   this.iconos = [
  { x: 50,  y: 380, w: 90, h: 120 },
  { x: 170, y: 380, w: 90, h: 120 },
  { x: 290, y: 380, w: 90, h: 120 }
];

  } 
// dibuja el vestido elegido 
  mostrar() {
    if (this.vestidoSeleccionado > 0) {
      let img = this.vestidos[this.vestidoSeleccionado - 1];
      image(img, this.x, this.y);
    }
  }

//dibuja los iconos de las opciones
  mostrarOpciones() {
    for (let i = 0; i < this.vestidos.length; i++) {
      let ico = this.iconos[i];
      let img = this.vestidos[i];

      // Mantener proporción
      let proporcion = img.height / img.width;
      let nuevoAlto = ico.w * proporcion;

      // Centrar verticalmente
      let yCentrada = ico.y + (ico.h - nuevoAlto) / 2;

      image(img, ico.x, yCentrada, ico.w, nuevoAlto);

      // Contorno si está seleccionado
      if (this.vestidoSeleccionado == i + 1) {
        noFill();
        stroke(255, 100, 150);
        strokeWeight(3);
        rect(ico.x - 5, ico.y - 5, ico.w + 10, ico.h + 10, 10);
      }
    }
  }

// detecta el click y seleciona el vestido
  seleccionar() {
    for (let i = 0; i < this.iconos.length; i++) {
      let ico = this.iconos[i];

      if (
        mouseX > ico.x &&
        mouseX < ico.x + ico.w &&
        mouseY > ico.y &&
        mouseY < ico.y + ico.h
      ) {
        this.vestidoSeleccionado = i + 1;
      }
    }
  }
} 
