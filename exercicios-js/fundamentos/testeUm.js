var num1 = 0
var num2 = 0
var operador = 0
var resultado = 0

num1 = 8
num2 = 10
resultado = num1 + num2

console.log('O Resultado da soma é:', resultado)

if (num1 > num2) {
    console.log(num1, 'é maior que', num2)
}
    else {
        console.log(num1, 'não é maior que', num2)
    }

if (num1 > num2) {
    for (num1; num1 > num2; num1--)
    console.log('num1 é =', num1, 'e num2 é =', num2)
}
    else {
        console.log('num1 não é maior que num2', num1, num2)
    }

console.log('num1 = ', num1, 'e num2 = ', num2)

operador = 'olá mundo!'

console.log('num1 é', num1, 'num2 é ', num2, 'e "operador" é ', operador)
