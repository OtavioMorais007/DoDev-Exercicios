/*Escreva um algoritmo que pergunte ao usuário se ele está com fome e se ele tem
dinheiro, guarde as respostas separadamente. Com base nas respostas do usuário:
a. Se ele estiver com fome E com dinheiro, exiba uma mensagem
recomendando uma lanchonete.
b. Se não estiver com fome OU não tiver dinheiro, exiba uma mensagem
informando que é melhor ele comer em casa.*/

var fome = prompt('Você está com fome? s/n')
var dinheiro = prompt('Você tem dinheiro? s/n')
if(fome == 's' && dinheiro == 's'){
    console.log('Eu te recomendo comer um lanche')
}else if(fome == 's'){
    console.log('E melhor você comer em casa')
} 