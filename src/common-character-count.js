const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const map = new Map();
  s1.split('').forEach((letter) => {
    if (map.has(letter)) {
      const count = map.get(letter);
      count[0] = count[0] + 1;
      map.set(letter, count);
    } else {
      map.set(letter, [1, 0])
    }
  })

  s2.split('').forEach((letter) => {
    if (map.has(letter)) {
      const count = map.get(letter);
      count[1] = count[1] + 1;
      map.set(letter, count);
    } else {
      map.set(letter, [0, 1])
    }
  })
  let res = 0;
  for (let amount of map.values()) {
    res = res + Math.min(...amount);
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
