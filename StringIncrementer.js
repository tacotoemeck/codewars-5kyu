// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.



// 

function incrementString(str) {

    let regex = RegExp(/\d/g);
    let regexLetters = (/[a-z]/gi);
    
    let numberString = str.match(regex);
    if ( numberString == null ) return str + 1;
    let lettersString = str.match(regexLetters);
    if (lettersString == null ) lettersString = '';
    else lettersString = lettersString.join('')

    let indexLast = numberString.length-1;

    numberString[indexLast] = Number(numberString[indexLast])+1;
    
    if ( numberString[indexLast].toString().length > 1) {
        let length = numberString.length
        numberString[indexLast] = '9';
        numberString = Number(numberString.join('')) + 1;
        numberString = numberString.toString()
        if ( numberString.length >= length ) result = lettersString + numberString;
        else {
            let zeros = length - numberString.length;
            for ( let i = 0; i < zeros; i++) {
                lettersString+='0';
            };
            result = lettersString + numberString
        }
    }
    else {
    result = lettersString + numberString.join('');
    }
  return result
};

incrementString('010');