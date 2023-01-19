/** 
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 *
 * Given an integer array nums of length n and an integer target, find three
 * integers in nums such that the sum is closest to target.
 * 
 * Return the sum of the three integers.
 * 
 * You may assume that each input would have exactly one solution.
 * 
 * 
 * Example 1:
 * Input: nums = [-1,2,1,-4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * 
 * Example 2:
 * Input: nums = [0,0,0], target = 1
 * Output: 0
 * Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 =
 * 0).
 * 
 * 
 * Constraints:
 * 3 <= nums.length <= 500
 * -1000 <= nums[i] <= 1000
 * -10^4 <= target <= 10^4
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Two-pointers
const threeSumClosest = function(nums, target) {
    // initialize current smallest difference
    let closestSum = Infinity;
    let closestDiff = Infinity;

    // nums = [-1,2,1,-4]
    nums.sort((a,b) => a-b);
    // nums = [-4, -1, 1, 2]
    //loop through nums and get sum of three values, then subtract that sum to our target
    for(let idx = 0; idx < nums.length-2; idx++){
         // initialze pointers
        let left = idx + 1, right = nums.length - 1;
        // -1 + 2 + 1
        while(left < right) {
            let sum = nums[idx] + nums[left] + nums[right];
            const diff = Math.abs(sum -  target); // (-1 + 2 + 1 = 2)
            if(diff < closestDiff) {
                closestSum = sum;
                closestDiff = diff;
            }
            if (sum < target) left++;
            else right--;
        }
    }
    return closestSum;
};
console.log("threeSumClosest: ", threeSumClosest([-1,2,1,-4], 1));
/*
Understand: Find sum closest to target.
Devise: 
    -get temporary sum of all possible combinations and get the difference between target and temporary sum.
    -the smallest difference is the answer
Code:
*/



const twoSum = (nums, target) => {
    // create our pointers slow & fast
    let slow = 0, fast = slow + 1;
    let sum = nums[slow] + nums[fast], results = null;
    while(true){
        sum = nums[slow] + nums[fast]; // 2,7,11,15
        if(sum === target){
            results = [slow, fast];
            break;
        };
        fast++;
        if(fast >= nums.length){
            slow++;
            fast = slow + 1;
        };
        if(slow >= nums.length) break;
    };
    return results;
};