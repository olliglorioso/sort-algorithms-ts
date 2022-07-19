export interface CompareT {
    bestFunctionName: string,
    bestFunction: ({ arr, compare }: SortPropsT) => Array<number>,
    bestTime: number
}

export interface SortPropsT {
    arr: Array<number>,
    compare: (a: number, b: number) => number
}

export interface RandomArrayPropsT {
    size: number
}

export interface RandomSamplePropsT {
    arr: Array<number>,
    size: number,
    compare: (a: number, b: number) => number
}

export interface QuickSortPropsT {
    arr: Array<number>,
    pivotLocation?: "left" | "right" | "center",
    compare: (a: number, b: number) => number
}