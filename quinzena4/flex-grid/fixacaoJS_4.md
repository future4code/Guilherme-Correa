```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let i = 0
  let resposta
  for (let numero of arrayDeNumeros) {
    if (numero === numeroEscolhido) {
      i++
    }
  }
  if (i > 0 ) {
    return `O número ${numeroEscolhido} aparece ${i}x`
  }
  return `Número não encontrado`
}

```