function getUserInput() {
  return parseInt(prompt("Enter integer:"));
}

function getFizzBuzz(num) {
  if(num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz"
  } else if (num % 3 == 0) {
    return "Fizz"
  } else if (num % 5 == 0) {
    return "Buzz"
  } else {
    return num;
  }
}

let userInput = getUserInput();
let finalString = "1";

for(let i = 2; i <= userInput; i++) {
  finalString += ", " + getFizzBuzz(i);
}

alert(finalString);