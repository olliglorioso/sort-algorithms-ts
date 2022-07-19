const { insertionSort, quickSort, mergeSort, randomNumArray } = require("../index")

const randomArray = randomNumArray({ size: 10000 })
let nums = Array.from(Array(10000).keys())

test("Test insertion sort", () => {
    const sorted = insertionSort({ arr: randomArray })
    expect(sorted).toStrictEqual(nums)
})

test("Test quick sort", () => {
    const sorted = quickSort({ arr: randomArray, pivotLocation: "right" })
    const sorted2 = quickSort({ arr: randomArray, pivotLocation: "left" })
    expect(sorted).toStrictEqual(nums)
    expect(sorted2).toStrictEqual(nums)
})

test("Test merge sort", () => {
    const sorted = mergeSort({ arr: randomArray })
    expect(sorted).toStrictEqual(nums)
})