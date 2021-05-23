const escola = "Cod3r"

console.log(escola.charAt(4)) // selecionar um caracter dentro da string
console.log(escola.charAt(5)) // retornou vazio pois não possui um caracter 
console.log(escola.charCodeAt(3)) // mostra o valor da tabela UniCode
console.log(escola.indexOf('3')) // selecionar o índice apartir de um caracter

console.log(escola.substring(1)) // imprime apartir do íncie 1
console.log(escola.substring(0, 3)) // vai do índice 0 até o 3, sem incluir o índice 3

console.log('Escola '.concat(escola).concat("!")) // concatena as cadeias de caracteres(strings) podendo ser definidas dentro de aspas duplas" ou simples'
console.log('Escola ' + escola + "!") // concatena tbm (porém no contexto de números ele vai efetuar uma soma porém)

console.log(escola.replace(3,'e')) //Replace - trocou o número 3 pela letra e
console.log(escola.replace(/\w/g,'e')) //Replace com regex" para trocar tudo por "e" - conteúdo de outro curso.

console.log('Ana,Maria,Pedro'.split(','))  //separa o que tem entre as vírculas para separar em Arrays!