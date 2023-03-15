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
 *     1
 *   2  3
 * 4  1   1
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

/**
 * @param {number[]} pyramid
 * @param {number} target
 * @return {string}
 */

// DFS with recursion

// thinking:
// 1. if product === target, return path
// 2. if product > target, return 'No path found'
// 3. if product < target, go left and right
// 4. if left path is 'No path found', return right path
// 5. if right path is 'No path found', return left path
// 6. if both left and right path are not 'No path focleaund', return left path

const pyramidDescent = function(pyramid, target) {
    let result = '';
    const dfs = function(current = 1, idx = 0, total = pyramid[0], path = '') {
        const row = pyramid[current];
        const options = [ row[idx], row[idx + 1]];

        options.forEach((number, index) => {
            // idx === 0 go left, idx === 1 go right
            const direction = index ? 'R' : 'L'; 
            current++;
            total *= number;
            path += direction;

            // pop it up the stack recursion
            if (total === target && current === pyramid.length) {
                result = path;
                return true;
            } else if (current < pyramid.length) {
                idx += index;
                dfs(current, idx, total, path)
            }

            current--;
            total /= number;
            path = path.slice(0, -1);
        })

        if (result) return result;
        else return 'No path found';
    }
    dfs();
    return result;
}

// output: LRLL
// 2 * 4 * 3 * 2 * 9 * 5 * 2 * 15 * 5 = 720
console.log(pyramidDescent([[2],[4, 3],[3, 2, 6],[2, 9, 5, 2],[10, 5, 2, 15, 5]], 720));