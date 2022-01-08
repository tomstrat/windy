import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js"
import {ExternalForcastData} from "./interfaces/externalFormat.interface.ts"
import {badDirection, badSpeed} from "./rules/rules.ts"
import {formatForcast, removeInnerObject} from "./formatters/formatters.ts"
import TEST_DATA from "./testdata.ts"

const API_KEY = "84159e48-6bfd-11ec-a58f-0242ac130002-84159ec0-6bfd-11ec-a58f-0242ac130002"
const LAT = "53.2290"
const LNG = "4.5198"
const PARAMS = "swellPeriod,waveHeight,windDirection,windSpeed"
const ENDDATE = new Date(new Date().getTime()+(5*24*60*60*1000)).getTime() / 1000 // 5 Days from now
const Url = `https://api.stormglass.io/v2/weather/point?lat=${LAT}&lng=${LNG}&params=${PARAMS}&source=sg&end=${ENDDATE}`

// const response = await fetch(Url, {
//   headers: {
//     'Authorization': API_KEY
//   }
// })
// const body = await response.json()

const body: ExternalForcastData = TEST_DATA

const result = R.pipe(
               R.map(removeInnerObject),
               R.filter(badSpeed),
               R.filter(badDirection),
               R.map(formatForcast),
)(body.hours)

console.log(result, result.length)
