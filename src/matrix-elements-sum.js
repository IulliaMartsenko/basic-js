const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const skipColumns = new Array(matrix[0].length).fill(false);
  let count = 0;
  matrix.forEach(array => {
    array.forEach((element, index) => {
      if (!skipColumns[index]) {
        if (element === 0) {
          skipColumns[index] = true;
        }
        count = count + element;
      }
    })
  })
  return count;
}

module.exports = {
  getMatrixElementsSum
};
