function getUserInput() {
  return parseInt(prompt("Enter integer:"));
}

let userInput = getUserInput();

let i = 1;
let finalString = "";

while(i <= userInput) {
  if(i % 3 == 0 && i % 5 == 0) {
    finalString += " FizzBuzz";
  } else if (i % 3 == 0) {
    finalString += " Fizz";
  } else if (i % 5 == 0) {
    finalString += " Buzz";
  } else {
    finalString += ` ${i}`;
  }
  i++;
}

alert(finalString);