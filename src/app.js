import Array, {
	getLength
} from './Array'

const App = () => {
	const arr = Array();
	const lengthOfArr = getLength(arr)
	console.log(lengthOfArr)
}

export default App;
