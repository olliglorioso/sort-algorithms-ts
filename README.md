# sort-algorithms-ts

Sort your array with custom compare-function. Includes functions that help you to choose
the most powerful sorting algorithms for your array, and to take some test samples for these optimization functions.

## Features

- Take test sample of given size from an array.
- Get the best sort algorithm for given array.
- Currently included sort algorithms are quick sort, insertion sort and merge sort.
  - Some compare functions provided with the library, for example ascendingCompare and descendingCompare.
  - Sorting functions *do not mutate the original array*.
- Sort based on custom function (default is ascending, numerical & alphabetical).
- JSDoc included to make the use of the module as easy as possible.

## Quick start

```bash
npm install sort-algorithms-ts
```

```typescript
import { compare, randomSample, insertionSort, mergeSort, 
        quickSort, ascendingCompare, descendingCompare } from "sort-algorithms-ts"

// Create a test array.
const testArray = Array.from(Array(10000).keys())

// Get a random sample (subsequent indexes) array.
const testSampleArray = randomSample({ arr: testArray, size: 30 })

// Compare available sorting algorithms and get the best, its name and performance time for test array.
const { bestFunction, bestFunctionName, bestTime } = compare({ arr: testSampleArray, compare: ascendingCompare })

// Use the best function returned by compare-function.
const resultArray = bestFunction({ arr: testArray, compare: ascendingCompare })

// Basic use of a sorting algorithm.
const basicResultArray = insertionSort({ arr: array, compare: ascendingCompare })
```

## Custom compare

- Your custom compare function should take parameters ``a`` and ``b`` in order.
  - If ``a`` belongs to the left side of ``b``, -1 should be returned.
  - If ``a`` belongs to the right side of ``b``, 1 should be returned.
  - If the order is irrevelevant (same element example), 0 should be returned.
- Example (numerical/alphabetical array to ascending order):

  ```typescript
  const ascendingCompare = (a: number, b: number) => {
    if (a < b) return -1
    else if (a > b) return 1
    else return 0
  }
  ```
