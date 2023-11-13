import {
	consoleInput,
	consoleOperation,
	consoleOutput
} from '../Utils/console';

export { insertion } from './insertion';

const ArrayOperation = (arrayType = 'default') => {
	if (arrayType === false) {
		return null;
	}
	return [1, 2, 5, 3, 4];
}

export const traversing = (inputArray) => {
	const traverse = () => {
		for (let i = 0; i < inputArray.length; i++) {
			console.log(inputArray[i])
		}
	}

	const getLength = (inputArray) => {
		consoleInput(inputArray);
		consoleOperation(`Get the length of given array.`)
		const result = inputArray.lengt;
		consoleOutput('Length using arr.length', result);
		return result;
	}

	const access = (index) => {
		consoleInput(inputArray);
		consoleOperation(`Access the value of index (${index}) from input.`);
		if (index !== undefined && index >= 0 && index < inputArray.length) {
			const result = inputArray[index];
			consoleOutput('Access value using arr[index]', result)
			return result;
		} else {
			return "Invalid index or index not provided";
		}
	};

	const deleteElement = (position) => {
		consoleOperation(`Delete element (${element}) into the index (${position}).`)
	}

	return {
		traverse,
		getLength,
		access,
		insertElement
	};
}

export default ArrayOperation;
