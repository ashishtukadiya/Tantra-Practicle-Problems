// Problem 4:  Swap two Strings Without Using any Third Variable


function swapStringsWithoutThirdVariable(a, b) {
    a = a + b;
    b = a.substring(0, a.length - b.length); 
    a = a.substring(b.length); 
    return `Strings after swap: a = ${a} and b = ${b}`;
  }
  
 
  let a = "Hello";
  let b = "World";
  console.log(swapStringsWithoutThirdVariable(a, b)); // Output: Strings after swap: a = World and b = Hello
  