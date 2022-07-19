import { insertionSort, randomNumArray } from "../index"

const randomArray = randomNumArray({ size: 10000 })
let nums = Array.from(Array(10000).keys())

test("Test insertion sort", () => {
    const sorted = insertionSort({ arr: randomArray })
    expect(sorted).toBe(nums)
})