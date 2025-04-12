"use strict";
const asciiDigits = {
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
    ":": ["   ", " . ", " . "], // optional: add a dot-like separator
};
function printTimeASCII(time) {
    const lines = ["", "", ""];
    for (const char of time) {
        const asciiChar = asciiDigits[char];
        if (!asciiChar) {
            throw new Error(`Invalid character: ${char}`);
        }
        lines[0] += asciiChar[0] + " ";
        lines[1] += asciiChar[1] + " ";
        lines[2] += asciiChar[2] + " ";
    }
    return lines.join("\n");
}
// Example
console.log(printTimeASCII("12:45"));
