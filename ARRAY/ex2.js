/*Crie um array para armazenar a idade e outro para armazenar a altura de 10 alunos.
No final, exiba quantos alunos com mais de 13 anos tem uma altura menor do que a
média da altura de todos os alunos.*/

var idade = []
var altura = []
var soma = 0
var contador = 0

for (var i = 0; i < 10; i++) {
    idade[i] = parseInt(prompt('Informe a idade do aluno: '))

    altura[i] = parseFloat(prompt('Informe a altura do aluno: '))
    soma += alturaAtual
}

media = soma / 10
for (var i = 0; i < 10; i++) {
    if (idade[i] > 13 && altura[i] < media) {
        contador++
    }
}

console.log('Tem ' + contador + ' alunos com mais de 13 anos que possuem uma altura menor do que a média da sala que é de ' + media)