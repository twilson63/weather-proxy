# Weather Proxy

A API that provides the current weather of a given city with the temperature in fahrenheit, and a forecast and icon of the forecast.

## Usage

```js
const result = await fetch(`https://weather.twilson63.xyz?q=Atlanta`).then(r =>
  r.json()
)
console.log(result)
```

Response

```json
{
  "location": "Atlanta",
  "forecast": "Showers",
  "temp": 56,
  "icon": "https://www.metaweather.com/static/img/weather/png/64/s.png"
}
```

## Docs

[See Docs](docs)

## API

[Swagger View](http://editor.swagger.io/?url=https://raw.githubusercontent.com/twilson63/weather-proxy/master/swagger.json)

## LICENSE

MIT
