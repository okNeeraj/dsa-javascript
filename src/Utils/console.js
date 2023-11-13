export const consoleHeadingStyle = 'color: #00edff; font-size: 14px; font-weight: bold;';
export const consoleInputStyle = 'color: #ccae0f; font-size: 14px; font-weight: bold;';
export const consoleOutputStyle = 'color: #20aa0f; font-size: 14px; font-weight: bold;';

export const consoleInput = (input) => {
	console.log('%c👨‍💻 Input', consoleInputStyle, input);
}

export const consoleOperation = (operation) => {
	console.log('%c👉 Operation ➡', consoleHeadingStyle, operation)
}

export const consoleOutput = (approach, output) => {
	console.log(`%c✅ Output ::`, consoleOutputStyle, approach)
	console.log(output)
	console.log(`
	
	`)
}

export const consoleSeperator = () => {
	console.log(`

	`)
}

export const getOrdinalIndicator = (number) => {
	const suffixes = ["st", "nd", "rd"];
	const remainder10 = number % 10;
	const remainder100 = number % 100;

	if (remainder10 === 1 && remainder100 !== 11) {
		return number + "st";
	} else if (remainder10 === 2 && remainder100 !== 12) {
		return number + "nd";
	} else if (remainder10 === 3 && remainder100 !== 13) {
		return number + "rd";
	} else {
		return number + "th";
	}
}

