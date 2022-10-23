var tudojunto = ' '
for (var i = 0; i < 4; i++){
    var palavra = prompt('Digite uma palavra')
    tudojunto = tudojunto.concat(' ', palavra)
}
console.log(tudojunto)