var nome = prompt('Informe seu nome: ')
var cpf = prompt('Informe seu CPF')

var contador = 0
var valorTotal = 0
var continuar = 1
var maiorValor = 0
var media = 0

while (continuar == 1) {
    console.log('-----------------------------------------------------------')
    var tipo = prompt('Deseja fazer um saque ou um depósito? s/d')
    var valor = parseInt(prompt('Qual o valor?'))
    
    media = media + valor

    if (tipo == 's' && valor < valorTotal && valor > 0) {
        valorTotal = valorTotal - valor
        contador++
        if(valor >= maiorValor){
            maiorValor = valor
        }
    }else if (tipo == 's' && valor > valorTotal){
        console.log('Não é permitido sacar um valor não disponível no saldo')
    }else if(tipo == 's' && valor < valorTotal  && valor < 0){
        console.log('Não é permitido sacar valores negativos')
    }
    
    if (tipo == 'd' && valor > 0){
        valorTotal = valorTotal + valor
        contador++
        if(valor >= maiorValor){
            maiorValor = valor
        }
    }else if(tipo == 'd' && valor < 0){
        console.log('Não é permitido depositar valores negativos')
    }
    
    console.log('Média dos valores inseridos até o momento R$' + valorTotal/contador)
    console.log('O maior valor inserido até o momento foi R$' + maiorValor)
    console.log('Valor total na conta R$' + valorTotal)
    
    continuar = prompt('Deseja continuar? 1/2')
}