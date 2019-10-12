// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

function cakes(recipe, available) {

let final = [];

for (property in recipe ) {
	if (available.hasOwnProperty(property)) {
	 final.push(Math.floor((available[property]/recipe[property])))

	} if (!available.hasOwnProperty(property)) {
		return 0
	}
}
final = final.sort((a,b) => a < b);
console.log(final)
return final[0]
}

cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})

// 

function cakes(recipe, available) {

let final = [];

for (property in recipe ) {
	if (available.hasOwnProperty(property)) {
		
	 final.push(Math.floor((available[property]/recipe[property])))

	} if (!available.hasOwnProperty(property)) {
		return 0
	}
}
final = final.sort((a,b)=> a-b)
console.log(final)
return final[0]
}

cakes({"milk":56,"pears":72,"nuts":29}, {"eggs":900,"cream":8500,"cocoa":4400,"oil":5700,"butter":600,"crumbles":8300,"flour":7400,"milk":5600,"pears":2000,"nuts":7200,"chocolate":8900,"apples":7000,"sugar":3400})
