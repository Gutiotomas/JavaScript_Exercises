function countLEDs(height: number, width: number): number {
  // Each square adds LEDs to the grid, but they are shared
  const leds = (height + 1) * (width + 1);
  return leds;
}

// Example usage
console.log(countLEDs(3, 5)); // 24
console.log(countLEDs(1, 1)); // 4
console.log(countLEDs(0, 0)); // 1