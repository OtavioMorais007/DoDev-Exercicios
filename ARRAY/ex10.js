/*Faça um algoritmo que peça para o usuário digitar 5 números e salve em um array,
porém, se o usuário digitar um número que já foi inserido, o seu programa deve
pedir para ele digitar outro número.*/

var array = []

for (var i = 0; i < 5; i++) {
    array[i] = parseInt(prompt('Insira um número: '))
    
    for (var j = 0; j <= array.length; j++) {
        if (array[i] == array[j]) {
            array[i] = parseInt(prompt('Este número já foi inserido, insira um diferente'))
        }
    }
}

console.log(array)