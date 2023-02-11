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
    let sum = nums[slow] + nums[fast], results = null; //slow=4     fast =5 
    while(true){
        sum = nums[slow] + nums[fast]; // 2,7,11,15  target = 8  sum = 26
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
console.log("twoSum: ", twoSum([2,7,11,15], 8));


/*Understand Problem:
    Return indicies whose values sum to target
*/

// hashmap solution
const twoSum2 = (nums, target) => {
    // create hashmap
    let map = {};                   //nums = [3, 2, 4] target = 6 map = {0, 1}
    // iterate over num
    for(let idx = 0; idx < nums.length; idx++) {
        // create to the value target - nums[idx]  ex. target = 9, nums[idx] = 2
        let diff = target - nums[idx]; // 2, 7, 11, 15    //
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
            console.log("[map[diff], idx]: ", [map[diff], idx])
            return [map[diff], idx];
        }
        map[nums[idx]] = idx;
        console.log("map[nums[idx]]: ", map[nums[idx]])
    } 
}
// { diff: 3, map: {}, target: 6, 'nums[idx]': 3 }
// { diff: 4, map: { '3': 0 }, target: 6, 'nums[idx]': 2 }
// { diff: 2, map: { '2': 1, '3': 0 }, target: 6, 'nums[idx]': 4 }
// twoSum2:  [ 1, 2 ]
console.log("twoSum2: ", twoSum2([3,2,4], 6)) 




/*
Understand the problem:
    There is exactly one solution. Find the indices whose values add to target
Devise a plan:
    use nested loops to compare values. If sum of two values equals target, return the index.
Code:
    >>Brute Force Solution<<
*/                    
var twoSum3 = function(nums, target) {   // nums = [3,3,3,4,5,6,7] target 6
    // create empty array                               1
    let result = [];
    //use nested loops to compare two values
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(i)
                result.push(j)
            }
        }
    }
    //return array after loop is finished
    return result
};
console.log("twoSum3:", twoSum3([2,7,11,15], 9)) //target = 9 output: [0, 1]

const twoSummy = function(n, t) {
    let map = new Map(), res = [];
    for (let idx = 0; idx < n.length; idx++) {
        if (map.get(n[idx]) !== null) {
            res[0] = map.get(n[idx]);
            res[1] = idx;
            return res;
        } else {
            map.set(target - n[idx], idx);
        }
    }
    return res;
}

console.log("twoSummy:", twoSummy([2,7,11,15], 9)) //target = 9 output: [0, 1]

const twoSumer = function(n, t) {
    let map = {}, len = n.length;
    for (let idx = 0; idx < len; idx++) {
        if (n[idx] in map) return [map[n[idx]], idx];
        map[t - n[idx]] = idx;
    }
    return [-1, -1];
}

console.log("twoSumer:", twoSumer([2,7,11,15], 9)) //target = 9 output: [0, 1]
/*
Understand the problem
    find the first indices that sum to our target. Return these indices in array form.
Devise a plan
    use map to store key value pairs.
    use key value pairs to check if number to find is stored
    use the numToFind as key in map and the index as it's value
    if stored, we found our indices to find and return its value and the current i in array
Code:
*/
//Hashmap storing number to find as Key
var twoSum4 = function(nums, target) {   // nums = [3, 2, 4] target = 6
    //create map = {'3': 0, '4': 1, '': }
    let map = {};
    //loop through nums array;
    for(let i = 0; i < nums.length; i++){
        //create var for number to find
        let numToFind = target - nums[i]; // 6 - 4 = 2;
        if(nums[i] in map){ 
            return [map[nums[i]], i] //[1, 2]
        } else{
            map[numToFind] = i; //map[4] = 1
        }
    }
};

console.log("twoSum4:", twoSum4([3, 2, 4], 6)) //target = 6 output: [1, 2] 
