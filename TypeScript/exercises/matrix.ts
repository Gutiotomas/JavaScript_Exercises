const tablero = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 0, 1]
  ];
  
  // Reto: Cuenta cuántos 1 hay en la matriz

  
let count = 0;
    for (let i = 0; i < tablero.length; i++){
        for (let j = 0; j < tablero[i].length; j++){
            if (tablero[i][j]===1){
            count +=1;
            }
        }
    }
console.log(count);  


const matriz = [
    [2, 4, 6],
    [1, 3],
    [7, 8, 9, 10]
  ];

let suma_elementos= 0;
for (let i = 0; i < matriz.length; i++){
  for (let j =0; j < matriz[i].length; j++){
    suma_elementos += matriz[i][j];
  }
} 
console.log(suma_elementos);