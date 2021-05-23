console.log(Math.ceil(6.1)) //Math é um object .ceil uma função(que arredonda pra cima)

const obj1 = {}
obj1.nome = 'Bola'
// mesmo que: obj1['nome'] = 'Bola'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)