import {describe, expect, it, run} from "https://deno.land/x/tincan/mod.ts";
import {badDirection, badSpeed} from "../rules/rules.ts"

describe("Rules", () => {
  describe("When Checking for a badDirection", () => {
    it("Should return the object when its a good direction", () => {
      const goodDir = {
        airTemperature: 6.3,
        currentSpeed: 0.58,
        gust: 17.9,
        pressure: 1010.7,
        swellHeight: 1.6,
        swellPeriod: 10.14,
        time: "2022-01-05T20:00:00+00:00",
        waterTemperature: 9.07,
        waveHeight: 2.79,
        wavePeriod: 5.18,
        windDirection: 105.6,
        windSpeed: 10.2
      }
      expect(badDirection(goodDir)).toEqual(goodDir)
    })
    it("Should return nothing when its a bad direction", () => {
      const badDir = {
        airTemperature: 6.3,
        currentSpeed: 0.58,
        gust: 17.9,
        pressure: 1010.7,
        swellHeight: 1.6,
        swellPeriod: 10.14,
        time: "2022-01-05T20:00:00+00:00",
        waterTemperature: 9.07,
        waveHeight: 2.79,
        wavePeriod: 5.18,
        windDirection: 20.9,
        windSpeed: 10.2
      }
      expect(badDirection(badDir)).toEqual(undefined)
    })
  })
  describe("When Checking for a badSpeed", () => {
    it("Should return the object when its a good speed", () => {
      const goodSpd = {
        airTemperature: 6.3,
        currentSpeed: 0.58,
        gust: 17.9,
        pressure: 1010.7,
        swellHeight: 1.6,
        swellPeriod: 10.14,
        time: "2022-01-05T20:00:00+00:00",
        waterTemperature: 9.07,
        waveHeight: 2.79,
        wavePeriod: 5.18,
        windDirection: 105.6,
        windSpeed: 10.2
      }
      expect(badSpeed(goodSpd)).toEqual(goodSpd)
    })
    it("Should return nothing when its a bad speed", () => {
      const badSpd = {
        airTemperature: 6.3,
        currentSpeed: 0.58,
        gust: 17.9,
        pressure: 1010.7,
        swellHeight: 1.6,
        swellPeriod: 10.14,
        time: "2022-01-05T20:00:00+00:00",
        waterTemperature: 9.07,
        waveHeight: 2.79,
        wavePeriod: 5.18,
        windDirection: 20.9,
        windSpeed: 3.4
      }
      expect(badSpeed(badSpd)).toEqual(undefined)
    })
  })
})

run()