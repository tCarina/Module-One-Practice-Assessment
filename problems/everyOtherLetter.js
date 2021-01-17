/**
 * Returns a new string with every other letter.
 * @param {string} str - a string
 * @returns {str} -
 *
 * ex: everyOtherLetter("mississippi") //=> "msispi"
 *
 */

function everyOtherLetter(str) {
  let newStr = "";
  str.split(" ").forEach((i) => {
    if (i % 2 === 0) {
      newStr += str[i];
    }
  });
  return newStr;
}

module.exports = everyOtherLetter;
