const prod1 = {} // {chaves} define literal que é um objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 5000.01
prod1['desconto Legal'] = 0.40 //evitar atributos com espaço no nome

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo', //não esquecer vírgula entre atributos
    preco: 29,
    tamanho: 'P, M, G, X'
}

console.log(prod2)