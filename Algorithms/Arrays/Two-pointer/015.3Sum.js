/**
 * 
 * [15] 3Sum
 * 
 * https://leetcode.com/problems/3sum/
 * 
 *  Description: 
 *  Given an integer array nums, return all the triplets 
 *  [nums[i], nums[j], nums[k]] such that i != j, i != k, and 
 *  j != k, and nums[i] + nums[j] + nums[k] == 0.
 * 
 *  Companies: 
 *  adobe | amazon | bloomberg | facebook | microsoft
 * 
 *  Example 1:
 *  Input: nums = [-1,0,1,2,-1,-4]
 *  Output: [[-1,-1,2],[-1,0,1]]
 * 
 *  Example 2:
 *  Input: nums = []
 *  Output: []
 *  
 *  Example 3:
 *  Input: nums = [0]
 *  Output: []
 * 
 *  Constraints:
 *  3 <= nums.length <= 3000
 *  -105 <= nums[i] <= 105
 * */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Two-pointer solution

// nums[i] + nums[j] + nums[k] == 0
const threeSum = function(nums) {
    // base-case
    if(nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    let results = [];
    // iterate over nums
    for(let p1 = 0; p1 < nums.length; p1++) { // nums:  [ -4, -1, -1, 0, 1, 2 ]
        // if(nums[p1] > 0) break;
        if(p1 > 0 && nums[p1] === nums[p1 - 1]) continue; // skip dupls
        // idx, p2 = (idx + 1), n - 1;
        let p2 = p1 + 1, p3 = nums.length - 1;

        while(p2 < p3) {
            // nums[i] + nums[j] + nums[k]
            let sum = nums[p1] + nums[p2] + nums[p3];
            if(sum === 0) {
                results.push([nums[p1], nums[p2], nums[p3]]);
                
                // while(p2 < p3 && nums[p2] === nums[p2 + 1]) p2++; // skip dupls
                // while(p2 < p3 && nums[p3] === nums[p3 - 1]) p3--; // skip dupls

                while(nums[p2] === nums[p2 + 1]) p2++; // skip dupls  1,2, 3 ,4,5
                while(nums[p3] === nums[p3 + 1]) p3--; // skip dupls  1,2, 3 ,4,5
                p2++; 
                p3--; 
            } 
            else if (sum < 0) p2++; // move left-side
            else p3--; // otherwise move the "otherside"
        }
    }
    return results;
};
console.log("threeSum: ", threeSum([-1,0,1,2,-1,-4]));

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