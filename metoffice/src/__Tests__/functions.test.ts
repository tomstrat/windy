import {
  describe,
  expect,
  it,
  run,
} from "https://deno.land/x/tincan/mod.ts";
import {Period} from "../interfaces/externalForcast.interface.ts"
import {Forcast} from "../interfaces/internalForcast.interface.ts"
import {formatDay, formatTime, formatWeather, formatForcast, checkExists} from "../functions.ts"


describe("Formatters", () => {

  describe("Format Day", () => {
    it("Should return day of week", () => {
      expect(formatDay("01/01/2022")).toEqual("Saturday")
    })
    it("Should return undefined on bad date", () => {
      expect(formatDay("BAWKD")).toEqual(undefined)
    })
  })

  describe("Format Time", () => {
    it("Should return time of day", () => {
      expect(formatTime("600")).toEqual("10:00")
    })
    it("Should return NaN on bad time", () => {
      expect(formatTime("BAWKD")).toEqual("NaN:00")
    })
  })

  describe("Format Weather", () => {
    it("Should return correct weather condition", () => {
      expect(formatWeather("7")).toEqual("Cloudy")
    })
  })

  describe("Format Forcast", () => {
    describe("A correct dataset", () => {
      const data: Period[] = [
        {
          type: "Day",
          value: "2022-01-02Z",
          Rep: [
            {D:"S",F:"11",G:"20",H:"88",Pp:"30",S:"9",T:"13",V:"GO",W:"7",U:"0",$:"0"}
          ]
        }
      ]
      const correctFormat: Forcast = {
        weekdays: [
          {
            day: "Sunday",
            timePeriods: [
              {
                time: "00:00",
                weather: "Cloudy",
                temperature: {
                  units: "Celcius",
                  value: 13
                },
                wind: {
                  direction: "S",
                  units: "MPH",
                  speed: 9,
                  gust: 20
                }
              }
            ]
          }
        ]
      }

      it("Should return correct formatted object", () => {
        expect(formatForcast(data)).toEqual(correctFormat)
      })
    })
    describe("A dataset with missing parts", () => {
      const data = [
        {
          type: "Day",
          Rep: [
            {D:undefined,F:"11",G:"20",H:"88",Pp:"30",S:"9",T:"13",V:"GO",U:"0",$:"0"}
          ]
        }
      ]
      const correctFormat: Forcast = {
        weekdays: [
          {
            day: "No Day Given",
            timePeriods: [
              {
                time: "00:00",
                weather: "No Weather Given",
                temperature: {
                  units: "Celcius",
                  value: 13
                },
                wind: {
                  direction: "No Direction Given",
                  units: "MPH",
                  speed: 9,
                  gust: 20
                }
              }
            ]
          }
        ]
      }
      it("Should return correct formatted object", () => {
        expect(formatForcast(data as any)).toEqual(correctFormat)
      })
    })
  })
})

describe("Utility", () => {
  describe("Check Exists", () => {
    it("Should return target when its not undefined", () => {
      expect(checkExists("TARGET", "Target")).toEqual("TARGET")
    })
    it("Should return message when target is undefined", () => {
      expect(checkExists(undefined, "Undefined")).toEqual("No Undefined Given")
    })
  })
})

run()