var numero = 1
{
    let numero = 2 //let tem usabilidade maior para uso em bloco
    console.log('dentro =',numero) //o bloco está com o escopo de bloco do let
}
    console.log('fora =',numero)
// o escopo menor tem preferencia