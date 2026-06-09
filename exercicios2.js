let horasTrabalhadas
let valorHora
let salarioSemanal

horasTrabalhadas = prompt("INFORME A QUANTIDADEDE HORAS TRABALHADAS:")
valorHora = prompt("INFORME A QUANTIDADE A SER PAGA POR PAGA: R$")

horasTrabalhadas = parseFloat(horasTrabalhadas)
valorHora = parseFloat(valorHora)

salarioSemanal = horasTrabalhadas * valorHora

alert("Salário semanal = R$ " + salarioSemanal) 