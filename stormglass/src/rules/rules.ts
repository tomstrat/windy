import {ExternalForcastInner} from "../interfaces/externalFormat.interface.ts"
import {convertToMilesPerHour} from "../formatters/conversions.ts"
import {LIMITS} from "../settings.ts"

const {BAD_WIND_ANGLE, MIN_WIND_SPEED, MAX_WIND_SPEED} = LIMITS

export function badDirection(forcast: ExternalForcastInner) {
  if(forcast.windDirection > BAD_WIND_ANGLE) return forcast
}

export function badSpeed(forcast: ExternalForcastInner) {
  const speed = convertToMilesPerHour(forcast.windSpeed)
  if(speed > MIN_WIND_SPEED && speed < MAX_WIND_SPEED) return forcast
}