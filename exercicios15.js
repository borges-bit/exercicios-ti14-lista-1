let qtdUnidades
let custoUnitario
let custoTotal

qtdUnidades = prompt("Digite a quantidade de unidades produzidas:")
custoUnitario = prompt("Digite o custo de fabricação de cada unidade: R$")

qtdUnidades = parseFloat(qtdUnidades)
custoUnitario = parseFloat(custoUnitario)

custoTotal = qtdUnidades * custoUnitario

alert("Custo total de produção = R$ " + custoTotal)