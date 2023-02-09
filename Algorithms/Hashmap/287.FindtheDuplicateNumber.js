/*
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * 
 * There is only one repeated number in nums, return this repeated number.
 * 
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 * 
 * Example 1:
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 * 
 * Example 2:
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 */

/*
Understand the problem:
    return the first recurring number. Ex: input: [1,2,3,4,4] output: 4
Devise a plan:
    use map to store values
    loop through array and check map to see if value is there
        use if conditions to trigger actions
        if in map output that number; if not, set that number into map
Code:
*/

var findDuplicate = function(nums) {                           
    //i
//Input: nums = [3,1,3,4,2]
//Output: 3
//create map = {'3' : 1, '1': 1, '': , '': } 
const map = {};
//loop through
for(let idx = 0; idx < nums.length; idx++){
//if condition, return if value found
let num = nums[idx]; //num = 3
if(num in map) return num; // return = 3 >>> output: 3
//else condition, submit value into array
else map[num] = (map[num] || 0) + 1; //map[1] = 0 + 1
}

};

console.log("findDuplicate:", findDuplicate([3,1,3,4,2]))


var findDuplicate2 = function(nums) {                           

// create map
const map = new Map();
// loop through
let index = 0
while(index < nums.length){
// if condition, return if value found
let num = nums[index]; // cleaning up code
if(map[num]) return num; 
//else condition, submit value into array
else{
map[num] = (map[num] || 0) + 1; 
index++
}
}

};
console.log("findDuplicate2:", findDuplicate2([3,1,3,4,2]))

// Floyd's Cycle Detection Approach
var findDuplicate3 = function (nums) {
//ns    s
//Input: nums = [3,1,3,4,2]
//Output: 3            f
let slow = 0,
fast = 0;
while (true) {
slow = nums[slow]; //slow = 3
fast = nums[nums[fast]]; //fast = 4

if (slow === fast) break;
}
let newSlow = 0; // newSlow = 0
while (slow !== newSlow) {
slow = nums[slow]; // slow = 4
newSlow = nums[newSlow]; //newSLow = 3;
}
return newSlow; // 3
};

console.log("findDuplicate3:", findDuplicate3([3,1,3,4,2]))


//BRUTE FORCE
/*
Understand: 
return first value with a duplicate

Devise a plan:
use nested loops to check one value to the rest of the values.
If we find a matching number in the nested loop, return that value
otherwise return undefined
*/
var findDuplicate4 = function (nums) {
//create loop
for(let idx = 0; idx < nums.length; idx++){
//nested loop
for(let j = idx + 1; j < nums.length; j++){
//if match is found, return the value
if(nums[idx] === nums[j]) return nums[idx]
}
}
// if no match is found
return undefined;
};

console.log("findDuplicate4:", findDuplicate4([3,1,3,4,2]))