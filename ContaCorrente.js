import { Cliente } from './Cliente.js';

export class ContaCorrente{
    agencia;

    #cliente;
    set cliente(nVal){
        if(nVal instanceof Cliente){
            this.#cliente = nVal;
        }
    }
    get cliente(){
        return this.#cliente;
    }

    #saldo = 0; // Propriedade privada

    get saldo(){
        return this.#saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
    }

    // Metodo para sacar
    sacar(valor){
        if(this.#saldo < valor){
            return;
        }
        this.#saldo -= valor;
        return valor;
    };

    // Metodo para deposito
    deposito(valor){
        if(valor <=  0){
            return;
        }
        this.#saldo += valor;
    };

    transferir(val, conta){
        const valSacado = this.sacar(val);
        conta.deposito(val);
    }
};
