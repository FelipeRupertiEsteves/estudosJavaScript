function area (largura, altura) {
    const calcarea = largura * altura
    if (calcarea > 20) {
        console.log(`Valor acima do permitido: ${calcarea}m².`)
    } else {
        return area
    }
}

console.log(area(2, 2)) //utilizando 2 parametros
console.log(area(2)) //utilizando apenas 1 parametro: NaN
console.log(area()) //não utilizando parametros: NaN
console.log(area(2, 3, 17, 22, 44)) //
console.log(area(5, 5))