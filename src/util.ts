export const swap = (idx1: number, idx2: number, arr: Array<number>) => {
    const temp = arr[idx2]
    arr[idx2] = arr[idx1]
    arr[idx1] = temp
}

export const ascendingCompare = (a: number, b: number) => {
    if (a < b) return -1
    else if (a > b) return 1
    else return 0
}

export const descendingCompare = (a: number, b: number) => {
    if (a < b) return 1
    else if (a > b) return -1
    else return 0
}