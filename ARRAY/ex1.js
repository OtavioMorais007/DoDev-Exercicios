/*1. Crie um array para receber nomes dos alunos e outro para receber as notas
2. Para cada aluno inserido pergunte seu nome a nota da prova
3. Seu usuário deve poder parar de inserir informações quando desejar
4. Posteriormente exiba a nota de cada aluno, a soma das notas e a média geral da
turma*/var nomes = []
var notas = []
var continuar = true
var contadorArray = 0
while (continuar) {
    nomes[contadorArray] = prompt('Informe o nome do aluno: ')
    notas[contadorArray] = parseInt(prompt('Informe a nota do aluno: '))

    var desejaContinuar = prompt('Insira 1 se deseja parar')
    if (desejaContinuar == 1) {
        continuar = false
    }

    contadorArray++
}

var soma = 0
for (var i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + ' - Nota: ' + notas[i])
    soma += notas[i]
}
console.log('-------------------------')
console.log('A soma das notas é ' + soma)
console.log('A média das notas é ' + soma / notas.length)