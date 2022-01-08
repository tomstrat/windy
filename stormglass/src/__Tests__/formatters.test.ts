import {describe, expect, it, run} from "https://deno.land/x/tincan/mod.ts";
import {removeInnerObject, formatDirection, formatSpeed} from "../formatters/formatters.ts"

describe("Formatters", () => {

  const testForcast = {
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

  describe("When removing an inner object", () => {
    it("If one inner object key it should remove", () => {
      const innerObject = {
        testValue: {test: 3},
        testValueTwo: 5,
        testValueThree: {newTest: 4},
        testValueFive: {test: 5, newTest: 6}
      }
      const expectedObject = {
        testValue: 3,
        testValueTwo: 5,
        testValueThree: 4,
        testValueFive: {test: 5, newTest: 6}
      }
      expect(removeInnerObject(innerObject)).toEqual(expectedObject)
    })
  })

  describe("When formatting direction", () => {
    it("Should give correct direction based on degrees", () => {
      const checkWind = formatDirection("windDirection") 
      expect(checkWind(testForcast)).toEqual("E")
    })
  })

  describe("When formatting speed", () => {
    it("Should give correct conversion from meters to miles", () => {
      const checkSpeed = formatSpeed("windSpeed")
      expect(checkSpeed(testForcast)).toEqual(23)
    })
  })
})

run()