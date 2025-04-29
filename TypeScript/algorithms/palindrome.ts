function esPalindromo(cadena: string): boolean {
  const limpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, ""); // quita todo lo que no sea letra o número
  let start = 0;
  let end = limpia.length - 1;
  while (start < end) {
    if (limpia[start] !== limpia[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

function isPalindrome(arr: number[]): boolean {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] != arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(esPalindromo("anita lava la tina")); // true
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("Hola mundo")); // false
console.log(esPalindromo("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome([1, 3, 5, 2])); // false
console.log(isPalindrome([1, 3, 5, 3, 1])); // true
