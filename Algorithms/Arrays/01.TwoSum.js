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

const twoSum = (nums, target) => {
    //create pointers
    let start = 0, end = nums.length - 1;
    //initialize empty array
    let results = [];             
    let sortedNums = nums.sort(); 
    //iterate                          
        //if condition valid
    while(start < end){
        let temp = sortedNums[start] + sortedNums[end];
        console.log(temp)
        if(temp === target){
            results.push(start, end)
            break;
        }
        else if(temp < target) start++;
        else end--;
    }
    return results
}

const twoSum2 = (nums, target) => {
    // create hashmap
    let map = {};
    // iterate over num
    for(let idx = 0; idx < nums.length; idx++) {
        // create to the value target - nums[idx]  ex. target = 9, nums[idx] = 2
        let diff = target - nums[idx]; // 2, 7, 11, 15
        // if(diff >= 0 && map[diff] !== undefined) {
        console.log({
            "diff": diff,
            "map": map,
            "target": target,
            "nums[idx]": nums[idx],
        })

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