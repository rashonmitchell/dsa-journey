/** 
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 * 
 * Note that you must do this in-place without making a copy of the array.
 * 
 * 
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 * 
 * 
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * 
 * 
 * 
 * Follow up: Could you minimize the total number of operations done?
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// _helper function
const _removeElement = function(nums, val) {
    // base-case
    if(nums.length === 0) return 0;
    let slow = 0, fast = 0;

    while(fast < nums.length) {
        if(nums[fast] !== val) { 
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow; 
};


// Two-pointers w/ _helper function
const moveZeroes = function(nums) {
    let p = _removeElement(nums, 0);
    for(; p < nums.length; p++) {
        nums[p] = 0;
    }
};
console.log("moveZeroes: ", moveZeroes([0,1,0,3,12]));

//  another

// Two-pointer
const moveZeroes2 = function(nums) { // 0,1,0,3,12
    let left = 0;
    for(let num of nums) { // O(n)
        if(num !== 0) nums[left++] = num; // [1, 3, 12]     //[0,1,0,3,12]
    }

    for(let idx = left; idx < nums.length; idx++) { // O(n)
        nums[idx] = 0; // [1, 3, 12, 0, 0]
    }
}
let arr = [0,1,2,2,3,0,4,2,8,4,0,4,0]
console.log("moveZeroes2: ", moveZeroes2([0,1,0,3,12]));

// another

// Splice method
const moveZeroes3 = function (nums) {
    //have a temp array, and a left that equals 0, with a right that equals 0
    let left = nums.length;
    //iterate through the nums array
    for (let right = 0; right < left; ) {
        //if the current element equals 0, push it to the end
        if (nums[right] === 0) {
            nums.splice(right, 1)
            nums.push(0)
            left -= 1;
            // nums[left++] 
       } else {
            right += 1;
           
       }
    }
}
console.log("moveZeroes3: ", moveZeroes3([0,1,0,3,12]));
