import * as readline from "readline";

const missingNumber = (max: number, arr: number[]): number => {
  let arrSort = arr.sort((a, b) => a - b);
  let missing = 0;
  for (let i = 0; i < arrSort.length + 1; i++)
    if (i + 1 != arrSort[i]) {
      missing = i + 1;
      break;
    }
  return missing;
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
