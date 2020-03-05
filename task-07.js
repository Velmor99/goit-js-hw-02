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

const isLoginUnique = function(allLogins, login) {
	return !allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
	let add;
	let result;
	if (isLoginValid(login) === false) {
		result = alert('Ошибка! Логин должен быть от 4 до 16 символов');
	} else if (isLoginUnique(allLogins, login) === false) {
		result = alert('Такой логин уже используется!');
	} else {
		add = allLogins.push(login);
		result = alert('Логин успешно добавлен!');
	}
	return add;
};


console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);
