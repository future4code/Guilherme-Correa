// Exercícios de interpretação de código

// EXERCÍCIO 1
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//A) SERÁ IMPRESSO: Matheus Nachtergaele, Virginia Cavendish, canal: "Globo", horario: "14h"



//EXERCÍCIO 2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//A) 1º console vai exibir o objeoto cachorro e todos os dados.
// 2º console vai chamar o objeto gato que altera o nome de Juca para Juba e exibir os outros dados
// 3º console vai chamar o objeto tartaruga que altera a leta a por o no nome do objeto gato,
// ficando Jubo e exibindo os demais dados.

//B) a sintaxe com os 3 pontos chama o objeto anterior



// EXERCÍCIO 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// A)1º console IMPRIME: false
// 2º console IMPRIME: nada, pois não tem esse item, 

// B) na função foi declaração que iria chamar o objeto e a propriedade dele, ou seja um item
// foi oq aconteceu no console, nomeou a função a ser chamada e depois o item a ser exibido, 
// porem um item nao estava declarado



// Exercícios de escrita de código

// EXERCÍCIO 1

const pessoa = {
    nome: "Guilherme", 
    apelidos: ["Gui", "Guizinho", "Guiga"]
}

function meusApelidos(objeto) {

     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`)
    
 }
 meusApelidos(pessoa)


//  // OU

 const novaPessoa = {
    nome: "Guilherme", 
    apelidos: ["Gui", "Guizinho", "Guiga"]
}

function meusApelidos(objeto) {

 let meuNome = objeto.nome
 let apelido1 = objeto.apelidos[0]
 let apelido2 = objeto.apelidos[1]
 let apelido3 = objeto.apelidos[2]
 
 console.log(`Eu sou ${meuNome}, mas pode me chamar de: ${apelido1}, ${apelido2}, ${apelido3}`)
 }
 meusApelidos(novaPessoa)


// EXERCÍCIO 2

const pessoa1 = {
    nome:"Guilherme",
    idade:30,
    profissao: "Estudante"
}

const pessoa2 = {
    nome:"Luiz",
    idade:31,
    profissao: "Enfermeiro"
}

function dadosDaPessoa(objetos){
    let resposta = []
    let valorDeNome = typeof(objetos.nome)
    let caracterNome = objetos.nome.length
    let valorIdade = typeof(objetos.idade)
    let valorprofissao = typeof(objetos.profissao)
    let caracterProfissao = objetos.profissao.length
    
    let frase = resposta.push(valorDeNome, caracterNome, valorIdade, valorprofissao, caracterProfissao)
    console.log(resposta)

}
dadosDaPessoa(pessoa1)
dadosDaPessoa(pessoa2)

// EXERCÍCIO 3
let carrinho = []

const sacolao1 = {
    nome:"morango",
    disponibilidade: true
}
const sacolao2 = {
    nome:"abacate",
    disponibilidade: true

}
const sacolao3 = {
    nome:"uva",
    disponibilidade: true
}

function meuSacolao(){
    carrinho.push(sacolao1)
    carrinho.push(sacolao2)
    carrinho.push(sacolao3)
    console.log(carrinho)
}
meuSacolao()    


// apanhei muitos nessas ultimas