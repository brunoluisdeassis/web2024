import { atualizarProduto, buscarProdutosPorId, inserirProduto, listarProdutos,  listarProdutosPorCategoria, apagarProduto } from "./db.js";
console.log('Listando todos os produtos...')
const lista = await listarProdutos()

//for funcional
lista.forEach(item => {
    console.log(item)
});

console.log('Buscando produto por id=2')
const produto = await buscarProdutosPorId(2)
console.log(produto)

console.log('Listando por categoria=1')
const porCategoria = await listarProdutosPorCategoria(1)
console.log(porCategoria)

console.log('Inserindo um produto')
//objeto javascript
const p = {
    descricao: 'Barra de cereais veganas',
    categoria: 1,
    preco: 19.99,
    quantidade: 5,
    url: 'cereais.png'
}

const inseriu = await inserirProduto(p)
if (inseriu.affectedRows == 1){
    p.id = inseriu.insertId
    console.log(p)
}else {
    console.log('Erro ao inserir produto')
}
console.log('Atualizando produto...')
const p2 = {
    id: 10,
    descricao: 'Barra de cereais veganas 2',
    categoria: 2,
    preco: 29.99,
    quantidade: 3,
    url: 'cereais.png'
}

const atualizou = await atualizarProduto(p2)
console.log(atualizou.affectedRows == 1) // true

console.log('apagando produto...')
const apagou = await apagarProduto(15)
console.log(apagou.affectedRows == 1) // true 

