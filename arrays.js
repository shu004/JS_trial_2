'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${[i]}`)
  }
}

// printIndices(['apple', 'berry', 'cherry'])

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = []
  for (const i in items) {
    if (i%2 === 0) {
      result.push(items[i])
    }
  }
  console.log(result)
}

// everyOtherItem(['apple', 'berry', 'cherry'])

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => a - b)
  const sortedNItems = sortedItems.slice(0, n)
  console.log(sortedNItems)
}
//ask them about this problem re: python reverse()
// smallestNItems([1, 12, 4, 2], 3)