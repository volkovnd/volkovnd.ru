/**
 *
 * @param {Number} max
 * @param {Number} [min = 0]
 * @returns {Number}
 */
export function getRandomNumber(max, min = 0) {
  return Math.floor(min + Math.random() * (max - min));
}

/**
 * @param {any} value
 * @returns {number}
 */
export function toInteger(value) {
  return parseInt(value, 10);
}

/**
 * @param {any} value
 * @returns {number}
 */
export function toNumber(value) {
  return parseFloat(value);
}
