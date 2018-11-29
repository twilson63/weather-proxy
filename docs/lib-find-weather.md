## Functions

<dl>
<dt><a href="#buildQueryUrl">buildQueryUrl(location)</a> ⇒</dt>
<dd></dd>
<dt><a href="#buildWeatherUrl">buildWeatherUrl(woeid)</a> ⇒</dt>
<dd></dd>
<dt><a href="#findWeather">findWeather(location)</a> ⇒</dt>
<dd><p>takes a location string and calls the metaweather api to get the current weather,
then returns the weather in a specific object shape</p>
</dd>
</dl>

<a name="buildQueryUrl"></a>

## buildQueryUrl(location) ⇒
**Kind**: global function  
**Returns**: string  

| Param | Type |
| --- | --- |
| location | <code>string</code> | 

<a name="buildWeatherUrl"></a>

## buildWeatherUrl(woeid) ⇒
**Kind**: global function  
**Returns**: string  

| Param | Type |
| --- | --- |
| woeid | <code>string</code> | 

<a name="findWeather"></a>

## findWeather(location) ⇒
takes a location string and calls the metaweather api to get the current weather,
then returns the weather in a specific object shape

**Kind**: global function  
**Returns**: Promise  

| Param | Type |
| --- | --- |
| location | <code>string</code> | 

