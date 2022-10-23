/*Faça um algoritmo que receba 10 números inteiros e armazene-os em um array.
Depois armazene em um array PAR todos os números que forem pares, e em um
array IMPAR os que forem ímpares, no final exiba os três vetores.
*/

var numeros = []
var par = []
var impar = []
var contador = 0
var contadorImpar = 0
var contadorPar = 0

while(contador < 10){
    numeros[contador] = parseInt(prompt('Informe um número: '))
    if(numeroAtual % 2 == 1){
        impar[contadorImpar] = numeroAtual
        contadorImpar++
    }else{
        par[contadorPar] = numeroAtual
        contadorPar++
    }
    contador++
}

console.log('Números: ' + numeros)
console.log('Números Ímpares: ' + impar)
console.log('Números Pares: ' + par)