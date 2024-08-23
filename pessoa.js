// declaracao da classe

class Pessoa {

    // Encapsulamento 
    // propriedades privadas: #
    #nome 
    #idade

    //construtor da classe: chamado por new Pessoa()
    constructor(nome, idade){
        this.#nome = nome 
        this.#idade = idade
    }

    //metodo da classe //
    falar(){
        console.log(`Ola, meu nome é ${this.#nome} e tenho ${this.#idade} anos.`)
    }
}

// cria objetos 
const pessoa1 = new Pessoa('João', 30)
pessoa1.falar()

const pessoa2 = new Pessoa('Maria', 29)
pessoa2.falar()