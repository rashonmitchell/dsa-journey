/**
 *
 * [2283] Equal Digit Count and Digit Value
 *
 * https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/
 *
 * You are given a 0-indexed string num of length n consisting of digits.
 * 
 * Return true if for every index i in the range 0 <= i < n, 
 * the digit i occurs num[i] times in num, otherwise return false.
 * 
 * 
 * Example 1:
 * Input: num = "1210"
 * Output: true
 * Explanation:
 * num[0] = '1'. The digit 0 occurs once in num.
 * num[1] = '2'. The digit 1 occurs twice in num.
 * num[2] = '1'. The digit 2 occurs once in num.
 * num[3] = '0'. The digit 3 occurs zero times in num.
 * The condition holds true for every index in "1210", so return true.
 * 
 * 
 * Example 2: i = 012   0 == 2, 1 == 1, but should be 1 == 3, and last 0 == 2
 * Input: num =  "030"
 * Output: false
 * Explanation:
 * num[0] = '0'. The digit 0 should occur zero times, but actually occurs twice in num.
 * num[1] = '3'. The digit 1 should occur three times, but actually occurs zero times in num.
 * num[2] = '0'. The digit 2 occurs zero times in num.
 * The indices 0 and 1 both violate the condition, so return false.
 * 
 * 
 * Constraints:
 * n == num.length
 * 1 <= n <= 10
 * num consists of digits.
 *
 * 
 * 
 */

/**
 * @param {string} nums
 * @return {boolean}
 */

// Hashmap solution

// thinking:
// 1. create hashmap to get the digit count of num
// 2. create counter variable to count the length at the nums[i]
// 3. iterate over nums to add freq to map at that idx     ex. '1,2,2,3,3,3,3,3' map = 0:1, 1:2, 3:5 12233333
// 4. then get the digit value of num
// 5. iterate over digit value of num 
// 6. if-cond digit i occurs num[i] times in num === nums[idx] continue keep going.....
//    else if digit i isn't in map && nums[idx] === 0 continue keep going.....
//    otherwise, stop return false
// 7. return true

const digitCount = function(num) {
    // base case
    if (!num) return false;
    let map = {};

    // iterate over num
    for(let idx = 0; idx < num.length; idx++) { // '1210'    
        //  add value to map
        if (map[num[idx]]) map[num[idx]]++; // map ={ 0: 1, 1: 2, 2: 1, }
        else map[num[idx]] = 1;
    };

     // iterate over num
    for (let idx = 0; idx < num.length; idx++) {
        // if-cond digit i occurs num[i] times in num === nums[idx] continue keep going.....
        // else if digit i isn't in map && nums[idx] === 0 continue keep going.....
        // otherwise, stop return false
        if (map[idx] === Number(num[idx])) continue;
        else if (!map[idx] && Number(num[idx]) === 0) continue;
        return false;
    }
    // return true
    return true;
}
console.log("digitCount: ", digitCount("030"));


// another 


// Hashmap  w/ new Map()
const digitCount2 = function(num) {
    if (!num) return false;
    const map = new Map(); // || map = {}
    for (let numb of num) {  
        map.set(numb, (map.get(numb) || 0) + 1); // map ={ 0: 1, 1: 2, 2: 1, }
    }
    for(let [key, value] of map) {
        console.log("key", typeof [key, value])
        if(num[key] !== value) return false;
        console.log("+num[key]", typeof +num[key], typeof num[key])
        
    }
    return true;
};
console.log("digitCount2: ", digitCount2("1210"));

// num?num[key].filter(Boolean)