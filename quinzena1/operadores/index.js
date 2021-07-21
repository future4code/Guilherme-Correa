//Exercícios de interpretação de código

//EXERCÍCIO 1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)  //FALSE

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) //FALSE

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) //TRUE

// console.log("d. ", typeof resultado) //BOOLEANO

//EXERCÍCIO 2
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma) // SERÁ IMPRESSO A CONCATENAÇÃO DOS DOIS NUMEROS INSERIDOS POIS ESTÃO COMO STRING

//EXERCÍCIO 3
// let primeiroNumero = Number(prompt("Digite um numero!"))// TRANSFORMAR EM NUMERO
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma) 



// Exercícios de escrita de código
//EXERCÍCIO 1
let idade = Number(prompt("Digite sua idade"))
let idadeMelhorAmigo = Number(prompt("Digite a idade do seu melhor amigo ou da sua melhor amiga"))

let diferencaIdade = idade - idadeMelhorAmigo
console.log("Voce é mais velho que seu amigo:", idade > idadeMelhorAmigo)
console.log("A diferença de idade sua para a dele é:", diferencaIdade)


//EXERCÍCIO 2
let numeroPar = Number(prompt("Digite um número par"))
resultado = numeroPar % 2
console.log(resultado)

// O PADRÃO É QUE SEMPRE SAI 0 POIS NÃO SOBRA NÚMEROS
// AO INSERIR UM NÚMERO IMPAR IRA APARECER O NUMERO RESTANTE DA DIVISÃO.


//EXERCÍCIO 3
let anoNascimento = Number(prompt("Digite o ano em que você nasceu:"))
// console.log(anoNascimento)
// a) A idade do usuário em meses
// b) A idade do usuário em dias
// c) A idade do usuário em horas


// EXERCICIO 4
let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite outro número:"))

let resultadoDiv1 = primeiroNumero / segundoNumero
let resultadorDiv2 = segundoNumero / primeiroNumero

console.log("O primeiro numero é maior que segundo?" , primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?" , primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?" , resultadoDiv1 === 1)
console.log("O segundo numero é divisível pelo primeiro?" , resultadorDiv2 === 1)

