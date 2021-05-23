let contador = 1 //declaração de variável
while (contador <= 10) {    //expressão
    console.log(`contador = ${contador}`)
    contador++  //incremento
}


//  declaração expressão incremento
//     |          |      |
//     \/         \/     \/ 
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`notas = ${notas[i]}`)
}