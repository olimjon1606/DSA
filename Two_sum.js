function twoSum(numbers, target) {
    let array = []; // pointer for rightmost element
    for (i = 0; i < numbers.length; i++) {
      for (j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          array.push([numbers[i], numbers[j]]);
        }
      }
    }
    return array;
  }
  
  let n = [1,10,12,4,2,65,43,12, 2, 3, 4, 5, 6, 7];
  n = [...(new Set(n))]
  console.log(twoSum(n, 12));
  