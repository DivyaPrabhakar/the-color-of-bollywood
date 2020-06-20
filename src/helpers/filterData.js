import { getMultiplyBlendOfTwoColors } from "./colorBlending";

export function getSkinColorArray (data) {
    return data.map(d => d.skin_color).filter(d => d !== "")
}

export function getMedianOfColorArray(sortedColorArray) {
    const length = sortedColorArray.length 
    const mid = Math.ceil(length / 2);
    
    if (length % 2 === 0) {
        const averageValue = getMultiplyBlendOfTwoColors(sortedColorArray[mid], sortedColorArray[mid - 1])
        return averageValue
    } else {
        return sortedColorArray[mid - 1]
    }
}

export function getQuartileMedians(sortedColorArray) {
    const halfQuartile = getMedianOfColorArray(sortedColorArray);
    const array1 = [...sortedColorArray]
    const array2 = array1.splice(0, Math.ceil(array1.length / 2));
    const bottomMedian = getMedianOfColorArray(array2)
    const topMedian = getMedianOfColorArray(array1)
    const percentileMap = {
        "Lower quartile": bottomMedian,
        "Middle quartile": halfQuartile,
        "Upper quartile": topMedian,
    }
    return percentileMap
}