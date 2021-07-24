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

  console.log("Meu nome é " + nomeUsuario + ", tenho " + idadeUsuario + " anos, e o meu email é " + emailUsuario +".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let coresFavoritas = [0, 1, 2]
  coresFavoritas[0] = prompt('Qual sua cor favorita?')
  coresFavoritas[1] = prompt('Qual sua segunda cor favorita?')
  coresFavoritas[2] = prompt('Qual sua terceira cor favorita?')

  console.log(coresFavoritas)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const palavraMaiuscula = prompt("Escreva uma palavra:")

  console.log(palavraMaiuscula.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoDoEspetaculo = prompt("Qual o custo de um espetáculo de teatro?")
  const valorIngresso = prompt("Qual o valor de cada ingresso?")

  console.log(custoDoEspetaculo/valorIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let palavraUm = prompt("Escreva uma palavra:")
  let palavraDois = prompt("Escreva outra palavra:")

  let tamanhoUm = palavraUm.length
  let tamanhoDois = palavraDois.length

  console.log(tamanhoUm === tamanhoDois)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let palavraUm = prompt("Escreva uma palavra:")
  let palavraDois = prompt("Escreva outra palavra:")

  console.log(palavraUm.toUpperCase() === palavraDois.toUpperCase())
  
 
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Escreva o Ano Atual:"))
  let anoNascimento = Number(prompt("Escreva o Ano em que Nasceu:"))
  let anoRG = Number(prompt("Escreva o Ano que seu Rg foi emitido:"))

  let renovacaoIdade = (anoAtual - anoNascimento)
  let renovacaoRg = (anoAtual - anoRG)

  let renovacao20anos = renovacaoIdade <= 20 && renovacaoRg >= 5
  let renovacao50anos = renovacaoIdade > 20 && renovacaoIdade <= 50 && renovacaoRg >= 10
  let renovacaoMais50 = renovacaoIdade > 50 && renovacaoRg >= 15

  console.log(renovacao20anos || renovacao50anos || renovacaoMais50)

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Escreva o Ano Atual:"))
  let primeiroCalculo = anoAtual % 400 === 0
  let segundoCalculo = anoAtual % 4 === 0
  let terceiroCalculo = anoAtual % 100 != 0

  console.log((segundoCalculo && terceiroCalculo) || primeiroCalculo)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  let idade = prompt("Você tem mais de 18 anos?")
  let ensinoMedio = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  let aprovado = ((idade === "sim") && (ensinoMedio === "sim") && (disponibilidade === "sim"))

  console.log(aprovado)
}