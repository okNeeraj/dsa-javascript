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

}
