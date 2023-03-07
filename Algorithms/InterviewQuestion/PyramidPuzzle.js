/**
 * A Pyramid Descent Puzzle consists of a pyramid of positive integers. 
 * To solve the puzzle, you must find a path that traverses the pyramid from 
 * top to bottom visiting numbers whose product is a given target value. 
 * 
 * Each step in the path must go down one row, and go either one step to the 
 * left or one step to the right.
 * 
 * For example, suppose the pyramid below has a target value of 2.
 *      1
 *     2 3
 *    4 1 1
 * 
 * A solver for this puzzle should output LR, indicating that the correct path
 * starts from the 1 on top, goes Left to the 2 on the second row, 
 * then goes Right to the 1 in the center of the bottom row. 
 * 
 * (Note in particular that the successful path cannot go through the 1 at the end of the bottom row.) 
 * 
 * This gives the path shown in red below:
 *        1
 *      2   3
 *    4   1   1
 * 
 * 
 * In your language of choice, write a solver that can solve any pyramid descent puzzle.
 * Your solver can assume that every input pyramid has a first row with one number 
 * and every row thereafter has one more number than the row above.
 * 
 * Each row is aligned such that the center of the row aligns with the midline of the 
 * pyramid (as shown in the samples above and below).
 * 
 * Below is a sample pyramid with target 720 along with the sample program 
 * input and output for this puzzle.
 * 
 * 
 *                      2				
 *                  4		3			
 *              3		2		6		
 *          2		9		5		2	
 *      10		5		2		15		5
 * 
 *
 * Input: 2,4,3,3,2,6,2,9,5,2,10,5,2,15,5
 * target: 720
 * Output: LRLL
 * 
 */
// [ 
//    [1], 
//    [2,1], 
//    [4,1,1] 
// ]
/**
 * @param {number[]} pyramid
 * @param {number} target
 * @return {string}
 */
// Sum, Difference, Product, Quotient
// DFS w/ recursion

// thinking: 
    // 1. if product === target return the path
    // 2. if product > target return not found
    // 3. if prodoct < target...go left and right
    // 4. if left path is "No path found", return right path
    // 5. if right path is "No path found", return left path
    // 6. if both path's are not "No path found", return left path
// const pyramidDescent = function(pyramid, target) {
//     let path = '', row = 0, col = 0, product = pyramid[0];
//     let result = dfs(pyramid, target, path, row, col, product);
//     return result;
// };

// const dfs = function(pyramid, target, path, row, col, product) {
//     if(product === target) {
//         return path;
//     };
//     if(product > target) {
//         return "No path found";
//     }

//     // set left and right side
//     let left = pyramid[row + col + 1];
//     let right = pyramid[row + col + 2];

//     // look for each path
//     let lp = dfs(pyramid, target, path + 'L', row + 1, col, product * left);
//     let rp = dfs(pyramid, target, path + 'R', row + 1, col + 1, product * right);
//     return lp === "No path found" ? rp : lp;
// };

const pyramidDescent = function(pyramid, target) {
    let path = '';
    let row = 0;
    let col = 0; 
    let product = pyramid[0];
    while (product !== target) {
         // set left and right side
        let left = pyramid[row + col + 1];
        let right = pyramid[row + col + 2];

        if(product * left < target) {
            product *= left;
            path += 'L';
            col++;

            console.log({
                'product line 109': product,
                'path line 110': path,
            })
        } else if (product * right < target) {
            product *= right;
            path += 'R';
            col += 2;

            console.log({
                'product line 118': product,
                'path line 119': path,
            })
        } else {
            return "No path found";
        };
        row++;
    }
    return path;
}
console.log(pyramidDescent([2,4,3,3,2,6,2,9,5,2,10,5,2,15,5], 720));
console.log(pyramidDescent([1,2,3,4,1,1], 2));


let input = [
    [2],
    [4, 3],
    [3, 2, 6],
    [2, 9, 5, 2],
    [10, 5, 2, 15, 5]
]
