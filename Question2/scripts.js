// Write a function in JavaScript that will return the sum of the longest streak of consecutive increasing numbers within an array. 
// •	If there are no consecutive numbers in the array, the function will return zero.
// •	If there are multiple instances of the same number of consecutive numbers 
//      (increasing by 1) in the array, the function will return the largest sum calculated between all instances.
// •	Examples:
// o	[1, 2, 3, 6, 9, 34, 2, 6] would return 6 (1+2+3)
// o	[3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3] would return 27 (8+9+10)
// o	[100, 101, 102, 3, 4, 5, 6, 9] would return 18 (3+4+5+6)

/**
@param {array} array
*/
function longestStreak(array) {
    let consecNums = [];
    let longest = 0;
    let tempArray = [];
    let greatestSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] - 1 == tempArray[tempArray.length - 1] || tempArray.length == 0) {
            tempArray.push(array[i]);
        } else {
            if (tempArray.length > 1 && longest == tempArray.length) {
                consecNums.push(tempArray);
            } else if (tempArray.length > longest) {
                longest = tempArray.length;
                consecNums = [tempArray];
            }
            tempArray = [array[i]]
        }
    }
    if (tempArray.length > 1 && longest == tempArray.length) {
        consecNums.push(tempArray);
    } else if (tempArray.length > longest) {
        longest = tempArray.length;
        consecNums = [tempArray];
    }
    if (longest > 1) {
        consecNums.forEach(nums => {
            let sum = 0;
            nums.forEach(num => {
                sum += num
            });
            if (sum > greatestSum) {
                greatestSum = sum;
            }
        });
    } else {
        greatestSum = 0;
    }
    return greatestSum;
}

console.log(longestStreak([1, 2, 3, 6, 9, 34, 2, 6]));
console.log(longestStreak([3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3]));
console.log(longestStreak([100, 101, 102, 3, 4, 5, 6, 9]));
console.log(longestStreak([100, 107, 102, 3, 8, 5, 12, 9]));