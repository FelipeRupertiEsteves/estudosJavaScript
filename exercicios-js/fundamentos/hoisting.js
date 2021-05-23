// hoisting = içamento
// acontece apenas com var
console.log('a =',a) //ele viu a declaração na próxima linha, e disse que a era undefined
var a = 2           // então ele setou o valor de a
console.log('a =', a) //ai sim ele disse que a = 2

console.log('b =',b) //já com o let não funciona o Hoisting
let b = 2            // ele acusa de cara que b is not defined
console.log('b =',b)