const possibilities = (signals: string): string[] => {
  // Build Morse code tree
  const root: any = {};
  root.dot = { char: "E" };
  root.dash = { char: "T" };

  root.dot.dot = { char: "I" };
  root.dot.dash = { char: "A" };
  root.dash.dot = { char: "N" };
  root.dash.dash = { char: "M" };

  root.dot.dot.dot = { char: "S" };
  root.dot.dot.dash = { char: "U" };
  root.dot.dash.dot = { char: "R" };
  root.dot.dash.dash = { char: "W" };

  root.dash.dot.dot = { char: "D" };
  root.dash.dot.dash = { char: "K" };
  root.dash.dash.dot = { char: "G" };
  root.dash.dash.dash = { char: "O" };

  // DFS to find all possible letters
  const result: string[] = [];

  const dfs = (node: any, index: number): void => {
    if (!node) return;
    if (index === signals.length) {
      if (node.char) result.push(node.char);
      return;
    }

    const symbol = signals[index];
    if (symbol === ".") dfs(node.dot, index + 1);
    else if (symbol === "-") dfs(node.dash, index + 1);
    else if (symbol === "?") {
      dfs(node.dot, index + 1);
      dfs(node.dash, index + 1);
    }
  };

  dfs(root, 0);
  return result;
};

console.log(possibilities("."));     // [ 'E' ]
console.log(possibilities("-.?"));   // [ 'D', 'K' ]
console.log(possibilities("..?"));   // [ 'S', 'U', 'R', 'W' ]
console.log(possibilities("?-?"));   // [ 'R', 'W', 'G', 'O' ]
console.log(possibilities("???"));   // [ 'S', 'U', 'R', 'W', 'D', 'K', 'G', 'O' ]
console.log(possibilities("??"));    // [ 'I', 'A', 'N', 'M' ]
console.log(possibilities("?"));     // [ 'E', 'T' ]