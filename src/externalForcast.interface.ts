export interface Period {
  type: string
  value: string
  Rep: Rep[]
}

export interface Rep {
  D: string
  F: string
  G: string
  H: string
  S: string
  T: string
  V: string
  W: keyof WeatherCodes
  U: string
  $: string
  Pp: string
}

export interface WeatherCodes {
  NA: string
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
  11: string
  12: string
  13: string
  14: string
  15: string
  16: string
  17: string
  18: string
  19: string
  20: string
  21: string
  22: string
  23: string
  24: string
  25: string
  26: string
  27: string
  28: string
  29: string
  30: string
}