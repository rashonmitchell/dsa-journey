/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time and O(1) space 
// floyd's cycle detection algorithm solution
const findDuplicate = function(nums) {
    const hash = {};
    for (let idx = 0; idx < nums.length; idx++) {
        if (hash.hasOwnProperty(nums[idx])) {
            return nums[idx];
        } else {
            hash[nums[idx]] = 1;
        }
    }
};