export const swap = (idx1: number, idx2: number, arr: number[]) => {
    const temp = arr[idx2]
    arr[idx2] = arr[idx1]
    arr[idx1] = temp
}