// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO


    /* EXERCÍCIO 1
    Linha 1: 10
    Linha 2: 10, 5
    */


    /* EXERCÍCIO 2
    10, 10, 10
    */


    /* EXERCÍCIO 3
    let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
    let salarioDia = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${salarioDia/horasTrabalhadas} por hora`)
    */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO


    //EXERCÍCIO 1
    let nome
    console.log(typeof nome)
    let idade
    console.log(typeof idade)

/* foi impresso underfined pois a variavel esta indefinida, 
tanto em valor quanto em tipo
*/

    let nome = prompt("Qual seu nome?")
    let idade = prompt("Qual sua idade?")

/* Para que essa funcionasse, aa mesmas
tinham valores underfined, ja nexta declaração ganham 
outro atributo "String"
*/
    console.log(typeof idade)
    console.log(typeof nome)

/* foram devolvidas como String pois for 
atribuido um valor a elas, no caso texto */

console.log("Olá", nome, "você tem", idade, "anos.")


//EXERCÍCIO 2

let perguntaTrabalha = "Você trabalha?"
let perguntaLabenu = "Você gosta do curso da Labenu?"
let perguntaVacina = "Você tomou a vacina?"

let seTrabalha = prompt(perguntaTrabalha)
let gostaDaLabenu = prompt(perguntaLabenu)
let tomouVacina = prompt(perguntaVacina)

console.log(perguntaTrabalha, seTrabalha)
console.log(perguntaLabenu, gostaDaLabenu)
console.log(perguntaVacina, tomouVacina)

//EXERCÍCIO 3

let a = 10
let b = 25
let c

// Aqui faremos uma lógica para trocar os valores
c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10



//DESAFIO

let primeiroNumero = Number (prompt("Vamos fazer conta, Insira um número:"))
let segundoNumero = Number (prompt("Insira outro número:"))

console.log("1. O primeiro número somado ao segundo número resulta em:", primeiroNumero+segundoNumero,".")
console.log("2. O primeiro número multiplicado pelo segundo número resulta em:", primeiroNumero*segundoNumero,".")
