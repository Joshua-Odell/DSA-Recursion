function countingSheep(number) {
	if (number === 0) {
		return console.log('All Sheep jumped over the fence');
	} else {
		console.log(number, 'Another Sheep jumped over the fence');
		number -= 1;
		countingSheep(number);
	}
}

function powerCalculator(base, exponent) {
	if (exponent < 0) {
		return console.log('exponent should be >= 0');
	} else if (exponent === 1) {
		return console.log(base);
	} else {
		base = base * base;
		exponent -= 1;
		console.log(exponent);
		powerCalculator(base, exponent);
	}
}

function reverseString(string, newString = '') {
	if (string.length === 0) {
		return console.log(newString);
	}
	let temp = string.slice(-1);
	string = string.substring(0, string.length - 1);
	newString = newString.concat(temp);
	reverseString(string, newString);
}

function nthTriangularNumber(step, total = 0) {
	if (step === 0) {
		return console.log(total);
	}
	total = total + step;
	step = step - 1;
	nthTriangularNumber(step, total);
}

function stringSplitter(string, key, temp = '', newString = '', result = []) {
	if (string.length === 0) {
		result.push(newString);
		return console.log(result);
	}
	temp = string.slice(0, 1);
	if (temp === key) {
		result.push(newString);
		newString = '';
	} else {
		newString = newString.concat(temp);
	}
	string = string.substring(1);
	stringSplitter(string, key, temp, newString, result);
}

function fibonacci(step, first = 1, second = 1, result = []) {
	if (step === 1) {
		return console.log(result, 'Fibonacci Complete');
	}
	if (first === 1 && second === 1) {
		result.push(first);
	}
	result.push(second);
	let temp = first + second;
	first = second;
	second = temp;
	fibonacci(step - 1, first, second, result);
}

function factorial(number, result = 1) {
	if (number === 1) {
		return console.log('The factorial of that number is', result);
	}
	result = result * number;
	factorial(number - 1, result);
}

function maze(mazeName, direction = 'R', row = 0, collumn = 0, result = []) {
	if (result.slice(-1) === 'e') {
		return console.log(result);
	}
	if (
		result.slice(-1) === '*' ||
		mazeName[row][collumn] === undefined ||
		mazeName[row][collumn] === 'X'
	) {
		direction = 'F';
		console.log('Failure', result);
	}
	if (direction === 'R') {
		collumn = collumn + 1;
		result.push(mazeName[row][collumn]);
		maze('R');
		maze('U');
		maze('D');
	}
	if (direction === 'L') {
		collumn = collumn - 1;
		result.push(mazeName[row][collumn]);
		maze('L');
		maze('U');
		maze('D');
	}
	if (direction === 'D') {
		row = row + 1;
		result.push(mazeName[row][collumn]);
		maze('L');
		maze('R');
		maze('D');
	}
	if (direction === 'U') {
		row = row - 1;
		result.push(mazeName[row][collumn]);
		maze('L');
		maze('R');
		maze('U');
	}
}

let mySmallMaze = [
	[' ', ' ', ' '],
	[' ', '*', ' '],
	[' ', ' ', 'e'],
];

countingSheep(5);
powerCalculator(10, 3);
reverseString('abcde');
stringSplitter('02/20/2020', '/');
fibonacci(7);
factorial(5);
maze(mySmallMaze);

let myBigMaze = [
	[' ', ' ', ' ', '*', ' ', ' ', ' '],
	['*', '*', ' ', '*', ' ', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', '*', '*', '*', '*', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];
