/*Refaça o script anterior, mas agora pergunte ao usuário quantos números ele
deseja inserir no array. Depois, o usuário vai preenchendo elemento por
elemento do vetor, ao final, exiba o array e o array ao contrário*/

var array = []

var quantidade = parseInt(prompt('Deseja inserir quantos números? '))
for (var i = 0; i < quantidade; i++) {
    array[i] = parseInt(prompt('Insira um número: '))
}

console.log('Array digitado...')
for (var i = 0; i < quantidade; i++) {
    console.log(array[i])
}

console.log('Ao contrário...')
for (quantidade--; quantidade >= 0; quantidade--) {
    console.log(array[quantidade])
}