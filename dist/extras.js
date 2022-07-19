"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.randomSample = void 0;
const sorts_1 = require("./sorts");
/**
 * @description Returns a random sample of given array and given size.
 * @param {{ arr: Array<number>, size: number }} - The array to get the sample from. / The size of the sample in %. Defaults to 30.
 * @example const sampleList = randomSample({ arr: [1, 2, 3], size: 30 })
 */
const randomSample = ({ arr, size = 30 }) => {
    const array = [...arr];
    const sampleSize = Math.floor(arr.length / size);
    const firstIdx = Math.floor(Math.random() * ((arr.length - sampleSize) + 1));
    return array.slice(firstIdx, firstIdx + sampleSize);
};
exports.randomSample = randomSample;
/**
 * @description Compares all the sort algorithms and returns the best for given array.
 * @param {{ arr: Array<number>, ascending: boolean }} - The array to get the sample from. / Sort direction. Defaults to true (ascending).
 * @example const { bestTime, bestFunction, bestFunctionName } = compary({ arr: [3, 2, 1], ascending: true })
 */
const compare = ({ arr, compare }) => {
    const sortFunctions = [sorts_1.insertionSort, sorts_1.mergeSort, sorts_1.quickSort];
    const sortFunctionsNames = ["insertionSort", "mergeSort", "quickSort"];
    const times = [];
    for (let i = 0; i < sortFunctions.length; i++) {
        const startTime = performance.now();
        sortFunctions[i]({ arr, compare });
        const endTime = performance.now();
        times.push(endTime - startTime);
    }
    const min = Math.min(...times);
    const idx = times.indexOf(min);
    return { bestTime: min, bestFunction: sortFunctions[idx], bestFunctionName: sortFunctionsNames[idx] };
};
exports.compare = compare;
//# sourceMappingURL=extras.js.map