var indice_imagem = 1
var opacidade = 1
var reduzir = true /* variavel de controle*/

function trocar_imagem(){
    const imagem = document.getElementById('imagem')
    indice_imagem++
    if(indice_imagem > 7)
        indice_imagem = 1
    imagem.src = 'https://softgraf.com/img/img' + indice_imagem + '.jpg'
}

function mudar_opacidade() {
    const imagem = document.getElementById('imagem')

    if(reduzir)
        opacidade = opacidade - 0.1
    else
        opacidade = opacidade + 0.1

    imagem.style.opacity = opacidade

    if((opacidade <= 0.1) || (opacidade >= 1))
        reduzir = !reduzir

}

function mover_imagem(){
    const imagem = document.getElementById('imagem')
    let margem_esquerda = parseInt(imagem.style.marginLeft) 
    let largura_tela = window.innerWidth
    let largura_imagem = imagem.clientWidth
    
    if (Number.isNaN(margem_esquerda))
        margem_esquerda = 50
    else
        margem_esquerda = margem_esquerda + 50
    
    if (margem_esquerda > largura_tela)
        margem_esquerda = - largura_imagem

    imagem.style.marginLeft = margem_esquerda + 'px';

    console.log(margem_esquerda)
}


function auto_mover(){
    setInterval('mover_imagem()', 500)
}
    
function auto_trocar() {
    setInterval('trocar_imagem()', 1000)
}

function auto_opacidade(){
    setInterval('mudar_opacidade()', 100)
}


    