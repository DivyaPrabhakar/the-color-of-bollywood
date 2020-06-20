import { getSkinColorArray, getMedianOfColorArray } from "./filterData"
import hexSorter from "hexsorter";
import {find} from "lodash"

export function sortPeopleByYear(list) {
    return list.sort((a, b) => (a.year_of_debut > b.year_of_debut) ? 1 : -1)
}

export function createYearToPeopleMap(list) {
    const yearToPeopleMap = list.reduce((acc, l) => {
        const {year_of_debut} = l
        if (acc[year_of_debut]) {
            acc[year_of_debut].push(l)
        } else {
            acc[year_of_debut] = [l]
        }
        return acc
    }, {})

    const yearToPeopleSortedMap = Object.entries(yearToPeopleMap).reduce((acc, [year, peopleArray]) => {
        const filteredArray = getSkinColorArray(peopleArray)
        const sortedArray = hexSorter.sortColors(
          filteredArray,
          "mostBrightColor"
        );
        const medianValue = getMedianOfColorArray(sortedArray);
        acc[year] = {sortedArray, medianValue}
        return acc
    }, {})

    return yearToPeopleSortedMap
}

export function createMedianMap(yearToPeopleMap) {
    const originalOrder = Object.entries(yearToPeopleMap).reduce((acc, [year, {medianValue}]) => {
        acc.push({year, medianValue})
        return acc
    }, [])
    const originalMedians = originalOrder.map(d => d.medianValue)
    const sortedMedians = hexSorter.sortColors(originalMedians, "mostBrightColor")

    return sortedMedians.reduce((acc, median) => {
        const element = find(originalOrder, d => d.medianValue === median)
        if (element) {
            acc.push({year: element.year, median})
        } else {
            console.error("Could not find element")
        }
        return acc
    }, [])
}

