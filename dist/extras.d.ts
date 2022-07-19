import { RandomSamplePropsT, SortPropsT, CompareT } from "./types";
/**
 * @description Returns a random sample of given array and given size.
 * @param {{ arr: Array<number>, size: number }} - The array to get the sample from. / The size of the sample in %. Defaults to 30.
 * @example const sampleList = randomSample({ arr: [1, 2, 3], size: 30 })
 */
export declare const randomSample: ({ arr, size }: RandomSamplePropsT) => Array<number>;
/**
 * @description Compares all the sort algorithms and returns the best for given array.
 * @param {{ arr: Array<number>, ascending: boolean }} - The array to get the sample from. / Sort direction. Defaults to true (ascending).
 * @example const { bestTime, bestFunction, bestFunctionName } = compary({ arr: [3, 2, 1], ascending: true })
 */
export declare const compare: ({ arr, compare }: SortPropsT) => CompareT;
