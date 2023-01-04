/** 
 *
 * [1679] Max Number of K-Sum Pairs
 *
 * https://leetcode.com/problems/max-number-of-k-sum-pairs/description/
 * 
 * You are given an integer array nums and an integer k.
 * 
 * In one operation, you can pick two numbers from the array whose sum equals k
 * and remove them from the array.
 * 
 * Return the maximum number of operations you can perform on the array.
 * 
 * 
 * Example 1:
 * Input: nums = [1,2,3,4], k = 5
 * Output: 2
 * Explanation: Starting with nums = [1,2,3,4]:
 * - Remove numbers 1 and 4, then nums = [2,3]
 * - Remove numbers 2 and 3, then nums = []
 * There are no more pairs that sum up to 5, hence a total of 2 operations.
 * 
 * Example 2:
 * Input: nums = [3,1,3,4,3], k = 6
 * Output: 1
 * Explanation: Starting with nums = [3,1,3,4,3]:
 * - Remove the first two 3's, then nums = [1,4,3]
 * There are no more pairs that sum up to 6, hence a total of 1 operation.
 * 
 * 
 * Constraints:
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^9
 * 1 <= k <= 10^9
 * 
 * 
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Two pointers sorted array
// time complexity: O(nlogn)
// space complexity: O(1)
const maxOperations = function(nums, k) {
    let count = 0;
    let left = 0;
    let right = nums.length - 1;
    nums.sort((a, b) => a - b);
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === k) {
        count++;
        left++;
        right--;
        } else if (sum < k) {
        left++;
        } else {
        right--;
        }
    }
    return count;
};

// another solution

// Hashmap
// time complexity: O(n)
// space complexity: O(n)
const maxOperations = function(nums, k) {
    const map = {};
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map[k - num]) {
        count++;
        map[k - num]--;
        } else {
        map[num] = (map[num] || 0) + 1;
        }
    }
    return count;
}

// another solution

// Hashmap with for-loop
// time complexity: O(n)
// space complexity: O(n)
const maxOperations = function(nums, k) {
    const map = new Map();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map.has(k - num)) {
        count++;
        map.set(k - num, map.get(k - num) - 1);
        if (map.get(k - num) === 0) {
            map.delete(k - num);
        }
        } else {
        map.set(num, (map.get(num) || 0) + 1);
        }
    }
    return count;
};

// another solution

// Hashmap with for-of loop
// time complexity: O(n)
// space complexity: O(n)
const maxOperations = function(nums, k) {
    const map = new Map();
    let count = 0;
    for (let element of nums) {
        if (map.has(k - element)) {
        count++;
        map.set(k - element, map.get(k - element) - 1);
        if (map.get(k - element) === 0) {
            map.delete(k - element);
        }
        } else {
        map.set(element, (map.get(element) || 0) + 1);
        }
    }
    return count;
};
