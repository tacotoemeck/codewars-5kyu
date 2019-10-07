// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3


    function rgb(r, g, b){
    
  let result = [];
   
  for ( let i = 0; i < arguments.length; i++) {
  	if ( arguments[i] > 255 ) {
  		result.push("FF")
  	}
  	else if ( arguments[i] <= 0 ) {
  		result.push("00")
  	}
  	else {
  	let hexColor = (arguments[i]).toString(16).toUpperCase()

  	if ( hexColor.length < 2 ) {
  		hexColor = "0" + hexColor
  	}

  	result.push(hexColor)
  }

  }
   return result.join('')

  }

  rgb(9,255,255)