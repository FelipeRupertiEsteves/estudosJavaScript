//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //ele reconhece a mas não o b, por isso soma a + b -> 2 + b e diz NaN ( not a number)
imprimirSoma(2, 3, 4, 5, 6, 7, 8) //reconhece apenas 2 e 3 referente a a e b
imprimirSoma() //NaN

//Funcao com retorno
function soma(a, b = 0) {   //neste caso por padrão b está setado a zero
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) //agora reconhece b como zero e não causa NaN
