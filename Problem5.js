// Problem 5: Swap two numbers without using a temporary variable

function swapNumbersWithoutTempVariable(a, b) {
    a = a + b; 
    b = a - b; 
    a = a - b; 
    return `Numbers after swap: a = ${a} and b = ${b}`;
  }
  
  // Example usage:
  let a = 10;
  let b = 50;
  console.log(swapNumbersWithoutTempVariable(a, b)); // Output: Numbers after swap: a = 50 and b = 10
  