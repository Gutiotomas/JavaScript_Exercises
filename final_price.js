const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce el precio del producto: ", function(precio) {
    rl.question("Introduce el IVA del producto: ", function(iva) {
        iva = parseFloat(iva) / 100;
        var final_price = parseFloat(precio)* iva + parseFloat(precio);
        console.log("El precio final con IVA es: " + final_price);
        rl.close();
    });
});