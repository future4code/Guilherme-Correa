
// --- Exercícios de interpretação de código ---

//--------------------------------EXERCÍCIO 1---------------------------------------
/* 
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

R: ele vai imprimir a somma de valor+i atribuita a valor = 10

*/ 

//--------------------------------EXERCÍCIO 2---------------------------------------
/* 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

R: ira imprimir todos os numeros maiores de 18 = 19, 21, 23, 25, 27, 30
R: poderia usar o while ou somente for.
*/

//--------------------------------EXERCÍCIO 3---------------------------------------
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

R: ira aparecer 4 linhas cada inha com sua quantidade respectiva de *
*/


// --- Exercícios de escrita de código ---
//--------------------------------EXERCÍCIO 1---------------------------------------
// let animaisDeEstimacao = Number(prompt("Quantos animais de estimação você tem?"))
// let arrayNomeDosAnimais = []

// if (animaisDeEstimacao === 0) {
//   console.log("Que pena! Você pode adotar um pet!")
// } 
// if (animaisDeEstimacao > 0) {
//   for (let i = 0; i < animaisDeEstimacao; i++) {
//     arrayNomeDosAnimais.push(prompt("Digite o nome do seu pet:"))
//   }
//   console.log(`Os nomes dos seus pets são: ${arrayNomeDosAnimais}`)
// }


//--------------------------------EXERCÍCIO 2---------------------------------------
// const arrayOriginal = [2,22,24,45,6,8]

// function verificandoArray(arrayOriginal) {
//   for (numeros of arrayOriginal) {
//     console.log(numeros)
//   }
// }
// verificandoArray(arrayOriginal)

// function divisaoArray(arrayOriginal) {
//   for (number of arrayOriginal) {
//     console.log(number / 10)
//   }
// }
// divisaoArray(arrayOriginal)

// function novoArrayPar(arrayOriginal) {
//   let arrayPar = [] 
//   for (number of arrayOriginal) {
//     if (number % 2 === 0) {
//       arrayPar.push(number)
//     }
//   }
//   console.log(arrayPar)
// }
// novoArrayPar(arrayOriginal)

// function arrayString(arrayOriginal) {
//   let novoArrayString = []
//   let i = 0
//   for (numero of arrayOriginal) {
//     novoArrayString.push(`O elemento do índex ${i} é: ${numero}`)
//     i++
//   }
//   console.log(novoArrayString)
// }
// arrayString(arrayOriginal)

// function maiorEMenor(arrayOriginal) {
//   let valorMaximo = 0
//   let valorMinimo = 99999
//   for (numero of arrayOriginal) {
//     if (numero > valorMaximo) {
//       valorMaximo = numero
//     }
//     if (numero < valorMinimo) {
//       valorMinimo = numero
//     }
//   }
//  console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)
// }
// maiorEMenor(arrayOriginal)


//--------------------------------DESAFIO---------------------------------------
console.log("Vamos jogar!")

function verificacaoNumero (){
  let numeroEscolhido = Number(prompt("Escolha um numero e escreva aqui:"))
  let chute = Number(prompt("Chute um numero:"))
  let tentativas = 1

  while (chute !== numeroEscolhido) {
    if(chute > numeroEscolhido){
      console.log(`O número chutado foi: ${chute}`)
      console.log(`Errrrrrrrou, é menor`)
      chute = Number(prompt("Chute um novo numero:"))
    } else if (chut < numeroEscolhido){
      console.log(`O número chutado foi: ${chute}`)
      console.log(`Errrrrrrrou, é maior`)
      chute = Number(prompt("Chute um novo numero:"))
    }
    tentativas++
  }
  if (chute === numeroEscolhido){
    console.log(`O número chutado foi: ${chute}`)
    console.log("Acertou!!")
    console.log(`O número de tentativas foi: ${tentativas}`)
  }
}
verificacaoNumero()