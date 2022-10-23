var numero = 0
var maiorNum = 0
for (var i = 0; i < 5; i++){
    numero = parseInt(prompt('Informe um número: '))
    
    if (numero >= maiorNum){
        maiorNum = numero
    }   
}
console.log('O maior número digitado foi', maiorNum)
