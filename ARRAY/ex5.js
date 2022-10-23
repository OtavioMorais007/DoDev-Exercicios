/*Crie um algoritmo que receba um array e um número inteiro positivo. Popule o array
e no final exiba os índices em que número inserido aparece nesse array. Para testes
do exercício use até 10 elementos no array.
*/

var arrayA = []

for (var i = 0; i < 10; i++) {
    arrayA[i] = parseInt(prompt('Insira um número'))
}

for (var i = 0; i < 10; i++) {
    console.log('Índice: ' + i + ' - ' + 'Número: ' + arrayA[i])
}