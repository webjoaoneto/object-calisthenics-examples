class Cargo {
  constructor(private nome: string) {
    
  }
}

class Funcionario {
  constructor(private nome: string, private cargo: Cargo) {
    
  }
}

class MinhaEmpresa {
  private funcionariosTimeFinanceiro: Funcionario[] = [];
  private funcionariosTimeMarketing: Funcionario[] = [];
  private funcionariosTimeSuporte: Funcionario[] = [];
}