import {Forcast, Weekday, TimePeriod} from "./internalForcast.interface.ts"
import {Period, Rep, WeatherCodes} from "./externalForcast.interface.ts"
import * as weatherCodes from "./weatherCodes.json" assert { type: "json" }
import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const API_KEY = "a8e9d8e8-694d-4873-8560-d326c5462c3e"
const LOCATION = "354808"
const url = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${LOCATION}?res=3hourly&key=${API_KEY}`

const response = await fetch(url)
const body = await response.json()
const days = R.path(["SiteRep", "DV", "Location", "Period"], body)

const weeklyForcast: Forcast = {
  weekdays: days.reduce((current: Weekday[], next: Period) => {
    current.push({
      day: formatDay(next.value),
      timePeriods: R.path(["Rep"], next).reduce((current: TimePeriod[], next: Rep) => {
        current.push({
          time: formatTime(next.$),
          weather: formatWeather(next.W),
          temperature: {
            units: "Celcius",
            value: parseInt(next.T)
          },
          wind: {
            direction: next.D,
            units: "MPH",
            speed: parseInt(next.S),
            gust: parseInt(next.G),
          }
        })
        return current
      }, [])
    })
    return current
  }, [])
}

function formatTime(minsFromMidnight: string): string{
  return (parseInt(minsFromMidnight) / 60).toString()
}

function formatWeather(code: keyof WeatherCodes): string{
  return weatherCodes[code]
}

function formatDay(date: string) {
  return DAYS[new Date(date).getDay()]
}

console.log(JSON.stringify(weeklyForcast))
