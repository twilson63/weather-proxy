/**
 * Converts celsius to fahrenheight
 *
 * @param {number} celsius
 * @returns {number} fahrenheight
 *
 */
function calcTemp(celsius) {
  return Math.round(celsius * (9 / 5) + 32)
}

module.exports = calcTemp
