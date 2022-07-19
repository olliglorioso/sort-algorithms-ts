import { swap, ascendingCompare, randomNumArray, descendingCompare } from "./util"
import { QuickSortPropsT, SortPropsT } from "./types"

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
    let init = [...arr]

    const sortInterval = (array: Array<number>, left: number, right: number) => {
        if (left < right) {
            const pivot = partition(array, left, right)
            sortInterval(array, left, pivot - 1)
            sortInterval(array, pivot + 1, right)
        }
    }

    const partitionRight = (array: Array<number>, left: number = 0, right: number = array.length - 1) => {
        let i = left - 1
        const pivot = array[right]
        for (let j = left; j <= right - 1; j++) {
            if (compare(array[j], pivot) === -1) {
                i += 1
                swap(i, j, array)
            }
        }
        swap(i + 1, right, array)
        return i + 1
    }

    const partitionLeft = (array: Array<number>, left: number = 0, right: number = array.length - 1) => {
        const pivot = array[left]
        let i = right + 1
        for (let j = right; j >= left + 1; j--) {
            if (compare(array[j], pivot) === 1) {
                i -= 1
                swap(i, j, array)
            }
        }
        swap(i - 1, left, array)
        return i - 1
    }

    const partition = (array: Array<number>, left: number = 0, right: number = array.length - 1): number => {
        let pivot: number
        if (pivotLocation === "center") pivot = partitionRight(array, left, right)
        else if (pivotLocation === "left") pivot = partitionLeft(array, left, right)
        else if (pivotLocation === "right") pivot = partitionRight(array, left, right)
        return pivot
    }

    sortInterval(init, 0, init.length - 1)
    return init
}

// const testlist = randomNumArray({ size: 100000 })
// const res = quickSort({ arr: testlist, compare: descendingCompare, pivotLocation: "left" })
// console.log(res);