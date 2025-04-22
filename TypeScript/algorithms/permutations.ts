import * as readline from "readline";

function beautifulPermutation(max: number): number[] | string {
  if (max === 1) {
    return [1];
  }
  if (max === 2 || max === 3) {
    return "NO SOLUTION";
  }

  const result: number[] = [];

  for (let i = 2; i <= max; i += 2) {
    result.push(i);
  }

  for (let i = 1; i <= max; i += 2) {
    result.push(i);
  }

  return result;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  const n = parseInt(input, 10);
  const result = beautifulPermutation(n);

  if (typeof result === "string") {
    console.log(result);
  } else {
    console.log(result.join(" "));
  }

  rl.close();
});
