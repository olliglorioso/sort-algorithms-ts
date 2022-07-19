import { RandomArrayPropsT } from "./types"
/**
 * @description Swaps to elements in an array.
 * @param idx1 Index of the first element.
 * @param idx2 Index of the second element.
 * @param arr The array to change indexes of.
 */
export const swap = (idx1: number, idx2: number, arr: Array<number>) => {
    const temp = arr[idx2]
    arr[idx2] = arr[idx1]
    arr[idx1] = temp
}

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

export const ascendingCompare = (a: number, b: number): number => {
    if (a < b) return -1
    else if (a > b) return 1
    else return 0
}

export const descendingCompare = (a: number, b: number): number => {
    if (a < b) return 1
    else if (a > b) return -1
    else return 0
}