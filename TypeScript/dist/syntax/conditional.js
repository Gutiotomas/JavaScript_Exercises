"use strict";
let number1 = 2;
if (number1 <= 5) {
    console.log("The number is less than or equal to 5");
}
else if (number1 > 5 && number1 <= 10) {
    console.log("The number is greater than 5 and less than or equal to 10");
}
else {
    console.log("The number is greater than 10");
}
// or alternatively 
let num2 = 8;
switch (true) { // Use true to evaluate the conditions within each case
    case (num2 <= 5): {
        console.log("The number is less than or equal to 5");
        break;
    }
    case (num2 > 5 && num2 <= 10): {
        console.log("The number is greater than 5 and less than or equal to 10");
        break;
    }
    default: {
        console.log("The number is greater than 10");
    }
}
