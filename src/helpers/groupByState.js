import { getSkinColorArray } from "./filterData"
import hexSorter from "hexsorter"

export function groupDataByState(data) {
    const stateMap = data.reduce((acc, a) => {
        const {state} = a
        if (state !== "") {
            if (acc[state]) {
                acc[state].push(a)
            } else {
                acc[state] = [a]
            }
        }
        return acc
    }, {})

    return Object.entries(stateMap).reduce((acc, [state, people]) => {
        const colors = getSkinColorArray(people)
        const sortedArray = hexSorter.sortColors(
            colors,
            "mostBrightColor"
          );
        acc[state] = sortedArray
        return acc
    }, {})
}

const WEST_STATES = ["goa", "gujarat", "maharashtra", "rajasthan"]
const EAST_STATES = ["bihar", "jharkhand", "odisha", "west bengal", "assam"]
const NORTH_STATES = ["delhi", "himachal pradesh", "jammu and kashmir", "haryana", "punjab", "ladakh", "rajasthan", "uttarakhand", "uttar pradesh"]
const SOUTH_STATES = ["andhra pradesh", "karnataka", "tamil nadu", "telangana", "kerala"]
const INTERNATIONAL = ["international"]

export function groupByDirection(data) {
    const directionMap = data.reduce((acc, a) => {
        const {state, skin_color} = a
        const normalizedState = state.toLowerCase()
        if (state !== ""){
        if (WEST_STATES.includes(normalizedState)) {
            acc["west"].push(skin_color)
        } else if (EAST_STATES.includes(normalizedState)) {
            acc["east"].push(skin_color) 
        } else if (NORTH_STATES.includes(normalizedState)) {
            acc["north"].push(skin_color)
        } else if (SOUTH_STATES.includes(normalizedState)) {
            acc["south"].push(skin_color)
        } else if (INTERNATIONAL.includes(normalizedState)) {
            acc["international"].push(skin_color)
        } else {
            acc["other"].push(skin_color)
        }}
        return acc
    }, {"west": [], "east": [], "south": [], "north": [], "other":[], "international": []})
    
    const sortedMap = Object.entries(directionMap).reduce((acc, [direction, colorArray]) => {
        acc[direction] = hexSorter.sortColors(colorArray, "mostBrightColor").reverse()
        return acc
    }, {})
    
    
    return sortedMap
}





