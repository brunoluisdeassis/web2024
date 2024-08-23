// importa o pacote com o protocolo http e salva no objeto http
const http = require('http')

// representa a maquina local
const hostname = '127.0.0.1'

//identifica este programa dentro da maquina local
const port = 3000 

//cria um objeto servidor, o qual recebe uma requisição e devolve uma reposta
const servidor = http.createServer((req, res) =>  {
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'text/html')
    res.end('<h2> Hello world </h2>')
})

// roda o servidor: fica escutando
servidor.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`)
})
