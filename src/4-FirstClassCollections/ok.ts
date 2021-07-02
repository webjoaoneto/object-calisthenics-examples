class Cargo {
  constructor(private nome: string) {
    
  }
}

class Funcionario {
  constructor(private nome: string, private cargo: Cargo) {
    
  }
}

class Setor {
  constructor(private nome: string) {
    
  }
} 

class Posicao {
  constructor(private funcionario: Funcionario, private setor: Setor) {

  }
}

class TimeDaEmpresa {
  private funcionarioPosicao: Posicao[] = [];

  adicionar(posicao: Posicao) {
    this.funcionarioPosicao.push(posicao);
  }
}


class MinhaEmpresa {
  private time: TimeDaEmpresa;
}

