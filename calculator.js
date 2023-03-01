//Task 1 //Write a function that calculates sum, difference, multiplication and division between given elements depending on passed operation symbol.

function getAnswer(firstNumber, secondNumber, actionSymbol) {

    switch (actionSymbol) {
      case '+':
        return firstNumber + secondNumber
      case '-':
        return firstNumber - secondNumber
      case '*':
        return firstNumber * secondNumber
      case '/':
        return firstNumber / secondNumber
    }
  }
  const result = getAnswer(12, 3, '*');
  console.log(result);
  