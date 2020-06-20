import {hue} from "color-blend"
import hexToRgba from 'hex-to-rgba';
import rgbHex from "rgb-hex"

export function getMultiplyBlendOfTwoColors(h1, h2) {
    const rgba1 = getRGBAObject(hexToRgba(h1))
    const rgba2 = getRGBAObject(hexToRgba(h2))
    const blended = hue(rgba1, rgba2)
    const hexBlended = rgbaToHex(blended)
    return hexBlended
}

function getRGBAObject(rgbaString) {
    const values = rgbaString.match(/\(([^)]+)\)/)[1];
    const valuesArr = values.split(",").map(v => parseInt(v))
    const [r,g,b,a] = [...valuesArr]
    return {r,g,b,a}
}

function rgbaToHex(rgbaObj) {
    const {r,g,b} = rgbaObj
    const rgbaString = `rgb(${r}, ${g}, ${b})`
    return `#${rgbHex(rgbaString)}`
}