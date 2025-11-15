class Rostro {
  //dibujar maquillaje/pelo encima de ella
  constructor(princesa) {
    this.princesa = princesa;
    this.maqSeleccionado = 0;
    this.peloSeleccionado = 0;
  }
// muestra opciones y aplica maquillaje
  mostrarMaquillaje() {
     // Muestro princesa base
    this.princesa.mostrar();

    // Íconos
    let iconos = [
      { x: 40, y: 400, w: 70, h: 50 },
      { x: 140, y: 400, w: 70, h: 50 },
      { x: 240, y: 400, w: 70, h: 50 }
    ];

    let imgs = [maqicono1Img, maqicono2Img, maqicono3Img];

    for (let i = 0; i < 3; i++) {
      let ico = iconos[i];
      image(imgs[i], ico.x, ico.y, ico.w, ico.h);

      // borde rosa si está seleccionado
      if (this.maqSeleccionado == i + 1) {
        noFill();
        stroke(255, 100, 150);
        strokeWeight(3);
        rect(ico.x - 5, ico.y - 5, ico.w + 10, ico.h + 10, 10);
      }
    }

    // Maquillaje aplicado
    if (this.maqSeleccionado == 1) image(maq1Img, this.princesa.x, this.princesa.y);
    if (this.maqSeleccionado == 2) image(maq2Img, this.princesa.x, this.princesa.y);
    if (this.maqSeleccionado == 3) image(maq3Img, this.princesa.x, this.princesa.y);
  }
//muestra opciones y aplica peinados
  mostrarPeinado() {
    this.princesa.mostrar();

    // Mostrar maquillaje ya puesto
    if (this.maqSeleccionado == 1) image(maq1Img, this.princesa.x, this.princesa.y);
    if (this.maqSeleccionado == 2) image(maq2Img, this.princesa.x, this.princesa.y);
    if (this.maqSeleccionado == 3) image(maq3Img, this.princesa.x, this.princesa.y);

    // Íconos de pelo
    let iconos = [
      { x: 40, y: 400, w: 70, h: 50 },
      { x: 145, y: 400, w: 60, h: 50 },
      { x: 240, y: 400, w: 70, h: 50 }
    ];

    let imgs = [peCoImg, peMaImg, peRuImg];

    for (let i = 0; i < 3; i++) {
      let ico = iconos[i];
      image(imgs[i], ico.x, ico.y, ico.w, ico.h);

      // borde rosa si está seleccionado
      if (this.peloSeleccionado == i + 1) {
        noFill();
        stroke(255, 100, 150);
        strokeWeight(3);
        rect(ico.x - 5, ico.y - 5, ico.w + 10, ico.h + 10, 10);
      }
    }

    // Mostrar pelo elegido
    if (this.peloSeleccionado == 1) image(coloradaImg, this.princesa.x, this.princesa.y);
    if (this.peloSeleccionado == 2) image(marronImg, this.princesa.x, this.princesa.y);
    if (this.peloSeleccionado == 3) image(rubioImg, this.princesa.x, this.princesa.y);
  }
 // DETECTAR QUÉ ICONO DE MAQUILLAJE SE CLICKEÓ
  detectarClickMaquillaje() {
    if (mouseX > 40 && mouseX < 110 && mouseY > 400 && mouseY < 450) return 1;
    if (mouseX > 140 && mouseX < 210 && mouseY > 400 && mouseY < 450) return 2;
    if (mouseX > 240 && mouseX < 310 && mouseY > 400 && mouseY < 450) return 3;
    return 0;
  }
// DETECTAR QUÉ ICONO DE PELO SE CLICKEÓ
  detectarClickPeinado() {
    if (mouseX > 40 && mouseX < 110 && mouseY > 400 && mouseY < 450) return 1;
    if (mouseX > 145 && mouseX < 205 && mouseY > 400 && mouseY < 450) return 2;
    if (mouseX > 240 && mouseX < 310 && mouseY > 400 && mouseY < 450) return 3;
    return 0;
  }
  // MOSTRAR TODO LO QUE EL USUARIO YA SELECCIONÓ
  // (para la pantalla final o cuando se vuelve atrás)
  mostrarSeleccion() {
    // Maquillaje
    if (this.maqSeleccionado == 1) image(maq1Img, this.princesa.x, this.princesa.y);
    if (this.maqSeleccionado == 2) image(maq2Img, this.princesa.x, this.princesa.y);
    if (this.maqSeleccionado == 3) image(maq3Img, this.princesa.x, this.princesa.y);

    // Pelo
    if (this.peloSeleccionado == 1) image(coloradaImg, this.princesa.x, this.princesa.y);
    if (this.peloSeleccionado == 2) image(marronImg, this.princesa.x, this.princesa.y);
    if (this.peloSeleccionado == 3) image(rubioImg, this.princesa.x, this.princesa.y);
  }
}
