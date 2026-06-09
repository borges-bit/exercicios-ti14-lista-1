let nota1
let nota2
let nota3
let mediaAluno

nota1 = prompt("informe a nota 1:")
nota2 = prompt("informe a nota 2:")
nota3 = prompt("informe a nota 3:")

nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)

mediaAluno=(nota1 + nota2 + nota3) / 3

alert("Média do aluno = " + mediaAluno)