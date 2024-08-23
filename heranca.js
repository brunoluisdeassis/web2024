
// classe mae ou superclasse
class Animal{
    constructor(nome){
        this.nome = nome
    }

    // metodo que sera herdado
    falar(){
        console.log(`${this.nome} faz um som`) 
    }
}

// classe filha
class Cao extends Animal {
    // sobrescrita do método
    // sobrescreve o metodo falar da classe mae 
    falar(){
        console.log(`${this.nome} late: AU AU AU`)
    }
}

class Gato extends Animal{
    falar(){
        console.log(`${this.nome} mia: MIAU MIAU MIAU`)
    }

    arranhar(){
        console.log(`${this.nome} arranhando sofá`)
    }

    comer(){
        this.#comerWyskas()
    }
    // metodo privado
    #comerWyskas(){
        console.log('Gato comendo Wyskas')
    }
}

toto = new Cao('Totó')
toto.falar()

tom = new Gato(`Tom`)
tom.falar()
tom.arranhar()
tom.comer()


// exemplo de POLIMORFISMO
// criando um array de animais
const animais = [new Animal('Todos os animais'), new Cao('Ramon'), new Gato('Diogo')]
animais.forEach(animal => animal.falar())



