"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = exports.mergeSort = exports.insertionSort = void 0;
const util_1 = require("./util");
const insertionSort = ({ arr, compare = util_1.ascendingCompare }) => {
    let array = [...arr];
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        while (j >= 0 && compare(array[j], array[j + 1]) === 1) {
            (0, util_1.swap)(j, j + 1, array);
            j -= 1;
        }
    }
    return array;
};
exports.insertionSort = insertionSort;
const mergeSort = ({ arr, compare = util_1.ascendingCompare }) => {
    let array = [...arr];
    const sortInterval = (first, last) => {
        if (first == last)
            return;
        const middle = Math.floor((first + last) / 2);
        sortInterval(first, middle);
        sortInterval(middle + 1, last);
        merge(first, middle, middle + 1, last);
    };
    const merge = (a1, b1, a2, b2) => {
        const helpArray = [];
        const a = a1, b = b2;
        for (let i = a; i <= b; i++) {
            const compared = compare(array[a1], array[a2]);
            if (a2 > b2 || (a1 <= b1 && compared === -1)) {
                helpArray[i] = array[a1];
                a1 += 1;
            }
            else {
                helpArray[i] = array[a2];
                a2 += 1;
            }
        }
        for (let i = a; i <= b; i++) {
            array[i] = helpArray[i];
        }
    };
    sortInterval(0, array.length - 1);
    return array;
};
exports.mergeSort = mergeSort;
const quickSort = ({ arr, pivotLocation = "left", compare = util_1.ascendingCompare }) => {
    let init = [...arr];
    const sortInterval = (array, left, right) => {
        if (left < right) {
            const pivot = partition(array, left, right);
            sortInterval(array, left, pivot - 1);
            sortInterval(array, pivot + 1, right);
        }
    };
    const partitionRight = (array, left = 0, right = array.length - 1) => {
        let i = left - 1;
        const pivot = array[right];
        for (let j = left; j <= right - 1; j++) {
            if (compare(array[j], pivot) === -1) {
                i += 1;
                (0, util_1.swap)(i, j, array);
            }
        }
        (0, util_1.swap)(i + 1, right, array);
        return i + 1;
    };
    const partitionLeft = (array, left = 0, right = array.length - 1) => {
        const pivot = array[left];
        let i = right + 1;
        for (let j = right; j >= left + 1; j--) {
            if (compare(array[j], pivot) === 1) {
                i -= 1;
                (0, util_1.swap)(i, j, array);
            }
        }
        (0, util_1.swap)(i - 1, left, array);
        return i - 1;
    };
    const partition = (array, left = 0, right = array.length - 1) => {
        let pivot;
        if (pivotLocation === "center")
            pivot = partitionRight(array, left, right);
        else if (pivotLocation === "left")
            pivot = partitionLeft(array, left, right);
        else if (pivotLocation === "right")
            pivot = partitionRight(array, left, right);
        return pivot;
    };
    sortInterval(init, 0, init.length - 1);
    return init;
};
exports.quickSort = quickSort;
//# sourceMappingURL=sorts.js.map