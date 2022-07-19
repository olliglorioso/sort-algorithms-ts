const { compare, randomNumArray } = require("../index")

const randomArray = randomNumArray({ size: 100000 })

const reverseNums = Array.from(Array(100000).keys()).reverse()

test("Test compare-function with random array (it should return correct function).", () => {
    const res = compare({ arr: randomArray })
    expect(typeof res.bestFunctionName === "string").toBe(true)
})