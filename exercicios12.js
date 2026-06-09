let distanciaKm
let tempoHoras
let velocidadeMedia

distanciaKm = prompt("Digite a distância percorrida (km):")
tempoHoras = prompt("Digite o tempo gasto no trajeto (horas):")

distanciaKm = parseFloat(distanciaKm)
tempoHoras = parseFloat(tempoHoras)

velocidadeMedia = distanciaKm / tempoHoras

alert("Velocidade média = " + velocidadeMedia + " km/h")