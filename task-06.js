let input;
const numbers = [];
let total = 0;
let result;
do {
	input = prompt('Введите произвольное число');
	numbers.push(input);
	console.log(numbers);
} while (input !== null);
{
	const string = numbers.join(' ');
	console.log(string);
	for (const item of string) {
		result = total += Number(item);
		console.log(result);
	}
}
alert(result);
