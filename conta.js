class Conta {

    // propriedades privadas
    #numero
    #saldo
    #titular

    constructor(numero, titular, saldoInicial){
        this.#numero = numero
        this.#titular = titular
        this.#saldo = saldoInicial
    }


    // getters - apenas para as variaveis privadas
    get saldo(){
        return this.#saldo
    }

    get titular(){
        return this.#titular
    }

    get numero(){
        return this.#numero
    }

    // setter - apenas para as variaveis privadas
    set titular(titular){
        this.#titular = titular
    }

    depositar(valor){
        this.#saldo += valor
    }

    sacar(valorSaque){
        if (valorSaque <= this.#saldo)
            this.#saldo -= valorSaque
        else
            console.log('*** Sem saldo')
    }

    toString(){
        return `Numero ${this.#numero} Titular: ${this.#titular} Saldo: R$${this.#saldo} `
    }
}


// cria objetos 
const conta1 = new Conta(1, 'Joao da Silva', 100)
const conta2 = new Conta(2, 'Maria da Silva', 0)

conta1.depositar(100)
conta1.sacar(150)
conta1.sacar(150)
conta2.titular = 'Joana Paz'

console.log(conta1.toString())
console.log(conta2.toString())
