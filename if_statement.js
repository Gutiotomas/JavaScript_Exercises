var number = 2;
if (number <= 5) {
  console.log("The number is less than or equal to 5");
}
else if (number > 5 && number <= 10) {
  console.log("The number is greater than 5 and less than or equal to 10");
}
else {
    console.log("The number is greater than 10");
}

// or alternatively 

var num = 8;

switch (true) {  // Use true to evaluate the conditions within each case
    case (num <= 5): {
        console.log("The number is less than or equal to 5");
        break;
    }
    case (num > 5 && num <= 10): {
        console.log("The number is greater than 5 and less than or equal to 10");
        break;
    }
    default: {
        console.log("The number is greater than 10");
    }
}