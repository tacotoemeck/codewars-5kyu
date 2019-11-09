// Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

// Sudoku rules:

// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

// Rows:


// There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

// In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

// Columns:


// There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

// In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

// Regions


// A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

// Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

// In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

// Valid board example:


// For those who don't know the game, here are some information about rules and how to play Sudoku:



    function doneOrNot(board){

    let sliceStart = 0;
    let sliceEnd = 3;
    let index = 0;
    let result = 'Finished!';  
    let arr = board;  

    function checkHorizontalAndVertical(arr) {
        
    for ( let i = 0; i < arr.length; ++i) {
        let horizontal = new Set(arr[i])
        if ( horizontal.size < 9 ) result =  "Try again!";
        let vertical = [];
        let verticalSet
            for ( let j = 0; j < arr.length; ++j) {
        vertical.push(arr[j][i])
        verticalSet = new Set(vertical);
            };
        if ( verticalSet.size < 9 ) result =  "Try again!";
       };

    }
 
    function sectionCheck(arr, sliceStart, sliceEnd, index) {
    
    if ( sliceStart > 6 ) {
        index = index+3;
        sliceStart = 0;
        sliceEnd = 3;
    };

    if ( index == 9) return result;

    let section = [arr[index].slice(sliceStart, sliceEnd), arr[index+1].slice(sliceStart, sliceEnd), arr[index+2].slice(sliceStart, sliceEnd) ];
    let flattened = [];
    section = section.map(array => array.map(num => flattened.push(num)));
    let set = new Set(flattened)

    if ( set.size < 9 ) result = "Try again!"
    
    sliceStart=sliceStart+3;
    sliceEnd=sliceEnd+3;

    sectionCheck(arr, sliceStart, sliceEnd, index);
};

checkHorizontalAndVertical(arr);
sectionCheck(arr, sliceStart, sliceEnd, index);
return result;

};

doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]])


