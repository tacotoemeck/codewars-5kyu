// Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

// The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).

// Scoring rules:
// Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

// Return the highest score of the cards that is less than or equal to 21. If there is no score less than or euqal to 21 return the smallest score more than 21.

// Examples
// ["A"]                           ==>  11
// ["A", "J"]                      ==>  21
// ["A", "10", "A"]                ==>  12
// ["5", "3", "7"]                 ==>  15
// ["5", "4", "3", "2", "A", "K"]  ==>  25

function scoreHand(cards) {
  
  let score = 0;

  for ( let i = 0; i < cards.length; ++i) {
  
  	if ( !isNaN(Number(cards[i]))) {
  		score += Number(cards[i]);
  }
  	if ( isNaN(cards[i]) && cards[i] != 'A') {
  		score += 10;
  	}

}

	if ( cards.includes('A')) {
		let acecsCount = 0;
		for ( let i = 0; i < cards.length; ++i) {
			if ( cards[i] == 'A') {
				score+=1;
				acecsCount++;
			}
		}
	for ( let i = 0; i < acecsCount; ++i) {
	if ( score + 10 <= 21)	count+=10;
	else return score;;
	}
	}
return score;
}

// scoreHand(["5", "4", "3", "2", "A", "K"] )
// scoreHand(["2", "3"])
// scoreHand(["7", "7", "8"])
scoreHand([ '9', '8', 'A', 'A', '8' ])
// scoreHand(["K", "J", "Q"])

