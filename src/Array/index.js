const consoleHeadingStyle = 'color: #0e8892; font-size: 14px; font-weight: bold;';
const consoleInputStyle = 'color: #ccae0f; font-size: 14px; font-weight: bold;';
const consoleOutputStyle = 'color: #20aa0f; font-size: 14px; font-weight: bold;';

const consoleOutput = (output) => {
	console.log('%c✅ Output ::', consoleOutputStyle)
	console.log(output)
}

const Array = (arrayType = 'default') => {
	if (arrayType === false) {
		return null;
	}
	return [1, 2, 5, 3, 4];
}

export const traversing = (array) => {
	console.log('%c👨‍💻 Input', consoleInputStyle, array);

	const traverse = () => {
		for (let i = 0; i < array.length; i++) {
			console.log(array[i])
		}
	}

	const access = (index) => {
		console.log(
			'%c👉 Operation ➡', consoleHeadingStyle,
			`Access the value of index (${index}) from input.`
		)

		if (index !== undefined && index >= 0 && index < array.length) {
			const result = array[index];
			consoleOutput(result)
			return result;
		} else {
			return "Invalid index or index not provided";
		}
	};

	const insert = (element, position) => {
		console.log(
			'%c👉 Operation ➡', consoleHeadingStyle,
			`Insert a new element (${element}) into the index (${position}).`
		)
		let updatedArray = [];
		if (position >= 0 && position < array.length) {
			for (let i = 0; i <= position; i++) {
				if (i === position) {
					updatedArray.push(element)
				}
				updatedArray.push(array[i])
			}

			for (let i = position + 1; i < array.length; i++) {
				updatedArray.push(array[i])
			}
		} else {
			console.log(`Invalid Position! You can provide postion only between ${0} to ${array.length - 1}`)
		}


		return updatedArray;
	}

	return {
		traverse,
		access,
		insert
	};
}

export const getLength = (array) => {
	return array.length;
}

export default Array;
