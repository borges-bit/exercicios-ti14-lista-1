let litrosConsumidos
let precoLitro
let custoTotal

litrosConsumidos=prompt("Digite a quantidade de litros consumidos:")
precoLitro=prompt("Digite o preço do litro de combustível: R$")

litrosConsumidos=parseFloat(litrosConsumidos)
precoLitro=parseFloat(precoLitro)

custoTotal=litrosConsumidos * precoLitro

alert("Custo total de abastecimento = R$ " + custoTotal)