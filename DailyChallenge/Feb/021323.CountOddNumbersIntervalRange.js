/** 
 * 
 * [1523] Count Odd Numbers in an Interval Range
 *
 * https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/description/
 *
 * Given two non-negative integers low and high. Return the count of odd
 * numbers between low and high (inclusive).
 * 
 * 
 * Example 1:
 * Input: low = 3, high = 7
 * Output: 3
 * Explanation: The odd numbers between 3 and 7 are [3,5,7].
 * 
 * Example 2:
 * Input: low = 8, high = 10
 * Output: 1
 * Explanation: The odd numbers between 8 and 10 are [9].
 * 
 * 
 * Constraints:
 * 0 <= low <= high <= 10^9
 * 
 */


/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */


const countOdds = function(low, high) {
    let result = 0;
    const isOdd = (num) => num % 2 !== 0;
    if(isOdd(low)) result++;

    const num = Math.floor((high - low) / 2);
    result += num;

    // if high is odd and not equal to low + 2 * num bc that would mean there are an even number of odds between low and high
    if(high > low + 2 * num && isOdd(high)) result++; 
    return result;
};