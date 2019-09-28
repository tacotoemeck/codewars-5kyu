// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(str) {

	let n = 0;

	for ( let i = 0; i < str.length; i++ ) {
		if (str[i] == `(`) n++; 
		if ( str[i] == ')') n--;
		if ( n < 0 ) return false
	}
return n == 0
}