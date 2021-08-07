
console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
	let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()

   let pontuacaoUsuario = (carta1Usuario.valor + carta2Usuario.valor)
   let pontuacaoComputador = (carta1Computador.valor + carta2Computador.valor)

   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${pontuacaoUsuario}`) 
   console.log(`Computador - cartas: ${carta1Computador.texto}${carta2Computador.texto} - pontuação ${pontuacaoComputador}`) 

   if (pontuacaoUsuario === pontuacaoComputador){
      console.log("Empate")
   } else if (pontuacaoUsuario > pontuacaoComputador){
      console.log("O Usuário ganhou!")
   } else {
         console.log("O Computador ganhou!")
      }

} else {
   console.log("O jogo acabou")
}
