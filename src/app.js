import Array, {
	getLength,
	traversing
} from './Array'

const App = () => {
	/**
	 * Array Traversing
	 * traversing(arr) // return array
	 * access(index) // return the value of given index
	 */

	const arr = Array();
	const traversal = traversing(arr);

	// Access index
	const indexValue = traversal.access(2)
	// console.log(indexValue)

	// Insert Element
	const insertToPosition = traversal.insert('Neeraj', 7);
	console.log(insertToPosition)
}

export default App;
