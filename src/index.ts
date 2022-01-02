import {formatForcast} from "./functions.ts"
import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";


const API_KEY = "a8e9d8e8-694d-4873-8560-d326c5462c3e"
const LOCATION = "354808" //Rhosneigr
const url = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${LOCATION}?res=3hourly&key=${API_KEY}`

const response = await fetch(url)
const body = await response.json()
const days = R.pipe(
             R.path(["SiteRep", "DV", "Location", "Period"]),
             R.values)(body)

const weeklyForcast = formatForcast(days)

console.log(JSON.stringify(weeklyForcast))
