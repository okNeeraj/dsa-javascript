import {
	consoleInput,
	consoleOperation,
	consoleOutput
} from '../Utils/console';

export const insertion = (inputArray, element, position) => {
	consoleInput(inputArray);
	consoleOperation(`Insert a new element (${element}) into the index (${position}).`)

	/**
	 * Approach 01 :: Return new array using multiple loop
	 */
	const insertAndReturnNewArray = () => {
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

		consoleOutput('Insert and return new array.', updatedArray)
		return updatedArray;
	}


	/**
	 * Approach 02 :: Return same array using shifting element with reverse loop
	 * Uncomment 
	 */
	const insertAndModifyOriginalArray = () => {
		if (position === 'undefined' || position < 0 || position > inputArray.length) {
			console.warn(`Inavlid index/position ! index/position should be between 0 to ${inputArray.length}`)
			return;
		}
		inputArray.length++;
		for (let i = inputArray.length - 1; i > position; i--) {
			inputArray[i] = inputArray[i - 1]
		}

		inputArray[position] = element;
		consoleOutput('Insert and return modified array.', inputArray)
		return inputArray;
	}

	return {
		insertAndReturnNewArray,
		insertAndModifyOriginalArray
	};
}
