/*Crie um algoritmo que pede um número inteiro positivo para o usuário. Em
seguida, popule uma array com os números de Fibonacci, na hora de somar com
os termos anteriores, some com elementos anteriores do array. Faça com que o
array tenha no máximo 10 elementos, para iniciar a sequência use o número que
o usuário inseriu -1.
Ex.: inseriu o número 8,
a sequência deve começar da seguinte maneira 7 8 15 23*/

var array = []

var numero = parseInt(prompt('Insira um número: '))

numero2 = numero--
console.log('Somando os número utilizando a sequência de Fibonacci (o termo subsequente e a soma dos dois anteriores)')
for (var i = 0; i < 10; i++){
    if(i == 0){
        console.log(numero2)
        console.log(numero)
        console.log(numero + numero2)
        numero2 = numero + numero2
    }else{
        console.log(numero)
        console.log(numero2 + numero)
    }
}