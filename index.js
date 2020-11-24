import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js' ;
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js';

const cliente = new Cliente('Ricardo',11122233309);

const contaCorrente = new Conta(0, cliente, 101);
contaCorrente.deposito(400);

const contaPoupanca = new Conta(50, cliente, 101);

console.log(contaCorrente);
console.log(contaPoupanca);