// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.



// long and failed solution

function zeros(num) {

let numArr =[];

if ( num == 0) return 0

for ( let i = 1; i <= num; i++) {
numArr.push(i)
}

let result = numArr.reduce((a,b)=> a * b).toString();
console.log(result)
for ( let j = result.length-1; j >= 0; j--) {
	if(result[j] != 0) {
		return result.substring(j+1).length
	}
}

}



// short and sweet



function zeros(num) {
	let zerosCount = 0;

	while ( num > 0) {
		num = Math.floor(num/5);
		zerosCount += num
	}
	return zerosCount
}

zeros(6)