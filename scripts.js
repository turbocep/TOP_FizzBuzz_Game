function getUserInput() {
  return prompt("Enter integer:");
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

let userInput;

/*I'd like to make the whole program ask for another input after
output is provided, unless cancel is clicked. My first guess is
that I'd have to put everything below this comment into a new
do...while loop. Will figure out later. Not a priority. It does
what it's supposed to and that's all that matters. */
do {
  userInput = getUserInput();
  if (userInput == null || (userInput > 0 && userInput % 1 == 0)) {
    break;
  } else {
    alert("That's not a valid integer. Try again.");
  }
} while (true);

if (userInput) {
  let finalString = "1";

  for(let i = 2; i <= userInput; i++) {
    finalString += ", " + getFizzBuzz(i);
  }

  const choice = prompt("Enter 1 to print result to console, 2 to alert to screen and 3 for both:");

  switch (choice) {
    case "1":
      console.log(finalString);
      break;
    case "2":
      alert(finalString);
      break;
    case "3":
      console.log(finalString);
      alert(finalString);
  }
}