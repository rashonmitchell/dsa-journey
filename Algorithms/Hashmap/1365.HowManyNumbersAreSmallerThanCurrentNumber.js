/** 
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 *
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/
 *
 * Given the array nums, for each nums[i] find out how many numbers in the
 * array are smaller than it. That is, for each nums[i] you have to count the
 * number of valid j's such that j != i and nums[j] < nums[i].
 * 
 * Return the answer in an array.
 * 
 * 
 * Example 1:
 * Input: nums = [8,1,2,2,3]
 * Output: [4,0,1,1,3]
 * Explanation: 
 * For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
 * For nums[1]=1 does not exist any smaller number than it.
 * For nums[2]=2 there exist one smaller number than it (1). 
 * For nums[3]=2 there exist one smaller number than it (1). 
 * For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
 * 
 * 
 * Example 2:
 * Input: nums = [6,5,4,8]
 * Output: [2,1,0,3]
 * 
 * 
 * Example 3:
 * Input: nums = [7,7,7,7]
 * Output: [0,0,0,0]
 * 
 * 
 * Constraints:
 * 2 <= nums.length <= 500
 * 0 <= nums[i] <= 100
 * 
 * 
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */

// hash map solution
// time complexity: O(n)
// space complexity: O(n)
const smallerNumbersThanCurrent = function(nums) {
    let map = {};
    let sorted = [...nums].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        if (map[sorted[i]] === undefined) {
            map[sorted[i]] = i;
        }
    }
    return nums.map(num => map[num]);
};

// destructive array solution
// time complexity: O(n log n)
// space complexity: O(n)
const smallerNumbersThanCurrent2 = function(nums) {
    // sort the array destructively and then map the original array to the sorted array
    let sorted = [...nums].sort((a, b) => a - b);
    return nums.map(num => sorted.indexOf(num));
}


/*
Understand:
    return an array of values that represent how many numbers in our array are smaller than current number.
Devise a plan:
    loop through array and compare current value to second value
        if value is less than current value, add to number. Push that number after loop ends
    
        return array that was cultivated
Code it out: Brute Force
*/
// brute force solution
// time complexity: O(n^2)
// space complexity: O(n)
const smallerNumbersThanCurrent3 = function(nums) {
    //create empty array and counter
    let results = [], counter = 0;
    //nested loops to compare values
    for(let i = 0; i < nums.length; i++){
        //start at index zero to compare all values
        for(let j = 0; j < nums.length; j++){
            //if cond greater than or less than
            if(nums[i] > nums[j]) counter++;
        }
        results.push(counter)
        counter = 0;
    }
    return results;
};

console.log("smallerNumbersThanCurrent3:", smallerNumbersThanCurrent3([8,1,2,2,3])) // output: [4,0,1,1,3]

/*
Understand:
    return an array of values that represent how many numbers in our array are smaller than current number.
Devise a plan:
    sort array and return the index value
Code it out: Hashmap Solution
*/

// hashmap solution
// time complexity: O(n)
// space complexity: O(n)
const smallerNumbersThanCurrent4 = function(nums) {
    //create a new hash map
    let map = new Map();

    // declare new array in ascending order
    console.log("nums:", nums)
    let sorted = [...nums].sort((a, b) => a - b);
    console.log("sorted:", sorted)

    //iterate through sorted array and set the number and its index to a Map(skip any that already exists in map)
    sorted.forEach((number, idx) => map.has(number) ? null : map.set(number, idx));

    //iterate through original input and create a new array with the current number's value from the map and return
    return nums.map(x => map.get(x));
};

console.log("smallerNumbersThanCurrent4:", smallerNumbersThanCurrent4([8,1,2,2,3])) // output: [4,0,1,1,3]