/** 
 *
 * [13] Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer/description/
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D
 * and M.
 * 
 * 
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * For example, 2 is written as II in Roman numeral, just two ones added
 * together. 12 is written as XII, which is simply X + II. The number 27 is
 * written as XXVII, which is XX + V + II.
 * 
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making
 * four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * 
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * 
 * Given a roman numeral, convert it to an integer.
 * 
 * Example 1:
 * Input: s = "III"
 * Output: 3
 * Explanation: III = 3.
 * 
 * 
 * Example 2:
 * Input: s = "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 * 
 * 
 * Example 3:
 * Input: s = "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 
 * 
 * 
 * Constraints:
 * 1 <= s.length <= 15
 * s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 * It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 * 
 * 
 */


/**
 * @param {string} s
 * @return {number}
 */

// Hashmap 
const romanToInt = function(s) {
    // store values in map
    const map = {I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000 }

    // connect the value of roman int
    let total = 0;

    // iterate over s
    for(let idx = 0; idx < s.length; idx++) { // s = "LVIII"
        let slow = map[s[idx]], fast = map[s[idx + 1]];
        // if the current char is less than the char.....do something
        if(slow < fast) total -= slow; // idx = 50 
        else total += slow // L = 50 v = 5 1, 1, 1
    }
    // return
    return total;
};

// another 


// Hashmap w/ new Map()
const romanToInt2 = function(s) {
    const map = new Map();
    map.set("I", 1),
    map.set("IV", 4),
    map.set("V", 5),
    map.set("IX", 9),
    map.set("X", 10),
    map.set("XL", 40);
    map.set("L", 50);
    map.set("XC", 90);
    map.set("C", 100), 
    map.set("CD", 400);
    map.set("D", 500);
    map.set("CM", 900); 
    map.set("M", 1000);
    let total = 0;

    for(let idx = 0; idx < s.length; idx++){
        const slow = map.get(s[idx]), fast = map.get(s[idx + 1]);
        if(fast && fast > slow) {
            total += fast - slow;
            idx++;
        }
        else total += slow;
    }

    return total;

}
console.log("romanToInt2: ", romanToInt2("MCMXCIV"))