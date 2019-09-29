// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {

let arrMinusZeros = arr.filter(val => val !== 0)
let zeros = arr.filter(val => val === 0)
console.log(arrMinusZeros)
console.log(zeros)

return arrMinusZeros.concat(zeros)

}


moveZeros(["a", 0,"b", 0, null,"c", 0,"d", 0, 1,false, 0, 1,3,[],1,9,{}])