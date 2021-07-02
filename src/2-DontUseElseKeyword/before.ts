class Pessoa {
  private idade: number;


  constructor(idade: number) {
    this.idade = idade;
  }


  isAdulto(): boolean {
    let isAdulto: boolean;

    if (this.idade > 18) {
      isAdulto = true;
    } else {
      isAdulto = false;
    }

    return isAdulto;
  }

  podeDirigir(): boolean {
    if (this.isAdulto()) {
      return true;
    } else {
      return false;
    }
  }
}