let diasAluguel
let valorDia
let valorTotal

diasAluguel=prompt("informe a quantidade de dias de aluguel:")
valorDia=prompt("informe o valor cobrado por dia:R$")

diasAluguel= parseFloat(diasAluguel)
valorDia=parseFloat(valorDia)

valorTotal=diasAluguel * valorDia

alert("Valor total a pagar = R$ " + valorTotal)