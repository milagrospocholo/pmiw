// se encarga de calcular el puntaje del final 
class Puntaje {
  constructor() {

    this.valoresPelo = [3, 1, 2];      // colorado, marrón, rubio
    this.valoresMaq = [1, 3, 2];       // marrones, azules, verdes
    this.valoresVestido = [3, 2, 1];   // blanco, azul, rosa
  }

  calcular(pelo, maq, vestido) {
    return (
      this.valoresPelo[pelo - 1] +
      this.valoresMaq[maq - 1] +
      this.valoresVestido[vestido - 1]
    );
  }
}
