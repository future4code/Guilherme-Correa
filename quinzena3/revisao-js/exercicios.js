// EXERCÍCIO 01
function inverteArray(array) {
  let invertido = []
  for (let i = array.length -1; i >= 0; i--){
    invertido.push(array[i])
  }
  return invertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayPares = []
  for (let numeroPar of array){
    if (numeroPar % 2 === 0){
      numeroPar = numeroPar * numeroPar
      arrayPares.push(numeroPar)
    }
  }
  return arrayPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayPares = []
  for (let numeroPar of array){
    if (numeroPar % 2 === 0){
      arrayPares.push(numeroPar)
    }
  }
  return arrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for (let numero of array){
    if (numero > maiorNumero){
      maiorNumero = numero
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  let arrayVerificacao = []
  for (let i = 0; i >= 3; i++){
    console.log()
  }
  return arrayVerificacao
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let arrayPrimeirosNumeros = []

  for (let i = 0; i < n*2; i++){
    if (i % 2 === 0){
      arrayPrimeirosNumeros.push(i)
    }
  }
  return arrayPrimeirosNumeros
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  let tipoDeTriangulo 
  if (a === b && b === c){
    tipoDeTriangulo = "Equilátero"
   } else if (a === b && b !== c){
    tipoDeTriangulo = "Isósceles"
   } else {
    tipoDeTriangulo = "Escaleno"
   }
  return tipoDeTriangulo
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let numeroMaior = 0
  let numeroDivisor = 0
  let numeroDiferença = 0

  let objetoComparador = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: 0,
    diferenca: 0
  }
  
  
  if (num1 > num2){
    numeroMaior = num1
    if(numeroMaior % num2 === 0){
      numeroDivisor = true
    } else {
      numeroDivisor = false
    }
    numeroDiferença = numeroMaior - num2
  } else {
    numeroMaior = num2
    if(numeroMaior % num1 === 0){
      numeroDivisor = true
    } else {
      numeroDivisor = false
    }
    numeroDiferença = numeroMaior - num1
  }
  
  objetoComparador.maiorNumero = maiorNumero
  objetoComparador.maiorDivisivelPorMenor = numeroDivisor
  objetoComparador.diferenca = numeroDiferença

  return objetoComparador
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let novoArray = []
  let primeiroMaiorNumero = 0
  let segundoMaiorNumero = 0
  let primeiroMenorNumero = 0
  let segundoMenorNumero = 0

    for (const numero of array) {
      if (numero > primeiroMaiorNumero) {
        primeiroMaiorNumero = numero;
      }
      if (numero > segundoMaiorNumero && segundoMaiorNumero < primeiroMaiorNumero) {
        segundoMaiorNumero = numero;
      }
    }
    for (const numero of array) {
      if (numero < primeiroMenorNumero) {
        primeiroMenorNumero = numero;
      }
      if (numero < segundoMenorNumero && segundoMenorNumero < primeiroMenorNumero) {
        primeiroMenorNumero = numero;
      }
    }

    novoArray.push(segundoMaiorNumero)
    novoArray.push(segundoMenorNumero)

    return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
}

// EXERCÍCIO 12
function filmeFavorito() {

 const objetoFilme = {
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
 }
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
