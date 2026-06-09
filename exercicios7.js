let precoProduto
let percentualDesconto
let valorDesconto

precoProduto = prompt("Digite o preço do produto: R$")
percentualDesconto = prompt("Digite o percentual de desconto (%):")

precoProduto = parseFloat(precoProduto)
percentualDesconto = parseFloat(percentualDesconto)

valorDesconto = (precoProduto * percentualDesconto) / 100

alert("Valor do desconto = R$ " + valorDesconto)