export interface ExternalForcastData {
  hours: ExternalForcast[]
  meta: Meta
}

export interface ExternalForcast {
  swellPeriod: { sg: number }
  time: string
  waveHeight: { sg: number }
  windDirection: { sg: number }
  windSpeed: { sg: number }
}

export interface ExternalForcastInner {
  swellPeriod: number
  time: string
  waveHeight: number
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