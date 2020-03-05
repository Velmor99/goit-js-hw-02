const checkForSpam = function(message) {
	const inLower = message.toLowerCase();
	const mass = inLower.split(' ');
	console.log(mass);
	let result;
	if (mass.includes('sale') || mass.includes('[spam]')) {
		result = true;
	} else {
		result = false;
	}
	return result;
};

/*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
