function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 /* diferente da estrutura while, pode iniciar com o -1 pois na linha 10 será reescrito o valor de opcao apartir da funcao getInteiroAleatorioEntre */

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Até a próxima.')