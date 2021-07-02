class Agencia {
  constructor(private agNumber: number) {

  }
}

class NumeroConta {
  constructor(private contaNumero: number) {
    
  }
}

class Saldo {
  constructor(private saldoInicial: number) {
    
  }
}


class Conta {
  private agencia: Agencia;

  private conta: NumeroConta;

  private saldo: Saldo;

  constructor(agencia: Agencia, conta: NumeroConta, saldo: Saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  }
}