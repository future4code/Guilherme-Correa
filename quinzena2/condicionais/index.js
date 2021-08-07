// Exercícios de interpretação de código //

// EXERCÍCIO 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// recebe um número do usuario e faz a conversao dele para numero e atribui em uma nova variavel.
// a condição é se o resto da divisão do numero por 2 for 0 entao passou no teste se nao, não passou.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// para numeros divisivel por 2

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// para numeros que a divisão por 2 sobre algum número.



// EXERCÍCIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// PARA VERIFICAR DE ACORDO COM A ESCOLHA DO USUARIO O VALOR DA FRUTA ESCOLHIDA.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//  O preço da fruta Maça é R$ 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, 
// qual seria a mensagem impressa no console se retirássemos 
// o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
 // O preço da fruta Pêra é R$ 5.5
 // O preço da fruta Pêra é R$ 5

 
 
 // EXERCÍCIO 3

//  const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// esta pedindo ao usuario para digitar um numero e esta convertendo ele para numero.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// se for 10 : Esse número passou no teste // Essa mensagem é secreta!!!
// se for -10 não exibira menssagem.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// acho que não pois só sera verificado uma condição, não atendendo ela não sera exibido nada, 
// na vdd pensando bem acho, que terá erro na última linha do codigo. 
// console.log(mensagem) chamando um comando que esta dentro do if e não atendendo a condição. acho que é isso! rs



// Exercícios de escrita de código //


// EXERCÍCIO 1 :Faça um programa que pergunta ao usuário qual a idade dele e imprima no console 
// se ele/ela pode dirigir (apenas maiores de idade).
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`


let idadeUsuario = Number(prompt("Qual sua idade?"))

function permissaoParaDirigir(){
    if (idadeUsuario >= 18){
        console.log(`Você pode dirigir`)
    } else {
        console.log("Você não pode dirigir.")
    }
}
permissaoParaDirigir(idadeUsuario)



// EXERCÍCIO 2: Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
// Utilize o bloco if/else

let resposta = prompt("Digite o Turno de trabalho em que voçê esta, M (matutino) ou V (Vespertino) ou N (Noturno):")
let turnoDeTrabalho = resposta.toUpperCase()

function verificacaoTurno (){
    if (turnoDeTrabalho === "M"){
        console.log("Bom Dia!")
    } else if (turnoDeTrabalho === "V"){
        console.log("Boa Tarde!")
    } else if (turnoDeTrabalho === "N"){
        console.log("Boa Noite!")
    } else {
        console.log("Digite uma opção valida.")
    }
}
verificacaoTurno(turnoDeTrabalho)




// EXERCÍCIO 3 : Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
// Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)

let resposta = prompt("Digite o Turno de trabalho em que voçê esta, M (matutino) ou V (Vespertino) ou N (Noturno):")
let turnoDeTrabalho = resposta.toUpperCase()

function verificacaoTurno (){
    switch (turnoDeTrabalho){
        case "M":
            console.log("Bom Dia!")
            break
        case "V":
            console.log("Boa Tarde!")
            break
        case "N":
            console.log("Boa Noite!")
            break
        default:
        console.log("Digite uma opção valida.")

    }
}
verificacaoTurno(turnoDeTrabalho)



// EXERCÍCIO 4 Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
// e se o ingresso está abaixo de 15 reais. 

// Faça um código que pergunta ao usuário 
// qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
// então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, 
// imprima "Escolha outro filme :("

function verificaFilme(genero, ingresso){
    if (genero === "fantasia" && ingresso <= 15){
        console.log("Bom Filme")
    } else{
        console.log("Escolha outro filme :(")
    }
}

let generoFilme = prompt("Qual o gênero do filme?")
let valoringresso = Number(prompt("Qual o valor do ingresso (valor inteiro):"))

verificaFilme(generoFilme, valoringresso)



// DESAFIO 1: Modifique o código do exercício 4 de escrita de código para, 
// antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, 
// pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) 
// e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", 
// trocando [LANCHINHO] pelo que o usuário colocou no input.

function verificaFilme(genero, ingresso){
    if (genero === "fantasia" && ingresso <= 15){
        let lanchinho = prompt("Qual lanche você quer para assistir o filme?")
        console.log("Bom Filme")
        console.log(`Aproveite o seu ${lanchinho}`)
    } else{
        console.log("Escolha outro filme :(")
    }
}

let generoFilme = prompt("Qual o gênero do filme?")
let valoringresso = Number(prompt("Qual o valor do ingresso (valor inteiro):"))

verificaFilme(generoFilme, valoringresso)





// ESTE DESAFIO NÃO FOI CONCLUIDO, ESTOU CON DIFICULDADES NA LIGAÇÃO DAS FUNÇOES.


// DESAFIO 2: Você foi contratado para criar um sistema de vendas de 
// ingressos de jogos de um estádio de futebol. Para esta compra, 
// o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// O seu sistema deve solicitar estas informações ao usuário, 
// através do `prompt` . Além disso, ele deve imprimir tudo isso, 
// junto com o valor de cada ingresso e o valor total que o usuário tem que pagar 
// (ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
// Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
// Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, 
// mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)



function validarTipoDeJogo(){
    const validadojogo
    if(tipoDeJogo === "IN"){
        validadojogo = "IN = Internacional"
    } else {
        validadojogo = "DO = doméstico" 
    }
    return validadojogo
}

function validarEtapaJogo(){
    const validadoEtapa
    if (etapaDoJogo === "SF"){
        validadoEtapa = "SF = Semi-final"
    } else if (etapaDoJogo === "DT"){
        validadoEtapa = "DT = Decisão de terceiro lugar"
    } else {
        validadoEtapa = "FI = Final"
    }
    return validadoEtapa
}

function validarValorIngresso(){
    const valorIngresso
    if(tipoDeJogo === "DO" ){
        if(etapaDoJogo === "SF"){
            if (categoriaJogo === 1){
                valorIngresso = 1320
            } else if(categoriaJogo === 2){
                valorIngresso = 880
            } else if(categoriaJogo === 3){
                valorIngresso = 550
            } else {
                valorIngresso = 220
            }
        } else if (etapaDoJogo === "DT"){
            if (categoriaJogo === 1){
                valorIngresso = 660
            } else if(categoriaJogo === 2){
                valorIngresso = 440
            } else if(categoriaJogo === 3){
                valorIngresso = 330
            } else {
                valorIngresso = 170
            }
            
        } else {
            if (categoriaJogo === 1){
                valorIngresso = 1980
            } else if(categoriaJogo === 2){
                valorIngresso = 1320
            } else if(categoriaJogo === 3){
                valorIngresso = 880
            } else {
                valorIngresso = 330
            }
        }
    } else {
        if(etapaDoJogo === "SF"){
            if (categoriaJogo === 1){
                valorIngresso = 1320 *4.10
            } else if(categoriaJogo === 2){
                valorIngresso = 880 *4.10
            } else if(categoriaJogo === 3){
                valorIngresso = 550 *4.10
            } else {
                valorIngresso = 220 *4.10
            }
        } else if (etapaDoJogo === "DT"){
            if (categoriaJogo === 1){
                valorIngresso = 660 *4.10
            } else if(categoriaJogo === 2){
                valorIngresso = 440 *4.10
            } else if(categoriaJogo === 3){
                valorIngresso = 330 *4.10
            } else {
                valorIngresso = 170 *4.10
            }
            
        } else {
            if (categoriaJogo === 1){
                valorIngresso = 1980 *4.10
            } else if(categoriaJogo === 2){
                valorIngresso = 1320 *4.10
            } else if(categoriaJogo === 3){
                valorIngresso = 880 *4.10
            } else {
                valorIngresso = 330 *4.10
            }
        }

    }
    return valorIngresso
}

function calculandoIngresso(){
    const calculoIngresso
    if (tipoDeJogo === "DO"){
        if (etapaDoJogo === "SF"){
            if (categoriaJogo === 1){
                calculoIngresso = quantidadeDeIngresso * 1320
            } else if(categoriaJogo === 2){
                calculoIngresso = quantidadeDeIngresso * 880
            } else if(categoriaJogo === 3){
                calculoIngresso = quantidadeDeIngresso * 550
            } else {
                calculoIngresso = quantidadeDeIngresso * 220
            }
        } else if (etapaDoJogo === "DT"){
            if (categoriaJogo === 1){
                calculoIngresso = quantidadeDeIngresso * 660
            } else if(categoriaJogo === 2){
                calculoIngresso = quantidadeDeIngresso * 440
            } else if(categoriaJogo === 3){
                calculoIngresso = quantidadeDeIngresso * 330
            } else {
                calculoIngresso = quantidadeDeIngresso * 170
            }
        } else{
            if (categoriaJogo === 1){
                calculoIngresso = quantidadeDeIngresso * 1980
            } else if(categoriaJogo === 2){
                calculoIngresso = quantidadeDeIngresso * 1320
            } else if(categoriaJogo === 3){
                calculoIngresso = quantidadeDeIngresso * 880
            } else {
                calculoIngresso = quantidadeDeIngresso * 330
            }
        } 
    }else {
        if (etapaDoJogo === "SF"){
            if (categoriaJogo === 1){
                calculoIngresso = quantidadeDeIngresso * (1320 * 4.10)
            } else if(categoriaJogo === 2){
                calculoIngresso = quantidadeDeIngresso * (880 * 4.10)
            } else if(categoriaJogo === 3){
                calculoIngresso = quantidadeDeIngresso * (550 * 4.10)
            } else {
                calculoIngresso = quantidadeDeIngresso * (220 * 4.10)
            }
        } else if (etapaDoJogo === "DT"){
            if (categoriaJogo === 1){
                calculoIngresso = quantidadeDeIngresso * (660 * 4.10)
            } else if(categoriaJogo === 2){
                calculoIngresso = quantidadeDeIngresso * (440 * 4.10)
            } else if(categoriaJogo === 3){
                calculoIngresso = quantidadeDeIngresso * (330 * 4.10)
            } else {
                calculoIngresso = quantidadeDeIngresso * (170 * 4.10)
            }
        } else{
            if (categoriaJogo === 1){
                calculoIngresso = quantidadeDeIngresso * (1980 * 4.10)
            } else if(categoriaJogo === 2){
                calculoIngresso = quantidadeDeIngresso * (1320 * 4.10)
            } else if(categoriaJogo === 3){
                calculoIngresso = quantidadeDeIngresso * (880 * 4.10)
            } else {
                calculoIngresso = quantidadeDeIngresso * (330 * 4.10)
            }
        } 
    }
    return calculoIngresso
}

let nomeUsuario = prompt("Qual seu nome completo:")
let tipoDeJogo = prompt("Qual tipo de Jogo (IN = internacional | DO = doméstico):")
let etapaDoJogo = prompt("Insir a etapa do jogo (SF = semi-final | DT = decisão de terceiro lugar | FI = final):")
let categoriaJogo = Number(prompt("Qual sua categoria (1, 2, 3 ou 4):"))
let quantidadeDeIngresso = Number(prompt ("Quantos ingressos:"))


function vendasDeIngressos(){
    if (tipoDeJogo === "IN"){
        console.log("---Dados da compra---")
        console.log(`Nome do cliente: ${nomeUsuario}`)
        console.log("Tipo do jogo:", validarTipoDeJogo())
        console.log("Etapa do jogo:",validarEtapaJogo())
        console.log("Categoria", categoriaJogo)
        console.log("Quantidade de Ingressos:", quantidadeDeIngresso)

        console.log("---Valores---")
        console.log("Valor do ingresso: R$", validarValorIngresso())
        console.log("Valor total: R$", calculandoIngresso())
    }
}