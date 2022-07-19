"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descendingCompare = exports.ascendingCompare = exports.randomNumArray = exports.shuffle = exports.swap = void 0;
/**
 * @description Swaps to elements in an array.
 * @param idx1 Index of the first element.
 * @param idx2 Index of the second element.
 * @param arr The array to change indexes of.
 */
const swap = (idx1, idx2, arr) => {
    const temp = arr[idx2];
    arr[idx2] = arr[idx1];
    arr[idx1] = temp;
};
exports.swap = swap;
/**
 * @description Shuffles a given array. FYI: Mutates the original array, doesn't return anything.
 * @param array - Array to shuffle.
 * @example shuffle(array)
 */
const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex = 0;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
};
exports.shuffle = shuffle;
/**
 * @description Returns an array with numbers from 0 to size, in a random order.
 * @param {{ size: number }} / Size of the array.
 * @example const randomArray = randomNumArray({ size: 1000 })
 */
const randomNumArray = ({ size }) => {
    let nums = Array.from(Array(size).keys());
    (0, exports.shuffle)(nums);
    return nums;
};
exports.randomNumArray = randomNumArray;
const ascendingCompare = (a, b) => {
    if (a < b)
        return -1;
    else if (a > b)
        return 1;
    else
        return 0;
};
exports.ascendingCompare = ascendingCompare;
const descendingCompare = (a, b) => {
    if (a < b)
        return 1;
    else if (a > b)
        return -1;
    else
        return 0;
};
exports.descendingCompare = descendingCompare;
//# sourceMappingURL=util.js.map