import ArrayOperation, {
	traversing,
	insertion
} from './Array'


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

	// Access value of index
	const indexValue = traversal.access(2);

	// Insert Element to specific index/position
	const insertToPosition = insertion(arrString, 'Root4ce', 2);
	insertToPosition.insertAndReturnNewArray();
	insertToPosition.insertAndModifyOriginalArray();
}

export default App;
