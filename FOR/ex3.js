var inter10 = 0
for(var i = 0; i < 5; i++){
    var numero = parseInt(prompt('Digite um número'))

    if(1 < numero && numero < 10){
        inter10 = inter10 + 1
    }
}
console.log('Teve', inter10, 'números que estavam no intervalo entre 1 e 10')