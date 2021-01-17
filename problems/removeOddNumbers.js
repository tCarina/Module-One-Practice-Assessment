/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers(arr) {
let newArr = arr.filter(el => {
    if(el % 2 === 0){
        return arr[el]
    }
})
return newArr
}

module.exports = removeOddNumbers