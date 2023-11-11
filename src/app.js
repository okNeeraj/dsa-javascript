import ArrayOperation, {
	traversing
} from './Array'

const App = () => {
	/**
	 * Array Traversing
	 * traversing(arr) // return array
	 * access(index) // return the value of given index
	 */

	const arr = ArrayOperation(false) || [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const traversal = traversing(arr);

	// Access value of index
	const indexValue = traversal.access(2)
	// console.log(indexValue)

	// Insert Element
	const insertToPosition = traversal.insertElement('Neeraj', 9);
	// console.log(insertToPosition)
}

export default App;
