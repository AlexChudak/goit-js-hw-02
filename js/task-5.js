const checkForSpam = function (message) {
  // твой код
  const newMessage = message.toLowerCase();
  // const array = newMessage.split(' ');
  // console.log(newMessage);
  return newMessage.includes('sale') || newMessage.includes('spam');
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
