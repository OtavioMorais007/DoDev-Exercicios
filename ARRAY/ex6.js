/*Crie um algoritmo que pergunte 5 números ao usuário, coloque em um array,
depois exiba tal array. Modifique os elementos do array de modo que a
sequência de números fique ao contrário.
Ex.: se digitou 1, 2, 3,4, 5
 tem que ficar 5, 4, 3, 2 , 1*/

var array = []

for (var i = 0; i < 5; i++) {
    array[i] = parseInt(prompt('Insira um número: '))
}

console.log('Ao contrário...')
for (var i = 4; i >= 0; i--) {
    console.log(array[i])
}