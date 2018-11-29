/**
 *
 * @param {string} abbr
 */
const getWeatherIcon = abbr =>
  `https://www.metaweather.com/static/img/weather/png/64/${abbr}.png`

module.exports = getWeatherIcon
