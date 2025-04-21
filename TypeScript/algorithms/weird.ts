import * as readline from "readline";

function weirdAlgorithm(n: number): number[] {
  if (n <= 0) {
    throw new Error("Input must be a positive integer.");
  }

  const sequence: number[] = [n];

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    sequence.push(n);
  }

  return sequence;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  const n = parseInt(input, 10);

  if (!isNaN(n) && n > 0) {
    const result = weirdAlgorithm(n);
    console.log(result.join(" "));
  }

  rl.close();
});
