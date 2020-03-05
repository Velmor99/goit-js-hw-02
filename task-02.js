const calculateEngravingPrice = function(message, pricePerWord) {
	const words = message.split(' ');
	let result = 0;
	for (const word of words) {
		result += pricePerWord;
	}
	return result;
};

/*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
