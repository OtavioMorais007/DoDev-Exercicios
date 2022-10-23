/*Crie um algoritmo onde você deve criar um array que receba 5 números positivos
ou negativos, depois de popular esse array você deve substituir os valores
POSITIVOS por “true” e os NEGATIVOS por “false”.
Ex.: array[-3,5,-6,-8,2] -> array[false,true,false,false,true]]*/

var array = []
var arrayAuxiliar = []

for (var i = 0; i < 5; i++) {
    array[i] = parseInt(prompt('Insira um número'))
    console.log(array[i])
    if (array[i] > 0) {
        arrayAuxiliar[i] = true
    } else {
        arrayAuxiliar[i] = false
    }
}

console.log(array)
console.log(arrayAuxiliar)


