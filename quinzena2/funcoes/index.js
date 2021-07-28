// Exercícios de interpretação de código

// EXERCÍCIO 1

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }
// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))


// a) O que vai ser impresso no console?
// R: 10 e 50

// b) O que aconteceria se retirasse os dois console.log e 
// simplesmente invocasse a função minhaFuncao(2) 
// e minhaFuncao(10)? O que apareceria no console?

// R: nada, a função vai inserir os 2 valores, mas não vai devolver nada 
// pois não tem comando solicitando a exibição dos valores e resultados.

// EXERCÍCIO 2

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a) Explique o que essa função faz e qual é sua utilidade

// esta função vai buscar no texto digitado pelo usuário a palavra cenoura e devouve a resposta desta busca. 
// a utilidade dela é bem importante em buscar itens em um input do usuário, mas antes essa informação é tratada.

//  b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i.   Eu gosto de cenoura
// R. VERDADEIRO

// ii.  CENOURA é bom pra vista
// R. VERDADEIRO

// iii. Cenouras crescem na terra
// R. VERDADEIRO


// Exercícios de escrita de código
// EXERCÍCIO 1

// a)
function minhasInfos(){
    console.log("Eu sou Guilherme, tenho 32 anos, moro em São Paulo e sou estudante da Labenu.")
}
minhasInfos()

// b)

function minhasInfos2(){
    let nome = prompt("Insita seu nome:")
    let idade = Number(prompt("Insita sua idade:"))
    let endereço = prompt("Insita seu endereço:")
    let profissao = prompt("Insita sua profissão:")     
    console.log(`eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao}.`)

}
minhasInfos2()

// EXERCÍCIO 2
// a)
function somaNumero (numero1, numero2){
    let numero = numero1 + numero2
    return numero
}
console.log(somaNumero(10, 14))

//  b)

function booleanoNumero (numero1, numero2){
    let resultado = numero1 >= numero2
    console.log(resultado)
}
booleanoNumero(10, 5)

// c)
function verificacaoPar (){
    let numero = Number(prompt("Insita um número:"))
    console.log(numero % 2 === 0)
}
verificacaoPar ()

// d)
function conteMenssagem (){
        let menssagem = prompt("Escreva uma menssagem:")
        console.log(menssagem.length, menssagem.toUpperCase())
        
    }
    conteMenssagem ()

// EXERCÍCIO 3

let numero1 = Number(prompt("Insira um número:"))
let numero2 = Number(prompt("Insira outro número:"))

function operacaoSoma(){
    let soma = numero1 + numero2
    return soma
}

function operaçãoSubtracao(){
    let subtracao = numero1 - numero2
    return subtracao
}
function operacaoMultiplicacao(){
    let multiplicacao = numero1 * numero2
    return multiplicacao
}
function operacaoDivisao(){
    let divisao = numero1 / numero2
    return divisao
}

console.log(`Números inseridos: ${numero1} e ${numero2}`)
console.log("Soma:",operacaoSoma())
console.log("Diferença:", operaçãoSubtracao())
console.log("Multiplicação:", operacaoMultiplicacao())
console.log("Divisão:", operacaoDivisao())



