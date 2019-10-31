// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// alternative text

// #Hint: See Fibonacci sequence

// #Ref: http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216


function perimeter(num) {

if ( num == 0 ) return 4;

let fibSeq = [1,1];
let index1=0;
let index2=1;
    function fib(a, b, fibLength) {
        
        if ( fibSeq.length >= fibLength) return;
        let num1 = fibSeq[a];
        let num2 = fibSeq[b];
        index1++;
        index2++;
        let nextNum = num1 + num2; 
        fibSeq.push(nextNum);

        fib(index1,index2,fibLength)
    }
fib(0,1,num+1)
return (fibSeq.reduce((a,b)=> a+b))*4
}

perimeter(7)

// not mine below, yet clear and simple

nrzhnv, ThomasCms
function perimeter(n) {
  let i, fib = [1, 1];
  
  for(i = 2; i <= n; i++) {
    fib[i] = fib[i-2] + fib[i-1];
  }
  
  let total = fib.reduce((a, b) => a + b);
  
  return 4 * total;
}

