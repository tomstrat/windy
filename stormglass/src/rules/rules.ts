import {ExternalForcastInner} from "../interfaces/externalFormat.interface.ts"
import {convertToMilesPerHour} from "../formatters/conversions.ts"

export function badDirection(forcast: ExternalForcastInner) {
  const badAngle = 90
  if(forcast.windDirection > badAngle) return forcast
}

export function badSpeed(forcast: ExternalForcastInner) {
  const speed = convertToMilesPerHour(forcast.windSpeed)
  if(speed > 18 && speed < 36) return forcast
}