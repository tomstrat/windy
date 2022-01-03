import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js"
import {ExternalForcast, ExternalForcastInner} from "../interfaces/externalFormat.interface.ts"
import {Forcast} from "../interfaces/internalFormat.interface.ts"

type ForcastDirection = "windDirection" | "currentDirection" | "swellDirection" | "waveDirection"

export function removeInnerObject(obj: ExternalForcast): ExternalForcastInner {
  return R.map((value: {sg: number} | string) => {
    if(typeof value === "string") return value
    return value.sg
  }, obj)
}

export function formatDirection(prop: ForcastDirection): (forcast: ExternalForcastInner) => Forcast {

  return (forcast: ExternalForcastInner): Forcast => {
    type SectorKey = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17
    const sectors = {
      1: "N", 2: "NNE", 3: "NE", 4: "ENE",
      5: "E", 6: "ESE", 7: "SE", 8: "SSE",
      9: "S", 10: "SSW", 11: "SW", 12: "WSW",
      13: "W", 14: "WNW", 15: "NW", 16: "NNW", 17: "N"
    }

    const sector = Math.floor((forcast[prop] % 360) / 22.5) + 1 as SectorKey

    return R.assoc(prop, sectors[sector], forcast)
  }  
}


// export function formatDirection(forcast: Forcast): Forcast{

//   type Sector = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17

//   const directionProps: (keyof Forcast)[] = ["windDirection", "currentDirection", "swellDirection"]

//   const sectors = {
//     1: "N", 2: "NNE", 3: "NE", 4: "ENE",
//     5: "E", 6: "ESE", 7: "SE", 8: "SSE",
//     9: "S", 10: "SSW", 11: "SW", 12: "WSW",
//     13: "W", 14: "WNW", 15: "NW", 16: "NNW", 17: "N"
//   }



//   for(const prop in directionProps) {
//     const dir = forcast[prop]
//     const sector = Math.floor((dir % 360) / 22.5) + 1 as Sector

//   }


//   return R.mergeAll([{windDirectionCompass: sectors[sector]}, forcast])
// }