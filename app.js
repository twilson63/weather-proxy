const express = require('express')
const app = express()
const findWeather = require('./lib/find-weather')
/**
 * @swagger
 * /:
 *   get:
 *     description: Get Weather by City
 *     parameters:
 *     - name: q
 *       type: string
 *       in: query
 *     responses:
 *       '200':
 *          description: Success Response
 *          schema:
 *            $ref: '#/definitions/WeatherResponse'
 *
 */
app.get('/', async function(req, res) {
  if (req.query.q) {
    try {
      const result = await findWeather(req.query.q)
      return res.send(result)
    } catch (err) {
      return res.send({ error: true, message: err.message })
    }
  }
  res.send({ name: 'weather proxy' })
})

module.exports = app
