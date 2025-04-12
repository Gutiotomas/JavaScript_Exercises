// A dictionary that maps each digit and ":" to its ASCII display form
const digits: Record<string, string[]> = {
  "0": [" _ ", "| |", "|_|"],
  "1": ["   ", "  |", "  |"],
  "2": [" _ ", " _|", "|_ "],
  "3": [" _ ", " _|", " _|"],
  "4": ["   ", "|_|", "  |"],
  "5": [" _ ", "|_ ", " _|"],
  "6": [" _ ", "|_ ", "|_|"],
  "7": [" _ ", "  |", "  |"],
  "8": [" _ ", "|_|", "|_|"],
  "9": [" _ ", "|_|", " _|"],
  " ": ["   ", "   ", "   "],
  ":": ["   ", " . ", " . "],
};

const convertToSevenSegment = (timeString: string): string => {
  // Replace leading zero with a space for aesthetic reasons
  let displayTime = timeString;
  if (timeString.startsWith("0")) {
    displayTime = " " + timeString.slice(1);
  }

  // We'll build each row of the ASCII output separately
  const line1: string[] = [];
  const line2: string[] = [];
  const line3: string[] = [];

  for (const char of displayTime) {
    const asciiChar = digits[char];

    line1.push(asciiChar[0]);
    line2.push(asciiChar[1]);
    line3.push(asciiChar[2]);
  }

  // Join each line with no separator between characters
  const output = [line1.join(""), line2.join(""), line3.join("")].join("\n");

  return output;
};

// Example usage
const timeToShow = "10:12";
const res = convertToSevenSegment(timeToShow);
console.log(res);
