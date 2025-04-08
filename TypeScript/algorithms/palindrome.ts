function esPalindromo(cadena: string): boolean {
    const limpia = cadena
      .toLowerCase()
      .replace(/[^a-z0-9]/g, ""); // quita todo lo que no sea letra o número
  
    const invertida = limpia.split("").reverse().join("");
  
    return limpia === invertida;
  }

  console.log(esPalindromo("anita lava la tina")); // true
console.log(esPalindromo("reconocer"));          // true
console.log(esPalindromo("Hola mundo"));         // false
console.log(esPalindromo("A man, a plan, a canal: Panama")); // true
