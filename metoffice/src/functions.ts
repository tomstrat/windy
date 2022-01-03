import weatherCodes from "./weatherCodes.ts"
import {WeatherCodes, Period, Rep} from "./interfaces/externalForcast.interface.ts"
import {Forcast, Weekday, TimePeriod} from "./interfaces/internalForcast.interface.ts"
import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";


export function formatTime(minsFromMidnight: string): string{
  const hour = (parseInt(minsFromMidnight) / 60).toString()
  return hour.length > 1 ? `${hour}:00` : `0${hour}:00`
}

export function formatWeather(code: keyof WeatherCodes): string{
  return weatherCodes[code]
}

export function formatDay(date: string) {
  const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return DAYS[new Date(date).getDay()]
}

export function checkExists<T>(target: T, message: string) {
  if(!target) return `No ${message} Given`
  return target
}

export function formatForcast(days: Period[]): Forcast {

  return {
    weekdays: days.reduce((current: Weekday[], next: Period) => {
      current.push({
        day: checkExists(formatDay(next.value), "Day"),
        timePeriods: R.path(["Rep"], next).reduce((current: TimePeriod[], next: Rep) => {
          current.push({
            time: checkExists(formatTime(next.$), "Time"),
            weather: checkExists(formatWeather(next.W), "Weather"),
            temperature: {
              units: "Celcius",
              value: checkExists(parseInt(next.T), "Temperature")
            },
            wind: {
              direction: checkExists(next.D, "Direction"),
              units: "MPH",
              speed: checkExists(parseInt(next.S), "Speed"),
              gust: checkExists(parseInt(next.G), "Gust"),
            }
          })
          return current
        }, [])
      })
      return current
    }, [])
  }

}