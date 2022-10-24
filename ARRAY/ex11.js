/*Crie um algoritmo com dois vetores e os preencha com números inteiros e
positivos, o usuário deve dizer quando não quer mais inserir valores mas os vetores
devem ter a mesma quantidade de números. Depois crie um terceiro vetor que irá
receber apenas os números que estão em ambos os vetores anteriores ou forem
ímpar.
Ex.: entrada - arrayA[2,3,4,8,1] arrayB[7,4,1,6,8]
 saída - arrayC[3,4,8,1]
*/

var arrayA = []
var arrayB = []
var arrayC = []

var contador = 0
var index = 0

var desejaContinuar = true

while(desejaContinuar){
    arrayA[index] = parseInt(prompt('Insira um número'))
    arrayB[index] = parseInt(prompt('Insira um número'))

    desejaContinuar = prompt('Deseja continuar? s/n')
    if(desejaContinuar == 'n'){
        desejaContinuar = false
    }
    index++
}

for (var i = 0; i <= arrayA.length; i++) {
    for (var j = 0; j <= arrayA.length; j++) {
        if (arrayA[i] == arrayB[j] ) {
            arrayC[contador] = arrayA[i]
            contador++
        }
    }
    
    if(arrayA[i] % 2 == 1){
        arrayC[contador] = arrayA[i]
        contador++
    }
    console.log(i)
}

console.log('Array A = ' + arrayA)
console.log('Array B = ' + arrayB)
console.log('Array C(Elementos que o array A e o array B possuem) = ' + arrayC)