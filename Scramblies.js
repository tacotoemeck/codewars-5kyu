// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    let chars = {};
   
    for (x of str1.split(''))
      chars[x] = (chars.hasOwnProperty(x) ? chars[x] : 0) + 1;
      
    for (x of str2.split('')) {
      if (!chars.hasOwnProperty(x) || chars[x] <= 0) return false; 
      chars[x]--;                                                  
    }                                                              
                                                                   
    return true;                                                   
}  

// below works but takes too long

function scramble(str1, str2) {

let split = str1.split('').sort();
let split2 = str2.split('').sort();

for ( let i = 0; i < split2.length; i++ ) {
	if (!split.includes(split2[i])) {
		return false;
	}
	else {
		split.splice(0, split.indexOf(split2[i]))
	}
}
return true;
};





