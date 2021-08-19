```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    // Escreva seu código aqui
    let salarioMensal = 2000
    let comissaoVariavel = valorTotalVendas *5/100
    let totalComissaoFixa = qtdeCarrosVendidos * 100
    
    let salarioFinalFuncionario = salarioMensal + totalComissaoFixa + comissaoVariavel
    
    return salarioFinalFuncionario
   }

   ```