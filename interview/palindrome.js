
const isPalindrome = (input) => {
	// first replace all whitespace and special char with '' and lowercase if its string
	const sanitizedInput = input.replace(/\W+/gi, " ").replace(/\s+/g, "");
	const len = Math.floor(sanitizedInput.length / 2);
	if (sanitizedInput.length === 1) return true;
	for (let i = 0; i < len; i++) {
		if (sanitizedInput[i] !== sanitizedInput[sanitizedInput.length - i - 1]) {
			return false;
		}
		return true;
	}
}

