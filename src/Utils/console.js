export const consoleHeadingStyle = 'color: #0e8892; font-size: 14px; font-weight: bold;';
export const consoleInputStyle = 'color: #ccae0f; font-size: 14px; font-weight: bold;';
export const consoleOutputStyle = 'color: #20aa0f; font-size: 14px; font-weight: bold;';

export const consoleInput = (input) => {
	console.log('%c👨‍💻 Input', consoleInputStyle, input);
	consoleSeperator();
}

export const consoleOperation = (operation) => {
	console.log('%c👉 Operation ➡', consoleHeadingStyle, operation)
}

export const consoleOutput = (output) => {
	console.log('%c✅ Output ::', consoleOutputStyle)
	console.log(output)
	console.log(`
	
	`)
}

export const consoleSeperator = () => {
	console.log(`

	`)
}
