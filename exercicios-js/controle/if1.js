function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1) //não mostra pq retorna falso

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() //undefined    retorna false
seForVerdadeEuFalo(null)    // retorna false
seForVerdadeEuFalo(undefined)   // retorna false
seForVerdadeEuFalo(NaN) // retorna false
seForVerdadeEuFalo('')    // string vazia retorna false
seForVerdadeEuFalo(0)    // 0 é null -> retorna false
seForVerdadeEuFalo(-1) 
seForVerdadeEuFalo('?')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])