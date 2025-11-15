//milagros pocholo
//comi 5
//link del video: https://youtu.be/nOSw5czAmdw

let juego;
let fondoImg, princesaImg;
let maq1Img, maq2Img, maq3Img;
let peCoImg, peMaImg, peRuImg;
let maqicono1Img, maqicono2Img, maqicono3Img;
let coloradaImg, marronImg, rubioImg;
let vestido1, vestido2, vestido3;
let ganaste, perdiste, creditos;
let sonidoClick, sonidoGanaste, sonidoPerdiste, sonidoVolver;



function preload() {
  // fondo y base
  fondoImg = loadImage("data/fondo.jpg");
  princesaImg = loadImage("data/princesa.png");

  // Maquillajes
  maq1Img = loadImage("data/maq1.png");
  maq2Img = loadImage("data/maq2.png");
  maq3Img = loadImage("data/maq3.png");
  maqicono1Img = loadImage("data/maqicono1.png");
  maqicono2Img = loadImage("data/maqicono2.png");
  maqicono3Img = loadImage("data/maqicono3.png");

  // Peinados
  peCoImg = loadImage("data/peCo.png");
  peMaImg = loadImage("data/peMa.png");
  peRuImg = loadImage("data/peRu.png");
  coloradaImg = loadImage("data/colorada.png");
  marronImg = loadImage("data/marron.png");
  rubioImg = loadImage("data/rubio.png");

  // Ropa
  vestido1 = loadImage("data/vestido1.png");
  vestido2 = loadImage("data/vestido2.png");
  vestido3 = loadImage("data/vestido3.png");

  // del Final
  ganaste = loadImage("data/ganaste.png");
  perdiste = loadImage("data/perdiste.png");
  creditos = loadImage("data/creditos.png");

  // Sonido
  sonidoClick  = loadSound("data/click.wav");
  sonidoGanaste  = loadSound("data/ganaste.wav");
  sonidoPerdiste  = loadSound("data/perdiste.wav");
  sonidoVolver  = loadSound("data/volver.wav");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(fondoImg);
  juego.mostrar();
}

function mousePressed() {
  juego.mousePresionado();
}
