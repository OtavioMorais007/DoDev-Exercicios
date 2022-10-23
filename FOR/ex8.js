// EXERCÍCIO 8
/*Desenvolva um programa que receba a nota, de 0 a 10, e o sexo de 10 alunos,
usando a estrutura FOR. No final, exiba no console:
a. A média geral dos alunos
b. Quantos homens enviaram as notas
c. Quantas mulheres tiveram nota acima de 7
d. Qual a maior nota entre os homens
Obs.: para obter a média geral deve somar todas as notas e dividir pelo número de
alunos
*/

var sexo
var media = 0
var nota
var homem = 0
var maiorNota = 0
var mulheres = 0

for(var i = 1; i <= 10; i++){
    nota = parseInt(prompt('Digite a nota', i,':'))
    sexo = prompt('Digite o sexo do aluno[H]Homem, [M]Mulher: ')
    media =  media + nota
    
    if (sexo.toUpperCase = 'H'){
        homem++
        if (nota >= maiorNota){
            maiorNota = nota
        }
    }
    if (sexo.toUpperCase = 'F' && nota >= 7){
        mulheres++
    }
}

console.log('A média dos alunos foi', parseFloat(media/10))
console.log(homem + ' homens enviaram suas notas')
console.log(mulheres + ' mulheres tiveram nota maior que 7')
console.log('A maior nota entre homens foi: ', maiorNota)