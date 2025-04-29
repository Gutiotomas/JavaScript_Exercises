import * as readline from "readline";

const missingNumber = (max: number, arr: number[]): number => {
  let totalSum = (max * (max + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
      sum += arr[i];
  return totalSum - sum;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (maxInput) => {
  const max = parseInt(maxInput, 10);

  rl.question("", (numbersInput) => {
    const numbers = numbersInput.split(" ").map(Number);

    console.log(missingNumber(max, numbers));
    rl.close();
  });
});
