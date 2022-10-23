/*Faça um algoritmo com dois arrays arrayA e arrayB e popule ambos com 10
elementos cada. Depois salve em um terceiro array somente os números que
estiverem nos dois primeiros, mesmo que em posições diferentes, e forem maiores
que 5, não tem problema repetir os valores. Exiba o último array no final.
Ex.: arrayA[5,6,2,4,8,7,3,6,7,1]
 arrayB[8,5,3,1,4,7,8,2,3,6]
Deve ser exibido no último array apenas os números arrayC[6,8,8,7,6,7]*/

var arrayA = []
var arrayB = []
var arrayC = []

var contador = 0

for(var i = 0; i < 10; i++){
    arrayA[index] = parseInt(prompt('Insira um número'))
    arrayB[index] = parseInt(prompt('Insira um número'))
}

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (arrayA[i] == arrayB[j] && arrayA[i] > 5) {
            arrayC[contador] = arrayA[i]
            contador++
        }
    }
}

console.log('Array A = ' + arrayA)
console.log('Array B = ' + arrayB)
console.log('Array C(Elementos que o array A e o array B possuem em comum e são maiores que 5) = ' + arrayC)