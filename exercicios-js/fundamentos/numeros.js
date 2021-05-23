const peso1 = 1 //seria valor ponto flutuante
const peso2 = 2

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed define o numero de casas decimais, sem alterar o valor da const
console.log(media.toString(2)) // em binário

