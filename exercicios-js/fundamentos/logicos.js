function compras(trabalho1, trabalho2) {
    const compraSorvete = trabalho1 || trabalho2 // || -> OU
    const compraTv50 = trabalho1 && trabalho2 // && -> E
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise XOR
    const comprarTv32 = trabalho1 != trabalho2 
    const manterSaudavel = !compraSorvete //operador unário

    return { compraSorvete, compraTv50, comprarTv32, manterSaudavel}
}

console.log('01', compras(true, true))
console.log('02', compras(true, false))
console.log('03', compras(false, true))
console.log('04', compras(false, false))