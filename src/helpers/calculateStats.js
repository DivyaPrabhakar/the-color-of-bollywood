import numeral from "numeral"

export function calculateFairnessCreamPercentage(data) {
    const endorsed = data.filter(d => d.skin_lightening === "TRUE").length
    const total = data.length 
    return numeral(endorsed/total).format("00.0%")
}