import { RandomSamplePropsT, SortPropsT, CompareT, RandomArrayPropsT } from "./types"
import { insertionSort, mergeSort, quickSort } from "./sorts"

/**
 * @description Shuffles a given array. FYI: Mutates the original array, doesn't return anything.
 * @param array - Array to shuffle.
 * @example shuffle(array)
 */
export const shuffle = (array: Array<number>) => {
    let currentIndex = array.length
    let randomIndex = 0
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
}

/**
 * @description Returns an array with numbers from 0 to size, in a random order.
 * @param {{ size: number }} / Size of the array.
 * @example const randomArray = randomNumArray({ size: 1000 })
 */
export const randomNumArray = ({ size }: RandomArrayPropsT): Array<number> => {
    let nums = Array.from(Array(size).keys())
    shuffle(nums)
    return nums
}

/**
 * @description Returns a random sample of given array and given size.
 * @param {{ arr: Array<number>, size: number }} - The array to get the sample from. / The size of the sample in %. Defaults to 30.
 * @example const sampleList = randomSample({ arr: [1, 2, 3], size: 30 })
 */
export const randomSample = ({ arr, size = 30 }: RandomSamplePropsT): Array<number> => {
    const array = [...arr]
    const sampleSize = Math.floor(arr.length / size)
    const firstIdx = Math.floor(Math.random() * ((arr.length - sampleSize) + 1))
    return array.slice(firstIdx, firstIdx + sampleSize)
}

/**
 * @description Compares all the sort algorithms and returns the best for given array.
 * @param {{ arr: Array<number>, ascending: boolean }} - The array to get the sample from. / Sort direction. Defaults to true (ascending).
 * @example const { bestTime, bestFunction, bestFunctionName } = compary({ arr: [3, 2, 1], ascending: true })
 */
export const compare = ({ arr, compare }: SortPropsT): CompareT => {
    const sortFunctions = [insertionSort, mergeSort, quickSort]
    const sortFunctionsNames = ["insertionSort", "mergeSort", "quickSort"]
    const times = []
    for (let i = 0; i < sortFunctions.length; i++) {
        const startTime = performance.now()
        sortFunctions[i]({ arr, compare })
        const endTime = performance.now()
        times.push(endTime - startTime)
    }
    const min = Math.min(...times)
    const idx = times.indexOf(min)
    return { bestTime: min, bestFunction: sortFunctions[idx], bestFunctionName: sortFunctionsNames[idx] } 
}

