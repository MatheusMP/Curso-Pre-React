export class ContaPoupanca{

    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    // Metodo para sacar
    sacar(valor){
        if(this._saldo < valor){
            return;
        }
        this._saldo -= valor;
        return valor;
    };

    // Metodo para deposito
    deposito(valor){
        if(valor <=  0){
            return;
        }
        this._saldo += valor;
    };

    transferir(val, conta){
        const valSacado = this.sacar(val);
        conta.deposito(valSacado);
    }
}