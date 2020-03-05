const logins = [ 'Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123' ];

const isLoginValid = function(login) {
	let valid;
	if (login.length < 4 || login.length > 16) {
		valid = false;
	} else {
		valid = true;
	}
	return valid;
};
console.log(isLoginValid('Ajax'));
console.log(isLoginValid('robotGoogles'));
console.log(isLoginValid('Zod'));
console.log(isLoginValid('jqueryisextremelyfast'));

const isLoginUnique = function(allLogins, login) {
	let unique;
	if (allLogins.join(' ').includes(login)) {
		unique = false;
	} else {
		unique = true;
	}
	return unique;
};
console.log(isLoginUnique(logins, 'Ajax'));
console.log(isLoginUnique(logins, 'robotGoogles'));
console.log(isLoginUnique(logins, 'Zod'));
console.log(isLoginUnique(logins, 'jqueryisextremelyfast'));

const addLogin = function(allLogins, login) {
	let result;
	isLoginValid();
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
