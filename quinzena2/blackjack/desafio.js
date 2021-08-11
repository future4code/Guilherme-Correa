console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {

let cartasUsuario = []
let cartasComputador = []
let textosCartasUsuarios = []
let textosCartasComputador = []

cartasUsuario.push(comprarCarta(), comprarCarta())
cartasComputador.push(comprarCarta(), comprarCarta())

while (cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11 || cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11) {
   cartasUsuario = []
   cartasComputador = []
   cartasUsuario.push(comprarCarta(), comprarCarta())
   cartasComputador.push(comprarCarta(), comprarCarta())
}

// -- RODADA USUÁRIO ---
textosCartasUsuarios.push(cartasUsuario[0].texto, cartasUsuario[1].texto)

let rodadaAtualUsuário = confirm(`Suas cartas são: ${textosCartasUsuarios}.
A carta revelada do computador é ${cartasComputador[0].texto},
Deseja comprar mais uma carta?`)

let somaRodada1 = (cartasUsuario[0].valor + cartasUsuario[1].valor)

while (somaRodada1 <= 21 && rodadaAtualUsuário === true) {
   cartasUsuario.push(comprarCarta())
   
   somaRodada1 = somaRodada1 + cartasUsuario.pop().valor
   textosCartasUsuarios.push(cartasUsuario.pop().texto)

   rodadaAtualUsuário = confirm(`Suas cartas são: ${textosCartasUsuarios}.
   A carta revelada do computador é ${cartasComputador[0].texto},
   Deseja comprar mais uma carta?`)
}
 // -- RODADA COMPUTADOR --
 textosCartasComputador.push(cartasComputador[0].texto, cartasComputador[1].texto)

let somaRodadaComputador = (cartasComputador[0].valor + cartasComputador[1].valor)

while (somaRodadaComputador < 21) {
   cartasComputador.push(comprarCarta())
   
   somaRodadaComputador = somaRodadaComputador + cartasComputador.pop().valor
   textosCartasComputador.push(cartasComputador.pop().texto)
}

// -- VERIFICAÇÃO DE GANHADOR --
console. log(`Suas cartas são ${textosCartasUsuarios}. Sua pontuação é ${somaRodada1}
 As cartas reveladas do computador são ${textosCartasComputador}. A pontuação do computador é ${somaRodadaComputador}`)
 if (somaRodada1 > 21 ){
    console.log("Voçê perdeu o Jogo!")
   } else if (somaRodadaComputador > 21 && somaRodada1 < 21){
      console.log("Voçê ganhou o Jogo!")
   } else if (somaRodada1 === somaRodadaComputador){
      console.log("Empate")
   } else {
      console.log("O jogo acabou")
   }

} else { 
   console.log("O jogo acabou") 
}