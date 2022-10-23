var contadorDeCedulas = 0
var valorTotal = parseInt(prompt('Qual o valor a ser sacado? '))

contadorDeCedulas = math.floor(valorTotal / 100)
valorTotal = valorTotal - (100 * contadorDeCedulas)
console.log('Notas de 100: ' + contadorDeCedulas)

contadorDeCedulas = math.Floor(valorTotal / 50)
valorTotal = valorTotal - (50 * contadorDeCedulas)
console.log('Notas de 50: ' + contadorDeCedulas)

contadorDeCedulas = math.Floor(valorTotal / 10)
valorTotal = valorTotal - (10 * contadorDeCedulas)
console.log('Notas de 10: ' + contadorDeCedulas)

contadorDeCedulas = math.Floor(valorTotal/1)
valorTotal = valorTotal - (1*contadorDeCedulas)
console.log('Notas de 1: ')