for(var i = 0; i < 4; i++){
    var nome = prompt('Informe seu nome: ')
    var idade = prompt('Informe sua idade: ')
    var salarioAtual = parseInt(prompt('Informe seu salário atual: '))
    console.log('Nome: ' + nome)
    console.log('Idade: ' + idade)
    console.log('Salário atual: ', salarioAtual)
    var confirmacao = prompt('As informações foram digitadas corretamente? s/n ')
    if(confirmacao == 's'){
        var aumento = 0.015
        var anoAtual = 2022
    
        for(var i = 0; i < 10; i++){
            console.log('Seu salário em ' + anoAtual + ' vai ser de R$' + salarioAtual.toFixed(2))
            salarioAtual = parseFloat(salarioAtual + salarioAtual * aumento)
            anoAtual++
            aumento = aumento * 2
        }   
    }else{
        if(i == 3){
            console.log('O programa será encerrado...')
            break
        }
    }
    }