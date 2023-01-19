/** 
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * Given an array nums of n integers, return an array of all the unique
 * quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 * 
 * 
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 
 * 
 * You may return the answer in any order.
 * 
 * 
 * Example 1:
 * Input: nums = [1,0,-1,0,-2,2], target = 0
 * Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * 
 * 
 * Example 2:
 * Input: nums = [2,2,2,2,2], target = 8
 * Output: [[2,2,2,2]]
 * 
 * 
 * 
 * Constraints:
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 
 * 
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// Two-pointer solution
const fourSum = function(nums, target) {
    if(nums.length < 4) return [];
    nums.sort((a,b) => a-b);
    let results = [];

    for(let p1 = 0; p1 < nums.length - 3; p1++){
        if(p1 > 0 && nums[p1] === nums[p1 - 1]) continue;

        for(let p2 = p1 + 1; p2 < nums.length - 2; p2++) { // 1,2,3,4,5 aka idx = 1, j = idx + 1, left = j + 1, right = length -1
            if(p2 > p1 + 1 && nums[p2] === nums[p2 - 1]) continue;
            let p3 = p2 + 1; // aka "left = idx + 1 || 0".....basically the start of the left pointer
            let p4 = nums.length - 1; // aka "right = nums.length - 1"
            while(p3 < p4) {
                // [nums[a], nums[b], nums[c], nums[d]]
                let sum = nums[p1] + nums[p2] + nums[p3] + nums[p4];

                if(sum === target) {
                    results.push([nums[p1], nums[p2], nums[p3], nums[p4]])
                    while(nums[p3] === nums[p3 + 1]) p3++;
                    while(nums[p4] === nums[p4 + 1]) p4--;
                    p3++;
                    p4--;
                } 
                else if (sum < target) p3++;
                else p4--;
            }
        }
    }
    return results;
};


console.log("fourSum: ", fourSum([-1,2,1,-4], 1));