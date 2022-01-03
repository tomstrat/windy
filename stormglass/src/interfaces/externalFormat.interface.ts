export interface ExternalForcastData {
  hours: ExternalForcast[]
  meta: Meta
}

export interface ExternalForcast {
  airTemperature: { sg: number }
  currentDirection: { sg: number }
  currentSpeed: { sg: number }
  gust: { sg: number }
  pressure: { sg: number }
  swellDirection: { sg: number }
  swellHeight: { sg: number }
  swellPeriod: { sg: number }
  time: string
  waterTemperature: { sg: number }
  waveDirection: { sg: number }
  waveHeight: { sg: number }
  wavePeriod: { sg: number }
  windDirection: { sg: number }
  windSpeed: { sg: number }
}

export interface ExternalForcastInner {
  airTemperature: number
  currentDirection: number
  currentSpeed: number
  gust: number
  pressure: number
  swellDirection: number
  swellHeight: number
  swellPeriod: number
  time: string
  waterTemperature: number
  waveDirection: number
  waveHeight: number
  wavePeriod: number
  windDirection: number
  windSpeed: number
}

export interface Meta{
  cost: number,
    dailyQuota: number,
    end: string,
    lat: number,
    lng: number,
    params: string[],
    requestCount: number,
    source: string[],
    start: string
}