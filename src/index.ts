import { CompareT, SortPropsT } from "./types"
import { swap } from "./util"

export const insertionSort = ({ arr, ascending }: SortPropsT): number[] => {
    let array = [...arr]
    console.log(ascending)
    for (let i = 1; i < array.length; i++) {
        let j = i - 1
        while (ascending ? (j >= 0 && array[j] < array[j + 1]) : (j >= 0 && array[j] > array[j + 1])) {
            // console.log(j)
            swap(j, j + 1, array)
            j -= 1
        }
    }
    return array
}

export const mergeSort = ({ arr, ascending }: SortPropsT): number[] => {
    let array = [...arr]
    const helpArray = []
    const sortInterval = (first: number, last: number) => {
        if (first == last) {
            return
        }
    
        const middle = Math.floor((first + last) / 2)
        sortInterval(first, middle)
        sortInterval(middle + 1, last)
        merge(first, middle, middle + 1, last)
    }
    const merge = (a1: number, b1: number, a2: number, b2: number) => {
        const a = a1, b = b2
        for (let i = a; i <= b; i++) {
            if (a2 > b2 || (a1 <= b1 && array[a1] <= array[a2])) {
                helpArray[i] = array[a1]
                a1 += 1
            } else {
                helpArray[i] = array[a2]
                a2 += 1
            }
        }
        for (let i = a; i <= b; i++) {
            array[i] = helpArray[i]
        }
    }
    sortInterval(0, array.length - 1)
    return array
}

export const compare = ({ arr, ascending }: SortPropsT): CompareT => {
    const sortFunctions = [insertionSort, mergeSort]
    const sortFunctionsNames = ["insertionSort", "mergeSort"]
    const times = []
    for (let i = 0; i < sortFunctions.length; i++) {
        const startTime = performance.now()
        sortFunctions[i]({ arr, ascending })
        const endTime = performance.now()
        times.push(endTime - startTime)
    }
    console.log(times)
    const min = Math.min(...times)
    const idx = times.indexOf(min)
    return { bestTime: min, bestFunction: sortFunctions[idx], bestFunctionName: sortFunctionsNames[idx] } 
}

const testlist = Array.from(Array(10000).keys())
// const res = mergeSort({ arr: testlist })
const compared = compare({ arr: testlist, ascending: true })
console.error(compared)