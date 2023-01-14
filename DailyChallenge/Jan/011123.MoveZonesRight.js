/** 
 *
 * Move Zeroes Right
 *
 * Given an array nums and an integer target, you need to move the element which equal to target to the front of the array,
 * and the order of the remain elements can not be changed.
 * 
 * 
 * All your move operations should be performed on the original array.
 * 
 * Note that you must do this in-place without making a copy of the array.
 * 
 * 
 * Example 1:
 * Input: nums = [5, 1, 6, 1], target = 1
 * Output: [1, 1, 5, 6]
 * Explanation: 1 is target, so you should keep them in the front of array.
 * 
 * Example 2:
 * Input: nums = [-1, 2, 3, 5, 2, 2] target = 2
 * Output: [2, 2, 2, -1, 3, 5]
 * Explanation: 2 is target, so you should keep them in the front of array.
 * 
 * 
 * Example 3:
 * Input: nums = [2, 3, 4, 6] target = 1
 * Output: [2, 3, 4, 6]
 * Explanation: 1 is not target, so you should not change the array.
 * 
 * Constraints:
 * The length of array is within range: [1, 100000]
 * If the target does not appear in the array, there is no need to modify the original array.
 * 
 * 
 * 
 * Follow up: Could you minimize the total number of operations done?
 */


/**
 * @param nums: a list of integer
 * @param target: an integer
 * @return: nothing
 */


<<<<<<< HEAD
https://leetcode.com/problems/apply-operations-to-an-array/

const moveTarget = (nums, target) => {
    let arr1 = [];
    let arr2 = [];
    for( let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            arr1.push(nums[i]);
        } else{
            arr2.push(nums[i]);
        }
    }
    return arr1.concat(arr2);
};
console.log("moveTarget: ", moveTarget([5, 1, 6, 1], 1));

/*
Understand: 
    Find numbers equal to target and put them at beginning of array. All other numbers remain in same relative order and are placed after the initial numbers matching the target.
Devise:
    Use two pointers to run through array
    iterate through array and find numbers matching target. Create array of matching numbers, then create array of remainders and merge arrays together
Code:
*/


const moveTargetRight = (nums, target) => {
=======
const moveTarget = (nums, target) => {
>>>>>>> 2c8304b (2460 Apply Operations to an Array)
    let right = nums.length - 1;
    for(; right >= 0; right--) {
        if(nums[right] === target) break;
    }
<<<<<<< HEAD
    if(right < 0) return;
    for(let left = right - 1; left >= 0; left--) {
        if(nums[left] !== target) [nums[left], nums[right--]] = [nums[right], nums[left]];
    }
};
console.log("moveTargetRight: ", moveTargetRight([-1, 2, 3, 5, 2, 2], 2));
=======

    for(let idx = right - 1; idx >= 0; idx--) {
        if(nums[idx] !== target) [nums[idx], nums[right--]] = [num[right], nums[idx]];
    }
};
>>>>>>> 2c8304b (2460 Apply Operations to an Array)
