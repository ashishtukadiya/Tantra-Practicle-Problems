// Problem 3:  Biggest and smallest number in an array

function findMaxAndMin(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return `Maximum is: ${max}\nMinimum is: ${min}`;
}

const arr1 = [1, 2, 3, 4, 5];
console.log(findMaxAndMin(arr1)); // Output: Maximum is: 5, Minimum is: 1

const arr2 = [5, 3, 7, 4, 2];
console.log(findMaxAndMin(arr2)); // Output: Maximum is: 7, Minimum is: 2
