// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt("Insira a altura do retângulo:")
  const largura = prompt("Insira a largura do retângulo:")

  console.log(altura * largura)

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt("Insira o ano atual:")
  const anoNascimento = prompt("Insira o ano em que você nasceu:")

  console.log(anoAtual-anoNascimento)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt("Insira seu peso em Kq:")
  const altura = prompt("Insira sua altura em metros:")
  const IMC = peso/(altura*altura)

  console.log(IMC)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nomeUsuario = prompt("Qual seu nome?")
  const idadeUsuario = prompt("Qual a sua idade?")
  const emailUsuario = prompt("Qual seu e-mail?")

  console.log("Meu nome é " + nomeUsuario + ", tenho " + idadeUsuario + " anos, e o meu email é "+ emailUsuario + ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let cor1 = prompt('Qual sua cor favorita?')
  let cor2 = prompt('Qual sua segunda cor favorita?')
  let cor3 = prompt('Qual sua terceira cor favorita?')
  let cores = [cor1, cor2, cor3]
  console.log(cores)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const palavra = prompt("escreva uma palavra")

  console.log(palavra.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoEspetaculo = prompt("Qual o custo do espetáculo de teatro?")
  const valorIngresso = prompt("Qual o valor do ingresso?")

  const arrecadacao = custoEspetaculo / valorIngresso

  console.log(arrecadacao)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const palavra1 = prompt("escreva uma palavra:")
  const palavra2 = prompt("escreva outra palavra:")

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const palavra1 = prompt("escreva uma palavra:")
  const palavra2 = prompt("escreva outra palavra:")
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Escreva o ano atual:"))
  const anoNascimento = Number(prompt("Escreva o ano em que nasceu:"))
  const anoIdentidade = Number(prompt("escreva o ano em que seu RG foi emitido"))

  const renovacao20Anos = anoAtual - anoNascimento <= 20 && anoAtual - anoIdentidade <= 5
  const renovacaoMais20 = anoAtual - anoNascimento > 20 <= 50 && anoAtual - anoIdentidade <= 10
  const renovacaoMais50 = anoAtual - anoNascimento > 50 && anoAtual - anoIdentidade <= 15

  const renovacaoIdentidade = renovacao20Anos || renovacaoMais20 || renovacaoMais50
  console.log(renovacaoIdentidade)


}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = prompt("Insir um ano:")
  const anoBissexto = anoBissexto


}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const maiorIdade = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const possuiDisponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  

  console.log(maiorIdade && ensinoMedio && possuiDisponibilidade,)
}