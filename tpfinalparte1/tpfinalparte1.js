// comicion 4
// Milagros pocholo
//link del video: https://youtu.be/JoG21KKq8Bc
let estado = 0;
let imagenes;
let textos; 
let sonido;


function preload() {
  sonido = loadSound('data/sonido.mp3');
  
  imagenes = [];
  for (let i = 0; i <= 22; i++) {
   imagenes[i] = loadImage('data/img-' + i + '.jpg');
  }
  
   textos = loadStrings("data/textos.txt");
}

function setup() {
  createCanvas(640,480);
  textAlign(CENTER, CENTER);

}

function draw() {
  background(220);
  mostrarPantalla();
}

function mostrarPantalla() {
  if (estado < imagenes.length) {
    image(imagenes[estado], 0, 0, 640,480);
  }
  if (estado == 2 || estado == 6 || estado == 10) {
    dibujarBoton(200, 410, 90, 30, "Opción 1");
    dibujarBoton(400, 410, 90, 30, "Opción 2");
    if(estado == 2){ 
      fill(255);
      textSize(13);
      text("Se va a las montañas", 245, 390); 
      text("Se va al castillo del rey", 445, 390); 
    }
     if(estado == 6){ 
      fill(255);
      textSize(13);
      text("lo persiguen", 245, 390); 
      text("es admirado por el pueblo", 445, 390);  
    }
     if(estado == 10){ 
      fill(255);
      textSize(13);
      text("Acepta", 245, 390);
      text("rechaza", 445, 390); 
    }
  }
  if (!(estado == 2 || estado == 6 || estado == 10 || estado == 8 || estado == 14 || estado == 22)) {
    dibujarBoton(530, 400, 100, 30, "Continuar");
  }
  if (estado == 8 || estado == 14 || estado == 22) {
    dibujarBoton(90, 410, 80, 30, "Reiniciar");
  }
  
  if (estado < textos.length) {
  fill(0);
  textSize(20);
  let margen = 40; // distancia desde los bordes
  let anchoTexto = width - margen * 2;
  textAlign(CENTER); // Alinea el texto arriba del punto
  text(textos[estado], margen, 20, anchoTexto, 100); 
 }
}

function dibujarBoton(x, y, ancho, alto, texto) {
  fill(255);
  stroke(0);
  rect(x, y, ancho, alto, 5);
  fill(0);
  noStroke();
  textSize(16);
  text(texto, x + ancho / 2, y + alto / 2);
}

function botonClickeado(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}

function mousePressed() {
   if (!sonido.isPlaying()) {
    sonido.loop(); // ahora sí va a sonar
    sonido.setVolume(0.5); // volumen al 50%
  }
  
  if (botonClickeado(530, 400, 100, 30)) { 
    if (estado == 0) estado = 1;
    else if (estado == 1) estado = 2;
    else if (estado == 3) estado = 4;
    else if (estado == 4) estado = 5;
    else if (estado == 5) estado = 6;
    else if (estado == 7) estado = 8;
    else if (estado == 9) estado = 10;
    else if (estado == 11) estado = 12;
    else if (estado == 12) estado = 13;
    else if (estado == 13) estado = 14;
    else if (estado == 15) estado = 16;
    else if (estado == 16) estado = 17;
    else if (estado == 17) estado = 18;
    else if (estado == 18) estado = 9;
    else if (estado == 19) estado = 20;
    else if (estado == 20) estado = 21;
    else if (estado == 21) estado = 22;
  }

  if (estado == 2) {
    if (botonClickeado(200, 410, 90, 30)) estado = 3;
    if (botonClickeado(400, 410, 90, 30)) estado = 15;
  }
  if (estado == 6) {
    if (botonClickeado(200, 410, 90, 30)) estado = 7;
    if (botonClickeado(400, 410, 90, 30)) estado = 9;
  }
  if (estado == 10) {
    if (botonClickeado(200, 410, 90, 30)) estado = 11;
    if (botonClickeado(400, 410, 90, 30)) estado = 19;
  }
  if ((estado == 8 || estado == 14 || estado == 22) &&
      botonClickeado(90, 410, 80, 30)) {
    reiniciarPrograma();
  }
}

function reiniciarPrograma() {
  estado = 0;
 sonido.stop();
}
