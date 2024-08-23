class Configuracao{

    // propriedade estatica
    static versao = '1.0.0'
    
    // metodo estatico
    static obterVersao(){
        return Configuracao.versao
    }
}

console.log(Configuracao.versao)
console.log(Configuracao.obterVersao())