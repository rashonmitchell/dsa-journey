/**
 * 
 * [1] Two Sum
 * 
 * https://leetcode.com/problems/two-sum/
 * 
 *  Given an array of integers nums and an integer target,
 *  return indices of the two numbers such that they add up to target.
 *
 *  You may assume that each input would have exactly one solution,
 *  and you may not use the same element twice.
 * 
 * 
 *  Companies:
 *  adobe | airbnb | amazon | apple | bloomberg | dropbox | facebook | linkedin | microsoft | uber | yahoo | yelp
 *
 *  Example 1:
 *  Input: nums = [2,7,11,15], target = 9
 *  Output: [0,1]
 *  Output: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 *  Example 2:
 *  Input: nums = [3,2,4], target = 6
 *  Output: [1,2]
 *
 *  Example 3:
 *  Input: nums = [3,3], target = 6
 *  Output: [0,1]
 *
 * */

// Two-pointer solution
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
console.log("twoSum: ", twoSum([3,2,4], 6));


// another

// hashmap solution
const twoSum2 = (nums, target) => {
    // create hashmap
    let map = {};
    // iterate over num
    for(let idx = 0; idx < nums.length; idx++) {
        // create to the value target - nums[idx]  ex. target = 9, nums[idx] = 2
        let diff = target - nums[idx]; // 2, 7, 11, 15
        // if(diff >= 0 && map[diff] !== undefined) {
        // console.log({
        //     "diff": diff,
        //     "map": map,
        //     "target": target,
        //     "nums[idx]": nums[idx],
        // })

        // { diff: 7, map: {}, target: 9, 'nums[idx]': 2 }
        // { diff: 2, map: { '2': 0 }, target: 9, 'nums[idx]': 7 }
        if(diff in map){
            return [map[diff], idx];
        }
        map[nums[idx]] = idx;
    } 
}
// { diff: 3, map: {}, target: 6, 'nums[idx]': 3 }
// { diff: 4, map: { '3': 0 }, target: 6, 'nums[idx]': 2 }
// { diff: 2, map: { '2': 1, '3': 0 }, target: 6, 'nums[idx]': 4 }
// twoSum2:  [ 1, 2 ]
console.log("twoSum2: ", twoSum2([3,2,4], 6)) 

/*
Understand Problem:
    Return indicies whose values sum to target
*/