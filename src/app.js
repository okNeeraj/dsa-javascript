import ArrayOperation, {
	traversing,
	insertion,
	deletion
} from './Array';

import {
	sameFrequency
} from './Practice/Frequency';


const App = () => {
	/**
	 * Array Traversing
	 * traversing(arr) // return array
	 * access(index) // return the value of given index
	 */

	const arr = ArrayOperation(false) || [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const arrNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
	const arrString = ['Superman', 'Spiderman', 'Batman', 'Ironman', 'Thor', 'The Flash'];
	const traversal = traversing(arr);

	/**
	// 01. Access value of index
	traversal.access(2);

	// 02. Insert Element to specific index/position
	const insertToPosition = insertion(arrString, 'Root4ce', 2);
	insertToPosition.insertAndReturnNewArray();
	insertToPosition.insertAndModifyOriginalArray();

	// 03. Delete element from array
	const deleteElement = deletion(arr, 0);
	deleteElement.deleteIndex();
	*/
}

export default App;
