/** 
 *
 * [989] Add to Array-Form of Integer
 *
 * https://leetcode.com/problems/add-to-array-form-of-integer/description/
 *
 * The array-form of an integer num is an array representing its digits in left
 * to right order.
 * 
 * 
 * For example, for num = 1321, the array form is [1,3,2,1].
 * 
 * 
 * Given num, the array-form of an integer, and an integer k, return the
 * array-form of the integer num + k.
 * 
 * 
 * Example 1:
 * Input: num = [1,2,0,0], k = 34
 * Output: [1,2,3,4]
 * Explanation: 1200 + 34 = 1234
 * 
 * 
 * Example 2:
 * Input: num = [2,7,4], k = 181
 * Output: [4,5,5]
 * Explanation: 274 + 181 = 455
 * 
 * 
 * Example 3:
 * Input: num = [2,1,5], k = 806
 * Output: [1,0,2,1]
 * Explanation: 215 + 806 = 1021
 * 
 *
 *
 * Example 4:
 * Input: num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], k = 516
 * Output: [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
 * 
 *  
 * Constraints:
 * 1 <= num.length <= 10^4
 * 0 <= num[i] <= 9
 * num does not contain any leading zeros except for the zero itself.
 * 1 <= k <= 10^4
 * 
 * 
 */


/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

// Array solution:
const addToArrayForm = function(num, k) {
    // convert k to array
    let kArr = k.toString().split('').map(digit => parseInt(digit));

    // Add k to num
    let result = [], carry = 0, idx = num.length - 1, j = kArr.length - 1;
    while (idx >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if (idx >= 0) {
            sum += num[idx--];
        }
        if (j >= 0) {
            sum += kArr[j--];
        }
        carry = Math.floor(sum / 10);
        result.unshift(sum % 10);
    }
    return result;
}

// another

// Math solution:
const addToArrayForm = function(num, k) {
    let result = [], carry = 0, idx = num.length - 1;
    while (idx >= 0 || k > 0 || carry > 0) {
        let sum = carry;
        if (idx >= 0) {
            // add num[idx] to sum and decrement idx
            sum += num[idx--];
        }
        
        if (k > 0) {
            // add K%10 bc we want the last digit of k
            sum += k % 10;
            // divide k by 10 to get rid of the last digit
            k = Math.floor(k / 10);
        }
        // if sum is greater than 10, we need to carry
        carry = Math.floor(sum / 10);
        // add the last digit of sum to result
        result.unshift(sum % 10);
    }
    return result;
};