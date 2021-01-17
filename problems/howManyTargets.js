/**
 * Returns the number of times the target is in the array
 * @param {Array} arr - array of elements
 * @param {any} target - target to find in array
 * @returns {number} - amount of times the target was included
 *
 * ex: howManyTargets([1, 2, 3, 2, 1, 1], 1) //=> 3
 *
 */

function howManyTargets(array, tar) {
  let count = 0;
  array.forEach((el) => {
    if (el === tar) {
      count += 1;
    }
  });
  return count;
}

module.exports = howManyTargets;
