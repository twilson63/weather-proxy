require('isomorphic-fetch')
const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./app')

/**
 * Weather Proxy
 *
 * RESTful proxy that takes a query parameter of a city and returns the current weather
 *
 * | Parameter  | Example  |
 * | ---------- | -------- |
 * | q          | Atlanta  |
 *
 */
app.use(cors({ credentials: true }))
app.use(routes)

app.listen(5000)
