const Array = () => {
	return [1, 2, 5, 3, 4];
}

export const traversing = (array) => {
	const traverse = () => {
		for (let i = 0; i < array.length; i++) {
			console.log(array[i])
		}
	}

	const access = (index) => {
		if (index !== undefined && index >= 0 && index < array.length) {
			return array[index];
		} else {
			return "Invalid index or index not provided";
		}
	};

	const insert = (element, position) => {
		for (let i = array.length - 1; i >= 0; i--) {
			if (i >= position) {
				array[i + 1] = array[i]
				// console.log(array[i])
				if (i === position) {
					array[i] = element;
				}
			}
		}
		return array;
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
