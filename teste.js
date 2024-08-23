console.time()
var msg = 'primeira mensagem' 
/* string template*/
console.log(`${msg}`)
/* for só aceita 3 valores*/
for(let i=0; i < 5; i++){
    console.log(`Contador i= ${i}`)
}
console.timeEnd()