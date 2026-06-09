let areaParede
let litrosTinta

areaParede = prompt("informe a área da parede em m2:")

areaParede = parseFloat(areaParede)

litrosTinta = areaParede / 5

alert("Quantidade de tinta necessária = " + litrosTinta + " litros")