/** 
 *
 * [938] Range Sum of BST
 *
 * https://leetcode.com/problems/range-sum-of-bst/description/
 *
 * Given the root node of a binary search tree and two integers low and high,
 * return the sum of values of all nodes with a value in the inclusive range
 * [low, high].
 * 
 * 
 * Example 1:
 * Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
 * Output: 32
 * Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 =
 * 32.
 * 
 * 
 * Example 2:
 * Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
 * Output: 23
 * Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 =
 * 23.
 * 
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [1, 2 * 10^4]. 10 ** 4
 * 1 <= Node.val <= 10^5
 * 1 <= low <= high <= 10^5
 * All Node.val are unique.
 * 
 * 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


// low = 7, high = 15
//          10
//        /    \
//       5      15
//      /  \      \
//     3    7      18
    
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// what's the input? what's the output? 
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32


// Helper funcion w/ recursive solution: 
const rangeSumBST = function(root, low, high) {
    // create var with sum value
    let result = { sum: 0 }; 

    // traverse the tree
    traverse(root, result, low, high);
        
    // return created var w/ sum value
    return result.sum;
};

function traverse(node, obj, L, R) {
    // base case !root = return
    if(!node) return;

    // check left if-cond && check right if-cond  1 <= low <= high <= 10^5
        // true add the sum of values
    if(node.val >= L && node.val <= R) obj.sum += node.val; // root = [10,5,15,3,7,null,18], low = 7, high = 15  // 7 + 10 + 15
    
    traverse(node.left, obj, L, R);
    traverse(node.right, obj, L, R);
}

/* Stack - LIFO
 * Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
 * Output: 32
*/ 

// low = 7, high = 15
//          10                     18 
//                                 null
//        /    \                   15
//       5      15                 7
//      /  \      \                3
//     3    7      18              5        15
//                                 10       18

//  dynamic programming w/ stack solution:
const rangeSumBST_stack_DFS = function(root, low, high) {
    // create sum var = 0
    let sum = 0;
    // create w/ root val's
    let stack = [root];

    // iterate over our stack.length
    while(stack.length) {
        // remove from our stack
        const node = stack.pop(); // DFS traversal of the tree using a stack (LIFO)

        // if-cond we have values to pop
        // pop - 18, 15, 7, 3, 5, 10
        if(node) {
            if(node.val >= low && node.val <= high) sum += node.val;  // 18

            // check left side
            if(node.left > low) stack.push(node.left); // 18
            // check right side
            if(node.right < high) stack.push(node.right); 
        }
    }
    
}

// another

// Recursive solution:
const rangeSumBST_recursive = function(root, low, high) {}
//GPV
/* 
Understand the problem:
Sum values of BST that are between low and high values.
Input: root = [10,5,15,3,7~,null,18], low = 7, high = 15
Output: 32

Devise a plan:
Create function with 3 parameters: Root value, low limit and high limit.
start with empty accumulator to sum values
if !root return null
check if less than root child exists. If so, keep going down the left node branch and if values are >= low input, add to sum acc
check if greater than root child exists. If so, keep going down the right node branch and if values are <= high input, add to sum acc



how do I check children values? if children values, check if higher or lower than parent node value.

*/
const rangeSumBST = function(root, low, high) {
    
};