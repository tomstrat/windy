export const LIMITS = {
  BAD_WIND_ANGLE: 90,
  MIN_WIND_SPEED: 18,
  MAX_WIND_SPEED: 36,
  MIN_SWELL_PERIOD: 6, // 5 not good 6 good 8 vgood 10+ amazing
  MIN_WAVE_HEIGHT: 2, // 2 good 3 vgood 4 amazing
}

export type ForcastDirection = "windDirection" // | "currentDirection" | "swellDirection" | "waveDirection"
export type ForcastSpeed = "windSpeed" // | "currentSpeed"
