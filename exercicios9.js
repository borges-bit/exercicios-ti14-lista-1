let peso
let altura
let imc

peso=prompt("Digite o peso (kg):")
altura=prompt("Digite a altura (m):")

peso=parseFloat(peso)
altura=parseFloat(altura)

imc=peso/(altura * altura)

alert("IMC = "+imc)