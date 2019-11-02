// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// #Examples:

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see Example Tests: for more details.

// Note

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// below times out

function list_squared(n,m) {
   
    let numbers = [];
    let result = [];

    for ( let i = n; i <= m; i++) {
        numbers.push(i)
    };
 
    for ( let i = 0; i < numbers.length; i++) {
    let divisorsOfEachNumber = [];
    
        for ( let j = 1; j <= numbers[i]; j++) {
            divisorsOfEachNumber.push(j)
        }
     let divisor = divisorsOfEachNumber[divisorsOfEachNumber.length-1];
     let divs = [];

     for ( let k = 0; k <= divisorsOfEachNumber.length; k++) {
         if ( divisor % divisorsOfEachNumber[k] == 0 ) {
             divs.push(divisorsOfEachNumber[k])
         }
     }
     
     let sumOfSquares = divs.map(num => Math.pow(num, 2)).reduce((a,b) => a+b);
     
     let squares = Math.sqrt(sumOfSquares);

     let eachResult = [];

     if ( squares % 1 == 0) {
        eachResult.push(divisor)
        eachResult.push(sumOfSquares)
        
        result.push(eachResult)
     }
    }
return result;

};

list_squared(1,250)


// 

function listSquared(m, n) {
	let result = [];
	for (let i = start; i <= end; i++) {
		let sum = 0;
		for (let j = 1; j <= i; j++) {
			if (i % j === 0) {
				sum += j * j;
			}
		} if (Math.sqrt(sum) % 1 === 0) {
			result.push([i, sum]);
		}
	} return result;
}