class TreeNode {
  char?: string;
  dot?: TreeNode;
  dash?: TreeNode;

  constructor(char?: string) {
    this.char = char;
  }
}

// Build the Morse code tree
function buildMorseTree(): TreeNode {
  const root = new TreeNode();

  // Level 1
  root.dot = new TreeNode("E");
  root.dash = new TreeNode("T");

  // Level 2
  root.dot.dot = new TreeNode("I");
  root.dot.dash = new TreeNode("A");
  root.dash.dot = new TreeNode("N");
  root.dash.dash = new TreeNode("M");

  // Level 3
  root.dot.dot.dot = new TreeNode("S");
  root.dot.dot.dash = new TreeNode("U");
  root.dot.dash.dot = new TreeNode("R");
  root.dot.dash.dash = new TreeNode("W");

  root.dash.dot.dot = new TreeNode("D");
  root.dash.dot.dash = new TreeNode("K");
  root.dash.dash.dot = new TreeNode("G");
  root.dash.dash.dash = new TreeNode("O");

  return root;
}

function possibilities(signals: string): string[] {
  const root = buildMorseTree();
  const result: string[] = [];

  function dfs(node: TreeNode | undefined, index: number) {
    if (!node) return;
    if (index === signals.length) {
      if (node.char) result.push(node.char);
      return;
    }

    const symbol = signals[index];
    if (symbol === ".") {
      dfs(node.dot, index + 1);
    } else if (symbol === "-") {
      dfs(node.dash, index + 1);
    } else if (symbol === "?") {
      dfs(node.dot, index + 1);
      dfs(node.dash, index + 1);
    }
  }

  dfs(root, 0);
  return result;
}

//Example usage
console.log(possibilities("."));     
console.log(possibilities("-.?"));   
console.log(possibilities("..?"));    
console.log(possibilities("?-?"));    
console.log(possibilities("???"));
console.log(possibilities("??"))
console.log(possibilities("?"));   