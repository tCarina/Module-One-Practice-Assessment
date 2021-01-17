/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
  let smallest = Infinity
      let sSmallest = smallest
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] < smallest) {
             sSmallest = smallest
              smallest = arr[i]
          } else if (arr[i] < sSmallest){
              sSmallest = arr[i]
          }
      }
      return sSmallest
  }

module.exports = secondSmallest;
