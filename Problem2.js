// Problem 2:  Determine whether a given string is Palindrome

function isPalindrome(inputString) {
  const cleanedString = inputString.replace(/\s/g, "").toLowerCase();

  for (let i = 0; i < Math.floor(cleanedString.length / 2); i++) {
    if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

const input1 = "anna";
console.log(`Is "${input1}" a palindrome? ${isPalindrome(input1)}`); // Output: true

const input2 = "India";
console.log(`Is "${input2}" a palindrome? ${isPalindrome(input2)}`); // Output: false
