const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: // para fazer mais de
        case 9: //uma opção,basta seguir
            console.log('Quadro de Honra')
            break //para sair do switch
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default: // caso nenhuma opção
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(7)
imprimirResultado(11)
imprimirResultado(5)
imprimirResultado(2)