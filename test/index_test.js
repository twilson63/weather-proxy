const test = require('tape')
const request = require('supertest')
const yup = require('yup')
const app = require('../app')

const schema = yup.object().shape({
  location: yup.string().required(),
  forecast: yup.string().required(),
  temp: yup.number().required(),
  icon: yup.string().url()
})

/**
 * Get Weather for Atlanta
 *
 */
test('get weather for atlanta', t => {
  request(app)
    .get('/?q=Atlanta')
    .then(res => {
      schema.isValid(res.body).then(valid => {
        t.ok(valid)
        t.end()
      })
    })
})

/**
 * Get Weather for Orlando
 *
 */
test('get weather for orlando', t => {
  request(app)
    .get('/?q=Orlando')
    .then(res => {
      schema.isValid(res.body).then(valid => {
        t.notOk(valid)
        t.end()
      })
    })
})
