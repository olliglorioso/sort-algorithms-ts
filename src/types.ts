export interface CompareT {
    bestFunctionName: string,
    bestFunction: ({ arr, ascending }: SortPropsT) => number[],
    bestTime: number
}

export interface SortPropsT {
    arr: number[],
    ascending?: boolean
}