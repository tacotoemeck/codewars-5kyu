// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// Don't modify the input
// For C: The result is freed.


function orderWeight(strng) {
  
 let newStr = strng.split(' ').map(num=> num.split(''));

 let result = [];
 let obj = []


 for ( let i = 0; i < newStr.length; i++) {
 	let sum = newStr[i].reduce((a,b) => Number(a) + Number(b));
 	result.push(sum)
 }


 for ( let j = 0; j < newStr.length; j++) {

 }


// return result
// .sort((a,b) => a-b)

 }

orderWeight("103 123 4444 99 2000")

// 

function orderWeight(strng) {
  
let newStr = strng.split(' ');
 
let obj = newStr.reduce(function(acc, cur, i) {
	acc[i] = cur;
	return acc
}, {});

return obj
}

orderWeight("103 123 4444 99 2000")

// 

function orderWeight(strng) {
  
const sum = (str)=> str.split('').reduce((sum, el) => (sum+(+el)), 0);

function commpare(a,b) {
	let sumA = sum(a);
	let sumB = sum(b);
	return sumA === sumB ? a.localCompare(b) : sumA - sumB
};
return strng.split(' ').sort(commpare).join(' ')
}

orderWeight("103 123 4444 99 2000")