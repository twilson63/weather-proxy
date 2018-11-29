require('isomorphic-fetch')
const calcTemp = require('./calc-temp')
const getWeatherIcon = require('./weather-icon')

/**
 *
 * @param {string} location
 * @returns string
 */
const buildQueryUrl = location =>
  `https://www.metaweather.com/api/location/search?query=${location}`

/**
 *
 * @param {string} woeid
 * @returns string
 */
const buildWeatherUrl = woeid =>
  `https://www.metaweather.com/api/location/${woeid}/`

/**
 *
 * takes a location string and calls the metaweather api to get the current weather,
 * then returns the weather in a specific object shape
 *
 * @param {string} location
 * @returns Promise
 */
const findWeather = async location => {
  //console.log(location);
  const locationInfo = await fetch(buildQueryUrl(location))
    .then(res => res.json())
    .catch(err => {
      return []
    })

  if (locationInfo.length === 0) {
    return Promise.reject({ error: true, message: 'Could not find location' })
  }

  return await fetch(buildWeatherUrl(locationInfo[0].woeid))
    .then(res => res.json())
    .then(info => {
      return {
        location: info.title,
        forecast: info.consolidated_weather[0].weather_state_name,
        temp: calcTemp(info.consolidated_weather[0].the_temp),
        icon: getWeatherIcon(info.consolidated_weather[0].weather_state_abbr)
      }
    })
}

module.exports = findWeather
