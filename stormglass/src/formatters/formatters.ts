import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js"
import {ExternalForcastInner} from "../interfaces/externalFormat.interface.ts"
import {Forcast} from "../interfaces/internalFormat.interface.ts"
import {convertToMilesPerHour} from "./conversions.ts"
import {ForcastDirection, ForcastSpeed} from "../settings.ts"

export function removeInnerObject<T>(obj: T){
  return R.map(<U>(value: U) => {

    if(typeof value !== "object") return value // not object 
    const keys = Object.keys(value)
    if(keys.length > 1) return value // more than one param
    const inner: keyof U = keys[0] as keyof U
    return value[inner] // return the first param
    
  }, obj)
}

export function formatForcast(forcast: ExternalForcastInner): Forcast {

  return {
    swellPeriod: forcast.swellPeriod,
    time: forcast.time,
    waveHeight: forcast.waveHeight,
    windDirection: formatDirection("windDirection")(forcast),
    windSpeed: formatSpeed("windSpeed")(forcast),
  }
  
}

export function formatDirection(prop: ForcastDirection): (forcast: ExternalForcastInner) => string {

  return (forcast: ExternalForcastInner): string => {
    type SectorKey = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17
    const sectors = {
      1: "N", 2: "NNE", 3: "NE", 4: "ENE",
      5: "E", 6: "ESE", 7: "SE", 8: "SSE",
      9: "S", 10: "SSW", 11: "SW", 12: "WSW",
      13: "W", 14: "WNW", 15: "NW", 16: "NNW", 17: "N"
    }

    const sector = Math.floor((forcast[prop] % 360) / 22.5) + 1 as SectorKey

    return sectors[sector]
  }  
}

export function formatSpeed(prop: ForcastSpeed): (forcast: ExternalForcastInner) => number {

  return (forcast: ExternalForcastInner): number => {
    const newSpeed = convertToMilesPerHour(forcast[prop])
    return newSpeed
  }
  
}
