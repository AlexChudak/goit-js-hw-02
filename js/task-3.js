const findLongestWord = function (string) {
  const array = string.split(' ');
  let longesrWord = array[0];

  for (const iterator of array) {
    if (iterator.length > longesrWord.length) {
      longesrWord = iterator;
    }
  }
  return longesrWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
