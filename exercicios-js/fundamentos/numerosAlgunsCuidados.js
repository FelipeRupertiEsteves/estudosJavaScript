console.log(7/0) //divisão por zero é infinito , não gera erro
console.log("10" /2) //cuidado pois nem sempre ele vai reconhecer uma string como número para o cálculo
console.log("10,5" / 2) //aqui por exemplo ele não calcula - NaN (not a number)
console.log(0.1 + 0.7) // gera uma imprecisão. CUIDADO!
// console.log(10.toString()) não funciona
console.log((10.345).toFixed(2)) /*colocar em parenteses para
definir o numero, não diretamente na função toFixed() */