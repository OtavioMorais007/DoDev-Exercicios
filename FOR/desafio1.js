// PASSO 1
var nome = prompt('Digite seu nome: ')
var idade = prompt('Digite sua idade: ')
var peso = prompt('Digite seu peso: ')
var altura = parseFloat(prompt('Digite sua altura: '))
var profissao = prompt('Digite sua profissão')
console.log('Olá ' + nome + ' você tem ' + idade + ' anos, é ' + profissao + ' tem ' + altura + 'M de altura e pesa ' + peso + 'kg')

// PASSO 2
if(idade >= 18){
    console.log('Está liberado para tomar umas geladas')
}else{
    console.log('Sem gelada para você')
}

// PASSO 3
console.log('Sua idade em meses é ' + idade*12 + ' meses')
console.log('Sua idade em semanas é ' + idade*52 + ' semanas')
console.log('Sua idade em dias é ' + idade*365 + ' dias')

// PASSO 4
var imc = peso / (altura * altura)
if(imc < 18.5){
    console.log('Sua faixa de IMC é MAGREZA')
} else if(imc >= 18.5 && imc < 24.9){
    console.log('Sua faixa de IMC é NORMAL')
} else if(imc >= 24.9 && imc < 30){
    console.log('Sua faixa de IMC é SOBREPESO')
} else (imc >= 30);{
    console.log('Sua faixa de IMC é OBESIDADE')
}

// PASSO 5
var anoNasc = 2022 - idade
console.log('Você nasceu no ano de ' + anoNasc)

// PASSO 6
for(var i = 0; i <= idade; i++){
    console.log(anoNasc + ' - ' + i + ' anos de idade')
    anoNasc++
}