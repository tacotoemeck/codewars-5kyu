// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  let HH = 0;
  let MM = 0;
  let SS = 0;

  function pad(num) {
  	return (num < 10) ? "0" + num : num 
  }

  for ( let sec = 0; sec < seconds; sec ++) {
  	SS++
  	if ( SS == 60 ) {
  		MM++
  		SS = 0;
  	}
  	if ( MM == 60 ) {
  		HH++
  		MM = 0
  	}
  }
 	return ( pad(HH) + ":" + pad(MM) + ":" + pad(SS))

 }

humanReadable(360)
