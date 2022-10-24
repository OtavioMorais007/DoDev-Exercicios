/*Faça um algoritmo que peça para o usuário digitar 5 números e salve em um array,
porém, se o usuário digitar um número que já foi inserido, o seu programa deve
pedir para ele digitar outro número.*/

var array = []
var contador = 0

for (var indexA = 0; indexA < 5; indexA++) {
    array[indexA] = parseInt(prompt('Insira um número: '))

    if (contador != 0) {
        for(var indexB = 0; indexB < 5; indexB++){
            if(indexA > indexB || indexA < indexB){
                if(array[indexA] == array[indexB]){
                    array[indexA] = parseInt(prompt('Este número já foi inserido, insera um diferente: '))
                }
            }
        }
    }
    contador++
}

console.log('Array inserido: ' + array)