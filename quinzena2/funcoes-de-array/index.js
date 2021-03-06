// --- Exercícios de interpretação de código ---


// --- EXERCÍCIO 1 --- 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// Ira aparecer o array inteiro, Nome e apelido das 3 pessoas



// --- EXERCÍCIO 2 --- 
//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
//   console.log(novoArrayB)

  // TODOS OS NOMES: 
  // Amanda Rangel
  // Lais Petra
  // Leticia Chijo



  // --- EXERCÍCIO 3 --- 
//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
//   console.log(novoArrayC)

// Retorna todos os apelidos que não sejam Chijo, ou seja, a linha completa da Amanda e da Lais.



// --- Exercícios de escrita de código ---
// --- EXERCÍCIO 1 --- 
// Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

//a) Crie um novo array que contenha apenas o nome dos doguinhos
//b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomeDosDogs = pets.map((item, index, array) => {
     return item.nome
 })
 console.log(nomeDosDogs)

 const cachorrosSalsicha = pets.filter((item, idenx, array) => {
     return item.raca === "Salsicha"
 })
 console.log(cachorrosSalsicha)

 const somentePoodles = pets.filter((item, idenx, array) => {
    if (item.raca === "Poodle"){
        return item.nome
    }
})
function menssagemDeDesconto (pets){
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`
}
const impressaoMenssagem = somentePoodles.map(menssagemDeDesconto)
console.log(impressaoMenssagem)



// --- EXERCÍCIO 2 --- 
// a) Crie um novo array que contenha apenas o nome de cada item
// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
// aplicando 5% de desconto em todos eles
// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomesProdutos = produtos.map((item) => {
    return item.nome
})
console.log(nomesProdutos)

// não consegui fazer o item B

// console.log(`${nomesProdutos} preço com 5% de desconto: ${Math.floor((produtos.preco*95/100)*100)/100}`)

const produtosBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
console.log(produtosBebidas)

const produtosYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})
console.log(produtosYpe)

const precoProdutosYpe = produtos.filter((item, index, array) => {
    if(item.nome.includes("Ypê")){
        console.log(`Compre ${item.nome} por R$${item.preco}`)
    }
})
console.log(precoProdutosYpe) 
