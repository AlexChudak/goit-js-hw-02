let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('введите число');
  if (Number(input)) {
    numbers.push(input);
    console.log(numbers);
  }
}

for (const number of numbers) {
  total += Number(number);
}

console.log(`Общая сумма чисел равна ${total}`);
