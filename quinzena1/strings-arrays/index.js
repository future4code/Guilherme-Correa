// Exercícios de interpretação de código

// EXERCÍCIO 1
let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) //f. 9

// EXERCÍCIO 2

const frase = prompt("Digite uma frase")
// Subi num ônibus em Marrocos

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
Resposta: SUBI NUM ÔNIBUS EM MIRROCO //27


// Exercícios de escrita de código
// EXERCÍCIO 1
const nomeDoUsuario = prompt("Digite seu nome:")
const emailDoUsuario = prompt("Digite seu e-mail")

const resposta = `O e-mail ${emailDoUsuario} foi cadatrado com sucesso. Seja bem-vindo(o), ${nomeDoUsuario}`

console.log(resposta)

// EXERCÍCIO 2

const comidasFavoritas  = ["Macarrão", "Lasanha", "Bife com Batata Frita", "Pizza", "Coxinha"]
console.log(comidasFavoritas)

console.log("Essas são as minhas comidas preferidas: ", comidasFavoritas)

const comidasFavoritasUsuario = prompt("Digite sua comida favorita:")
comidasFavoritas[1] = comidasFavoritasUsuario
console.log(comidasFavoritas)


// EXERCÍCIO 3

let listaDeTarefas = []

listaDeTarefas.push(prompt("Digite a tarefa 1:"))
listaDeTarefas.push(prompt("Digite a tarefa 2:"))
listaDeTarefas.push(prompt("Digite a tarefa 3:"))

console.log(listaDeTarefas)
let itemEscolha = prompt("Digite um item (0 a 2):")

listaDeTarefas.splice(itemEscolha, itemEscolha)
console.log(listaDeTarefas)