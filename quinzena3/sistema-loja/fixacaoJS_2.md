```
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let custoTotalCompra
  if (quantidade >= 12){
    custoTotalCompra = quantidade * 1.00
  } else{
    custoTotalCompra = quantidade * 1.30
  }
  return custoTotalCompra
}
```