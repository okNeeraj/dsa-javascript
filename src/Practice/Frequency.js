// 01. Write a function which takes a string and returns counts of each character in the string.

export const characterCount = (string) => {
	let charCount = {}

	// Loop each char in string
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		// If key exist in obj then add + 1 to current
		// Else key not exist in obj then add 1
		if (charCount.hasOwnProperty(char) ? charCount[char] += 1 : charCount[char] = 1);
	}

	// Return counter object
	return charCount;
}

let string = 'Hello DSA';
let charCount = characterCount(string);
console.log(`Character count of "${string}" >> `, charCount)

export const sameFrequency = (arr1, arr2) => {
	// Check, if both array has same length, if not return false
	if (arr1.length !== arr2.length) return false;
	// Loop throw arr1 and compare each index with arr2's index,
	for (let i = 0; i < arr1.length; i++) {
		const correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) return false;
		console.log(arr2)
		arr2.splice(correctIndex, 1)
	}
	return true;
}

const arr1 = [1, 2, 3]
const arr2 = [1, 4, 9]
const isFrequencySquare = sameFrequency(arr1, arr2);
console.log(isFrequencySquare)

