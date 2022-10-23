var nome = prompt('Insira seu nome: ')
var idade = prompt('Insira sua idade: ')
var AnoNascimento = 2022 - idade
if(idade % 2 == 0){
    console.log('Olá', nome, 'você tem', idade, 'anos que é um número par é nasceu no ano', AnoNascimento)
}else{
    console.log('Olá ', nome, 'você tem', idade, 'que é um número ímpar é nasceu no ano', AnoNascimento)    
}
if(idade >= 18){
    console.log('Está liberado o consumo de bebidas alcoólicas')
}