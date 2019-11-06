// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

// For example, Penny drinks the third can of cola and the queue will look like this:

// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
// Write a program that will return the name of the person who will drink the n-th cola.

// Input
// The input data consist of an array which contains at least 1 name, and single integer n which may go as high as the biggest number your language of choice supports (if there's such limit, of course).

// Output / Examples
// Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"

// bit below are tooooo slow

function whoIsNext(array, num) {
    for ( let i = 0; i < num; i++) {
        
        let first =  array.shift()
        array.push(first, first)
    
    }
    return array.splice(-1,1).toString()
}

// ary.push(ary.shift())

function whoIsNext(array, num) {
    for ( let i = 0; i < num; i++) {
        
        let first =  array.shift()
        array.push(first, first)
    
    }
    let last = array.pop()
    return last;
 
}

whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 20)


// recursion

function whoIsNext(names, r){
    if(r == 1){
      let first = names.shift();
      return first;
    }
    var base = names.length;
    
    function recursion(n, i) {
      i = i || base;
      if (n < i) {
          return Math.floor(n * base / i);
      }
      return recursion(n - i, 2 * i);
    }
    return names[recursion(r-1)];
  };
  