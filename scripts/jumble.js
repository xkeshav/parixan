const input = 'torzeonthowoereezero';

// idea here is, first check that every letter of numeral exist in the given string, 
// if it exist then remove the numeral letter from given string  and search for next numeral and so on

const numeral = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3 };

const indexFound = (word, str) => str.indexOf(word) !== -1;

// check whether every letter exist on given string
const isExist = (word, str) => [...word].every((w) => indexFound(w, str));

//replace letter in string
const replaceLetter = (word, from) => word.replace(from, '');

const replacedWord = (word, str) => [...word].reduce(replaceLetter, str);

// check the occurrence of numeral letter in given string

const findOccurrence = ([sentence, collector], word) => {
	console.log({ sentence, word, collector });
	const exist = isExist(word, sentence);
	if (exist) {
		collector.push((numeral[word])); // push respective number in separate array
		const replacedString = replacedWord(word, sentence); // replace match word from input string
		return [replacedString, collector];
	} else {
		return [sentence, collector];
	}
}


const findJumbleWord = (input, next = []) => {
	const output = [];
	// tricky part is we are sending array as initial value so that if there is multiple instance of the same literal then it will be done on next time calling of same method
	const [remains] = Object.keys(numeral).reduce(findOccurrence, [input, next]);
	console.log({ remains, next, input, output });
	if (remains.length > 2) {
		findJumbleWord(remains, next);
	}
	return next;
};

const result = findJumbleWord(input); //.sort().join('');

// now if we require to sort ascending and display as a number then

const resultSorted = result.sort().join('');

console.log({ result, resultSorted });
