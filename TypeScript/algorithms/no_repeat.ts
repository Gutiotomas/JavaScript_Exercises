function primerNoRepetido(cadena: string): string | null {
    const conteo: { [caracter: string]: number } = {};
  
    // Primera pasada: contar cada carácter
    for (const char of cadena) {
      conteo[char] = (conteo[char] || 0) + 1;
    }
  
    // Segunda pasada: encontrar el primero con frecuencia 1
    for (const char of cadena) {
      if (conteo[char] === 1) {
        return char;
      }
    }
  
    return null;
  }

console.log(primerNoRepetido("abacabad")); // "c"
console.log(primerNoRepetido("aabbcc"));   // null
console.log(primerNoRepetido("aabccbd"));  // "d"

  