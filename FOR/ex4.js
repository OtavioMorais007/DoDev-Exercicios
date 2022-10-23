var num1 = parseInt(prompt('Digite o primeiro número: '))
var num2 = parseInt(prompt('Digite o segundo número:'))
var numImpar = 0
var numPar = 0
if(num2 > num1){
    for(num1; num1 < num2; impar++){
        if(impar % 2 == 1){
            numImpar += 1 
        }else{
            numPar += 1
        }
    }
}else{
    for(var impar = num2; impar < num1; impar++){
        if(impar % 2 == 1){
            numImpar += 1 
        }else{
            numPar += 1
        }
    }
}
console.log('No intervalo entre', num1, 'e', num2, 'tem', numImpar, 'números ímpares', 'e', numPar, 'números pares')