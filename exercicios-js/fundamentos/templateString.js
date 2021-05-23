const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá 
    ${nome} !` // template string pode quebrar linhas, e buscar variáveis dentro da string ${}

console.log(concatenacao, template)

// expressoes
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)