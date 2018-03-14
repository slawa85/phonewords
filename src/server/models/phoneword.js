'use strict';

const QWERTY = {
  0: ['+'],
  1: [' '],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  '*': [','],
  '#':[';']
};

module.exports = class Phoneword {
  convert(buffer, numbers) {
    if(numbers.length === 0){
      return buffer.join('');
    }

    let letters = QWERTY[`${numbers[0]}`] || [];

    return letters.map(letter => {
      return this.convert(buffer.concat(letter), numbers.slice(1))
    }).reduce((acc, currentItem) => acc.concat(currentItem), []);
  }
}
