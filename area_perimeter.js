const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce la base del cuadrado: ", function(base) {
    var area = parseFloat(base) ** 2;
    console.log("El área del cuadrado es: " + area);
    var perimeter = parseFloat(base) * 4;
    console.log("El perímetro del cuadrado es: " + perimeter);
});