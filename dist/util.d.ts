import { RandomArrayPropsT } from "./types";
/**
 * @description Swaps to elements in an array.
 * @param idx1 Index of the first element.
 * @param idx2 Index of the second element.
 * @param arr The array to change indexes of.
 */
export declare const swap: (idx1: number, idx2: number, arr: Array<number>) => void;
/**
 * @description Shuffles a given array. FYI: Mutates the original array, doesn't return anything.
 * @param array - Array to shuffle.
 * @example shuffle(array)
 */
export declare const shuffle: (array: Array<number>) => void;
/**
 * @description Returns an array with numbers from 0 to size, in a random order.
 * @param {{ size: number }} / Size of the array.
 * @example const randomArray = randomNumArray({ size: 1000 })
 */
export declare const randomNumArray: ({ size }: RandomArrayPropsT) => Array<number>;
export declare const ascendingCompare: (a: number, b: number) => number;
export declare const descendingCompare: (a: number, b: number) => number;
