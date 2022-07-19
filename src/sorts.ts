import { swap, ascendingCompare } from "./util"
import { QuickSortPropsT, SortPropsT } from "./types"
import { randomNumArray } from "./extras"

export const insertionSort = ({ arr, compare = ascendingCompare }: SortPropsT): Array<number> => {
    let array = [...arr]
    for (let i = 1; i < array.length; i++) {
        let j = i - 1
        while (j >= 0 && compare(array[j], array[j + 1]) === 1) {
            swap(j, j + 1, array)
            j -= 1
        }
    }
    return array
}

export const mergeSort = ({ arr, compare = ascendingCompare }: SortPropsT): Array<number> => {
    let array = [...arr]
    
    const sortInterval = (first: number, last: number) => {
        if (first == last) return
        const middle = Math.floor((first + last) / 2)
        sortInterval(first, middle)
        sortInterval(middle + 1, last)
        merge(first, middle, middle + 1, last)
    }

    const merge = (a1: number, b1: number, a2: number, b2: number) => {
        const helpArray = []
        const a = a1, b = b2
        for (let i = a; i <= b; i++) {
            const compared = compare(array[a1], array[a2])
            if (a2 > b2 || (a1 <= b1 && compared === -1)) {
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

export const quickSort = ({ arr, pivotLocation = "left", compare = ascendingCompare }: QuickSortPropsT): Array<number> => {
    if (arr.length === 1) return arr
    let array = [...arr]
    const sortInterval = (first: number, last: number) => {
        if (first >= last) return
        const pivot = division(first, last)
        sortInterval(first, pivot - 1)
        sortInterval(pivot + 1, last)
    }
    const division = (left: number, right: number): number => {
        let pivot = array[left]
        if (pivotLocation === "right") pivot = array[right]
        else if (pivotLocation === "center") pivot = array[Math.floor((right + left) / 2)]
        let i = left - 1

        for (let j = left; j < right; j++) {
            const compared = compare(array[j], pivot)
            if (compared === -1) {
                i += 1
                swap(i, j, array)
            }
        }

        swap(i + 1, right, array)
        return i + 1
    }
    sortInterval(0, array.length - 1)
    return array
}

const testlist = randomNumArray({ size: 1000 })
const res = quickSort({ arr: testlist, compare: ascendingCompare })
console.log(res);