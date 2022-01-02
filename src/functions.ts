import weatherCodes from "./weatherCodes.ts"
import {WeatherCodes, Period, Rep} from "./interfaces/externalForcast.interface.ts"
import {Forcast, Weekday, TimePeriod} from "./interfaces/internalForcast.interface.ts"
import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";


export function formatTime(minsFromMidnight: string): string{
  return (parseInt(minsFromMidnight) / 60).toString()
}

export function formatWeather(code: keyof WeatherCodes): string{
  return weatherCodes[code]
}

export function formatDay(date: string) {
  const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return DAYS[new Date(date).getDay()]
}

export function formatForcast(days: Period[]): Forcast {

  return {
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

}