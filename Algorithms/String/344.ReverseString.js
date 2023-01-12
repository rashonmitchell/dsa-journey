/**
 * https://leetcode.com/problemset/all/?page=1&topicSlugs=two-pointers
 *
 * [344] Reverse String
 *
 * https://leetcode.com/problems/reverse-string/description/
 * Testcase Example:  '["h","e","l","l","o"]'
 *
 * Write a function that reverses a string. The input string is given as an
 * array of characters s.
 * 
 * You must do this by modifying the input array in-place with O(1) extra
 * memory.
 * 
 * 
 * Example 1:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * 
 * Example 2:
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 * 
 * 
 * Constraints:
 * 1 <= s.length <= 10^5
 * s[i] is a printable ascii character.
 * 
 * 
 */


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// Two-pointer
const reverseString = function(s) {
    // let left = 0, right = s.length -1;
    // while(left < right){
    //     [s[left], s[right]] = [s[right], s[left]]
    //     left++; 
    //     right--;
    // }
    return s.reverse();
};

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
console.log("reverseString: ", reverseString(["h","e","l","l","o"]));

// another

const reverseString = function(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        const tempStart = str[left];
        const tempEnd = str[right];
        str[left] = tempEnd;
        str[right] = tempStart;
        left++;
        right--;
    }
};
