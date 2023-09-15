// Problem 1: Program to count occurrences of a given character in a string.

function countCharacterOccurrences(inputString, targetCharacter) {
  let count = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === targetCharacter) {
      count++;
    }
  }

  return count;
}

const input1 = "geeksforgeeks";
const target1 = "e";
console.log(
  `Count of '${target1}' in "${input1}": ${countCharacterOccurrences(
    input1,
    target1
  )}`
);

const input2 = "abccdefgaa";
const target2 = "3";
console.log(
  `Count of '${target2}' in "${input2}": ${countCharacterOccurrences(
    input2,
    target2
  )}`
);
