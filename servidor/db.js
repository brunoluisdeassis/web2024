// importa o modulo do mysql
//~dois sistemas de importacao: modular e nao modelar
import mysql from 'mysql2/promise'

async function conectar(){
    if (global.conexao && global.conexao.state != 'disconnected')
        return global.conexao

    // cria conexao com o banco de dados 
    const conexao = mysql.createConnection({
        user: 'root',
        password: 'softgraf',
        host: 'localhost',
        port: 3306, 
        database: 'mundoverde'
    })

    console.log("conectou ao mysql")
    // objeto de acesso global
    global.conexao = conexao;
    //retorna uma conexao
    return conexao;
}

// primeiro passo  conectar()
// desestruturação do array / json
export async function listarProdutos(){
    //obtem a conexao
    const con = await conectar()
    const sql = 'SELECT * FROM Produtos'
    const [dados] = await con.query(sql)
    console.log(dados)
    return dados
}

export async function buscarProdutosPorId(id){
    const con = await conectar()
    const sql = 'SELECT * FROM Produtos WHERE id=?'
    // obtém somente o primeiro item da lista
    const [produto] = await con.query(sql, id)
    return produto
}

export async function listarProdutosPorCategoria(categoria){
    const con = await conectar()
    const sql = 'select * from Produtos where categoria=?'
    //obtem somente o 1 item da lista
    const [lista] = await con.query(sql, categoria)
    return lista
}

export async function inserirProduto(produto){
    const con = await conectar()
    const sql = 'INSERT INTO Produtos (descricao, categoria, preco, quantidade, url) VALUES (?, ?, ?, ?, ?)'
    const valores = [produto.descricao, produto.categoria, produto.preco, produto.quantidade, produto.url]
    const retorno = await con.query(sql, valores)
    return retorno[0]
    
}

export async function atualizarProduto(produto){
    const con = await conectar()
    const sql = 'UPDATE Produtos SET descricao=?, categoria=?, preco=?, quantidade=?, url=? WHERE id=?'
    const valores = [produto.descricao, produto.categoria, produto.preco, produto.quantidade, produto.url, produto.id]
    const retorno = await con.query(sql, valores)
    return retorno[0]
}

export async function apagarProduto(id){
    const con = await conectar()
    const sql = "DELETE FROM Produtos WHERE id=?"
    const retorno = await con.query(sql, id)
    return retorno[0]
}

