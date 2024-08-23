// prototype no javascript é um objeto no qual novos objetos herdam propriedades e metodos


// funcao construtora
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.saudacao = function(){
    return `Ola meu nome é ${this.nome}, idade: ${this.idade}`  
}

const joao = new Pessoa('Joao', 30)
console.log(joao.saudacao())
console.log('---------------------------------')

// podemos usar o prototipo para herdar propriedades e metodos 

function Funcionario(nome, idade, cargo){
    // chama o construtor do objeto pessoa para guardar as propriedades nome e idade
    Pessoa.call(nome, idade)
    this.nome = nome
    this.idade = idade
    // propriedade cargo é guardado no objeto Funcionario
    this.cargo = cargo
}

Funcionario.prototype = Object.create(Pessoa.prototype)
Funcionario.prototype.constructor = Funcionario

const tereza = new Funcionario('Tereza', 25, 'Programadora')
console.log(tereza)
console.log(tereza.saudacao())