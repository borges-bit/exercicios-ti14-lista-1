let quantidadeProdutos
let precoUnitario
let valorTotal

quantidadeProdutos= prompt("informe a quantidade de produtos:")
precoUnitario = prompt("informe O VALOR UNITARIO: R$")

quantidadeProdutos =parseFloat(quantidadeProdutos)
precoUnitario =parseFloat(precoUnitario)

valorTotal =quantidadeProdutos*precoUnitario

alert("Valor total da compra = R$ "+ valorTotal)