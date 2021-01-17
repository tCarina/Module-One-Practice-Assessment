/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

function removeEvenStrings(arr) {
    let oddStrings = arr.filter((e, i) => {
        return arr[i].length % 2 !== 0
    })
    return oddStrings
}

module.exports = removeEvenStrings
