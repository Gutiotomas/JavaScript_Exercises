function esAnagrama(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
  
    const conteo: { [letra: string]: number } = {};
  
    for (const letra of a) {
      conteo[letra] = (conteo[letra] || 0) + 1;
    }
  
    for (const letra of b) {
      if (!conteo[letra]) return false;
      conteo[letra]--;
    }
  
    return true;
  }

  console.log(esAnagrama("listen", "silent")); // true
console.log(esAnagrama("hola", "aloh"));     // true
console.log(esAnagrama("rat", "car"));       // false
console.log(esAnagrama("tomás", "samtó"));   // true
console.log(esAnagrama("tomas", "samto"));
