'use strict';

// 1. countWords
function countWords(phrase) {
  const word_counts = {};

  for (const word of phrase.split(" ")) {
    if (word_counts[word] === undefined) {
      word_counts[word] = 1;
    } else {
      word_counts[word]++;
    }
  }
  return word_counts
}
console.log(countWords("hello hello hello me you hello"))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (melonPrices[price] === undefined) {
    return
  } else {
    return melonPrices[price].sort()
  }
}
//should it return undefined if price not in melonPrices?
console.log(getMelonsAtPrice(2.50))