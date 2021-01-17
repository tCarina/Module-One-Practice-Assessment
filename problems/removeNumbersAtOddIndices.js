/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices(arr) {
    let newArr = arr.filter(i => {
       return i % 2 !== 0
    })
    return newArr
}

module.exports = removeNumbersAtOddIndices