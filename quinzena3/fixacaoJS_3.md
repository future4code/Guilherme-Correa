```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let media = ((ex * 1) +(p1 * 2) +(p2 * 3))/6
  let mediaPonderada
  
  if (media >= 9) {
    mediaPonderada = "A"
  } else if (media < 9 && media >= 7.5) {
    mediaPonderada = "B"
  } else if (media < 7.5 && media >= 6) {
    mediaPonderada = "C"
  } else if (media < 6){
    mediaPonderada = "D"
  }
  return mediaPonderada
}
```