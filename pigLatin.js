// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let resultStr = [];

  let strArr = str.split(' ');
 
  for ( let i =0 ; i < strArr.length; i++) {
  	console.log(strArr[i])
    if (strArr[i] != '!' && strArr[i] != '?') {
  	resultStr.push(strArr[i].slice(1,) + strArr[i].slice(0,1) + "ay")
  } else resultStr.push(strArr[i])
  }
  return resultStr.join(' ')
}

pigIt("O tempora o mores !")