import * as readline from "readline";

const increase = (arr: number[]): number => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      count += arr[i - 1] - arr[i];
      arr[i] = arr[i - 1];
    }
  }
  return count;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (maxInput) => {
  const max = parseInt(maxInput, 10);

  rl.question("", (numbersInput) => {
    const numbers = numbersInput.split(" ").map(Number);

    console.log(increase(numbers));
    rl.close();
  });
});
