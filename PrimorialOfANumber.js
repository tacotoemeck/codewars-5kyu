// Explanation:
// Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

// Mathematically written as , P3# = 30 .
// 2- numPrimorial (5) ==> return (2310)
// Explanation:
// Since the passed number is (5) ,Then the primorial should obtained by multiplying 2 * 3 * 5 * 7 * 11 = 2310 .

// Mathematically written as , P5# = 2310 .
// 3- numPrimorial (6) ==> return (30030)
// Explanation:
// Since the passed number is (6) ,Then the primorial should obtained by multiplying 2 * 3 * 5 * 7 * 11 * 13 = 30030 .

// Mathematically written as , P6# = 30030 .

function numPrimorial(n) {
    let j;
    let arr = new Set;

    function createPrimeArr(length) {
        if (arr.size == n) return;
        for (let i = 1; i <= length; i++) {
            let tempArr = [];
            for (j = 0; j <= i; j++) {
                if (i % j == 0) tempArr.push(i);
            }

            if (tempArr.length == 2) {

                arr.add(tempArr[0])
            };
        };
        createPrimeArr(length + 1)
    };
    createPrimeArr(n)
    return arr
}

numPrimorial(11)