import {describe, expect, it, run} from "https://deno.land/x/tincan/mod.ts";
import {convertToMilesPerHour} from "../formatters/conversions.ts"

describe("Conversions", () => {
  describe("When converting to miles per hour", () => {
    it("Should convert meters per second to miles per hour correctly", () => {
      expect(convertToMilesPerHour(8)).toEqual(18)
      expect(convertToMilesPerHour(30)).toEqual(67)
    })
  })
})

run()