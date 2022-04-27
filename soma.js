
function soma(){
    let soma = 0
    for ( i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(1, a, 2, b)