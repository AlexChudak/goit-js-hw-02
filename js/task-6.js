let input;
const numbers = [];
let total = 0;

// numbers.push(input);
input = prompt('введите число');
while (input >= 0) {
  if (input >= 0) {
    numbers.push(input);
    // console.log(numbers);
  }
  if (input === null) {
    for (const number of numbers) {
      total += Number(number);
    }

    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }
  input = prompt('введите число');
}
