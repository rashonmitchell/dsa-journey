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
// time complexity: O(n log n)
// space complexity: O(1)
const maxOperations = function(nums, k) {
                                      //s
    // create variable      // nums = [[1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5]], k = 2     
                                                //e
    let result = 0, start = 0, end = nums.length - 1;
    // sort nums 
    nums.sort((a, b) => a-b);
    // let arr = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4]
    // arr.sort((a, b) => a-b)
    // console.log("arr: ", arr) 
    // console.log("nums", nums)
    // iterate 
    while(start < end) {
        //  store sum value
        let sum = nums[start] + nums[end];  
        // if-cond
        if( sum === k) {
            // console.log("sum === k", sum === k, result, start, end)
            // increase counter
            result++;
            // move start pointer
            start++;
            // move end pointer
            end--;
        } else if (sum < k) {
            // console.log("sum < k", sum < k, start)
            start++;
        } else {
            // console.log("sum > k", sum > k, end)
            end--;
        }
    }
    // return result
    return result;
};
let arr = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5], k = 2

console.log("maxOperations: ", maxOperations([[4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4]], 2)) 
// https://openai.com/blog/chatgpt/

//  another


// hashmap w/ new Map()
// time: O(n), space: O(n)
const maxOperations2 = function(nums, k) {
    let map = new Map(), counter = 0;
    for(let element of nums) {
        if(map.has(k - element)) {
            counter++;
            map.set(k - element, map.get(k - element) - 1) 

            if(map.get(k - element) === 0) map.delete(k - element);   // ex 3 - 3 = 0
        } else {
            map.set(element, (map.get(element) || 0) + 1)
        }
    }
    return counter;
    // if(map[k - num]) {
    //     map[num] = (map[num] || 0) + 1
    // }

    // for(let foo in map) {
    //     if(map[k - num]) {
    //         map[num] = (map[num] || 0) + 1
    //     }
    // }
}
console.log("maxOperations2: ", maxOperations2([3,1,3,4,3], 6)) 



// another 

// hashmap
// time: O(n), space: O(n)
const maxOperations3 = function(nums, k) {
    let map = {}, counter = 0;
    for(let idx = 0; idx < nums.length; idx++) {
        let num = nums[idx] // current number ex 3, 1, 3, 4, 3
        // if the number that can make a pair exists in the map
        if(map[k - num]) { // ex 3 - 3 = 0
            // increase the number of pairs that can make k by 1 ex, 3+3 
            counter++; // 1 -> 0 -> 1
            // decrease the number that can make a pairs by 1
            map[k - num]--; // decrease by 1
        } else { // if the number that can make a pair doesn't exist
            // increaing the count of the current number by 1
            map[num] = (map[num] || 0) + 1; // map[3] = 2
        }
    }
    return counter;
}   
// { '1': 1, '3': 3, '4': 1 }
console.log("maxOperations3: ", maxOperations3([3,1,3,4,3], 6)) 
//                                                 