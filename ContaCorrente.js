import { Cliente } from './Cliente.js';

export class ContaCorrente{
    set cliente(nVal){
        if(nVal instanceof Cliente){
            this._cliente = nVal;
        }
    }
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
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
};
