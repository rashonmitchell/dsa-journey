/** 
 *
 * [6] Zigzag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 * 
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 * 
 * string convert(string s, int numRows);
 * 
 * Example 1:
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * 
 * 
 * Example 2:
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 * 
 * Example 3:
 * Input: s = "A", numRows = 1
 * Output: "A"
 * 
 * 
 * 
 * Constraints:
 * 1 <= s.length <= 1000
 * s consists of English letters (lower-case and upper-case), ',' and '.'.
 * 1 <= numRows <= 1000
 * 
 * 
 */


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// Solution 1: Brute Force
// Time Complexity: O(n) - n is the length of the string
// Space Complexity: O(n)
const convert = function(s, numRows) {
    if (numRows === 1) return s; // edge case
    
    const result = [];
    for (let i = 0; i < numRows; i++) {
        result.push([]);
    }
    
    let row = 0;
    let goingDown = false;
    for (let i = 0; i < s.length; i++) {
        result[row].push(s[i]);
        if (row === 0 || row === numRows - 1) {
            goingDown = !goingDown;
        }
        row += goingDown ? 1 : -1;
    }
    
    let finalResult = '';
    for (let i = 0; i < numRows; i++) {
        finalResult += result[i].join('');
    }
    return finalResult;
};

// Solution 2: String
const convert = function(s, numRows) {
    if (numRows === 1) return s; // edge case
    
    let result = '';
    const cycleLen = 2 * numRows - 2;
    for (let idx = 0; idx < numRows; idx++) {
        for (let j = 0; j + idx < s.length; j += cycleLen) {
            result += s[j + idx];
            if (idx !== 0 && idx !== numRows - 1 && j + cycleLen - idx < s.length) {
                result += s[j + cycleLen - idx];
            }
        }
    }
    return result;
};
