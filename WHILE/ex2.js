/*Escreva um algoritmo que faça as seguintes perguntas ao seu usuário, guarde as
respostas separadamente:
a. Se ele está com o cinto de segurança
b. Se ele está alcoolizado
c. Se o semáforo está verde
Com base nas respostas do usuário informe que o usuário pode prosseguir se
estiver com o cinto E não estiver alcoolizado E o semáforo estiver verde, se não
informar que ele não deve prosseguir.*/

var cinto = prompt('Você está com cinto de segurança? s/n')
var alcool = prompt('Você está alcoolizado? s/n')
var semaforo = prompt('O semáforo está verde? s/n')
if(cinto == 's' && alcool != 's' && semaforo == 's'){
    console.log('Você pode continuar seu caminho então!')
}else{
    console.log('Você não deve continuar seu caminho então!')
}