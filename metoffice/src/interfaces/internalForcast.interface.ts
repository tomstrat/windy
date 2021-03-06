export interface Forcast {
  weekdays: Weekday[]
}

export interface Weekday {
  day: string
  timePeriods: TimePeriod[]
}

export interface TimePeriod {
  time: string
  weather: string
  temperature: {
    units: string
    value: number | string
  }
  wind: {
    direction: string
    units: string
    speed: number | string
    gust: number | string
  }

}