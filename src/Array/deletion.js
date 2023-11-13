import {
	consoleInput,
	consoleOperation,
	consoleOutput,
	getOrdinalIndicator
} from '../Utils/console';

export const deletion = (inputArray, index) => {
	consoleInput(inputArray);
	consoleOperation(`Delete (${getOrdinalIndicator(index)}) index from the given array.`)

	const deleteIndex = () => {
		if (index > inputArray.length || index < 0) {
			console.log(`Invalid index! Please provide index between 0 to ${inputArray.length}`)
			return;
		}
		for (let i = index; i < inputArray.length - 1; i++) {
			inputArray[i] = inputArray[i + 1];
		}

		inputArray.length = inputArray.length - 1;

		consoleOutput('Delete element', inputArray)
		return inputArray;
	}

	return {
		deleteIndex
	};
}
