import {
	consoleInput,
	consoleOperation,
	consoleOutput
} from '../Utils/console';


const ArrayOperation = (arrayType = 'default') => {
	if (arrayType === false) {
		return null;
	}
	return [1, 2, 5, 3, 4];
}

export const traversing = (inputArray) => {
	consoleInput(inputArray);

	const traverse = () => {
		for (let i = 0; i < inputArray.length; i++) {
			console.log(inputArray[i])
		}
	}

	const getLength = (inputArray) => {
		consoleOperation(`Get the length of given array.`)
		const result = inputArray.lengt;
		consoleOutput(result);
		return result;
	}

	const access = (index) => {
		consoleOperation(`Access the value of index (${index}) from input.`);
		if (index !== undefined && index >= 0 && index < inputArray.length) {
			const result = inputArray[index];
			consoleOutput(result)
			return result;
		} else {
			return "Invalid index or index not provided";
		}
	};

	const insertElement = (element, position) => {
		consoleOperation(`Insert a new element (${element}) into the index (${position}).`)

		if (position === 'undefined' || position < 0 || position > inputArray.length) {
			console.warn(`Inavlid index/position ! index/position should be between 0 to ${inputArray.length}`)
			return;
		}

		let updatedArray = [];

		for (let i = 0; i < position; i++) {
			updatedArray[i] = inputArray[i];
		}
		updatedArray[position] = element;

		for (let i = position; i < inputArray.length; i++) {
			updatedArray[i + 1] = inputArray[i];
		}
		consoleOutput(updatedArray)
		return updatedArray;
	}

	return {
		traverse,
		getLength,
		access,
		insertElement
	};
}

export default ArrayOperation;
