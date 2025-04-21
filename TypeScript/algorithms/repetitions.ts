import * as readline from "readline";

let count = 1;
let max = 1;
const repetitions = (DNA: string): number => {
  for (let i = 0; i < DNA.length; i++) {
    if (DNA[i] === DNA[i - 1]) {
      count += 1;
      if (count > max) {
        max = count;
      }
    } else {
      count = 1;
    }
  }
  return max;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  const DNA = input;

  console.log(repetitions(DNA));
  rl.close();
});
