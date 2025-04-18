//Return a fibonacci sequence as an array.

//If the Fibonacci wants to start from 1, then the first two numbers should be 1 and 1.

function fibonacci(n: number): number[] {
  const fibSequence = [0, 1];

  let currentValue = 1;
  let previousValue = 0;

  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return fibSequence;
  }

  let iteratorCounter: number = n - 2;

  while (iteratorCounter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;
    fibSequence.push(currentValue);
    iteratorCounter -= 1;
  }

  return fibSequence;
}

//Calculate fibonacci number at specific position using Dynamic Programming approach.

//If the Fibonacci wants to start from 1, then the first two numbers should be 1 and 1.

function fibonacciNth(n: number): bigint {
  let currentValue1 = 1n;
  let previousValue1 = 0n;

  if (n === 1) {
    return 0n;
  }

  if (n === 2) {
    return 1n;
  }

  let iterationsCounter1: number = n - 2;

  while (iterationsCounter1) {
    currentValue1 += previousValue1;
    previousValue1 = currentValue1 - previousValue1;

    iterationsCounter1 -= 1;
  }

  return currentValue1;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(10));
console.log(fibonacciNth(1));
console.log(fibonacciNth(2));
console.log(fibonacciNth(10));
