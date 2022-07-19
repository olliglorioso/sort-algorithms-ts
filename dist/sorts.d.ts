import { QuickSortPropsT, SortPropsT } from "./types";
export declare const insertionSort: ({ arr, compare }: SortPropsT) => Array<number>;
export declare const mergeSort: ({ arr, compare }: SortPropsT) => Array<number>;
export declare const quickSort: ({ arr, pivotLocation, compare }: QuickSortPropsT) => Array<number>;
