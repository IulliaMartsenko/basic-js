const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res;
  n.toString().split('').forEach((digit, index, array) => {
    const resArr = array.slice();
    resArr.splice(index, 1)
    let current = Number(resArr.join(''));
    if (current > res || res === undefined) {
      res = current;
    } 
  })
  return res;
}

module.exports = {
  deleteDigit
};
