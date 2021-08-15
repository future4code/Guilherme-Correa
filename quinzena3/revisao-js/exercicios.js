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

  let respostaA = booleano1 && booleano2 && !booleano4
  let respostaB = (booleano1 && booleano2) || !booleano3
  let respostaC = (booleano2 || booleano3) && (booleano4 || booleano1)
  let respostaD = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  let respostaE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const arrayVerificacao = [respostaA, respostaB, respostaC, respostaD, respostaE]

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
  objetoComparador.maiorNumero = numeroMaior
  objetoComparador.maiorDivisivelPorMenor = numeroDivisor
  objetoComparador.diferenca = numeroDiferença

  return objetoComparador
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let novoArray = []
  let primeiroMaiorNumero = -99999
  let primeiroMenorNumero = 99999
  let segundoMaiorNumero = -99999
  let segundoMenorNumero = 99999

  // --- SELECIONANDO O MAIOR E O MENOR ---
    for (const numero of array) {
      if (numero > primeiroMaiorNumero) {
        primeiroMaiorNumero = numero;
      }
      if (numero < primeiroMenorNumero) {
        primeiroMenorNumero = numero;
      }
    }
// --- REMOVENDO O MAIOR E O MENOR ---
    const indiceMaior = array.indexOf(primeiroMaiorNumero)
    array.splice(indiceMaior,1)

    const indiceMenor = array.indexOf(primeiroMenorNumero)
    array.splice(indiceMenor,1)

    if (array.length <= 0){
      segundoMaiorNumero = primeiroMenorNumero
      segundoMenorNumero = primeiroMaiorNumero

      novoArray.push(segundoMaiorNumero)
      novoArray.push(segundoMenorNumero)
  
      return novoArray
    }

// --- SELECIONANDO O SEGUNDO MAIOR E O MENOR ---
    for (const numero of array) {
      if (numero > segundoMaiorNumero) {
        segundoMaiorNumero = numero;
      }
      if (numero < segundoMenorNumero) {
        segundoMenorNumero = numero;
      }
    }
    novoArray.push(segundoMaiorNumero)
    novoArray.push(segundoMenorNumero)

    return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let arrayTemp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = arrayTemp
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {

 const objetoFilme = {
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
 }

 return objetoFilme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const objetoFilme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
  return `Venha assistir ao filme ${objetoFilme.nome}, de ${objetoFilme.ano}, dirigido por ${objetoFilme.diretor} e estrelado por ${objetoFilme.atores[0]}, ${objetoFilme.atores[1]}, ${objetoFilme.atores[2]}, ${objetoFilme.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: 0,
    altura: 0,
    perimetro: 0,
    area: 0
  } 
  retangulo.largura = lado1
  retangulo.altura = lado2
  retangulo.perimetro = 2 * (lado1 + lado2)
  retangulo.area = lado1 * lado2

  return retangulo
}

// EXERCÍCIO 15

function anonimizaPessoa(pessoa) {
  const novaPessoa = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return novaPessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let novoArray = []
  for (let maiores of arrayDePessoas){
    if(maiores.idade >= 18){
      novoArray.push(maiores)
    }
  }
  return novoArray
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let novoArray = []
  for (let menores of arrayDePessoas){
    if(menores.idade < 18){
      novoArray.push(menores)
    }
  }
  return novoArray
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let multiplicadorArray = []
  for (let numero of array){
    multiplicadorArray.push(numero * 2)
  }
  return multiplicadorArray
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let multiplicadorArray = []
  let novoArrayString = []

  for (let numero of array){
    multiplicadorArray.push(numero * 2)
  }
  for (let numero of multiplicadorArray){
    novoArrayString.push(numero.toString())
  }
  return novoArrayString
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let arrayParidade =[]

  for (let numero of array){
    if(numero % 2 === 0){
      numero = `${numero} é par`
    } else {
      numero = `${numero} é ímpar`
    }
    arrayParidade.push(numero)
  }
  return arrayParidade
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  let listaAutorizados =[]

  for (item of pessoas){
    if (item.altura >= 1.5 && item.idade > 14 && item.idade < 60) {
      listaAutorizados.push(item)
    }
  }
  return listaAutorizados
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  let listaNaoAutorizados =[]

  for (item of pessoas){
    if (item.altura >= 1.5 && item.idade > 14 && item.idade < 60) {
      // nada fazer
    } else {
      listaNaoAutorizados.push(item)
    }
  }
  return listaNaoAutorizados
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
