/** 
 * 
 * [227] Basic Calculator II
 *
 * https://leetcode.com/problems/basic-calculator-ii/description/
 *
 * Given a string s which represents an expression, evaluate this expression
 * and return its value. 
 * 
 * The integer division should truncate toward zero.
 * 
 * You may assume that the given expression is always valid. All intermediate
 * results will be in the range of [-2^31, 2^31 - 1].
 * 
 * Note: You are not allowed to use any built-in function which evaluates
 * strings as mathematical expressions, such as eval().
 * 
 * 
 * Example 1:
 * Input: s = "3+2*2"
 * Output: 7
 * Example 2:
 * Input: s = " 3/2 "
 * Output: 1
 * Example 3:
 * Input: s = " 3+5 / 2 "
 * Output: 5
 * 
 * 
 * Constraints:
 * 1 <= s.length <= 3 * 10^5
 * s consists of integers and operators ('+', '-', '*', '/') separated by some
 * number of spaces.
 * s represents a valid expression.
 * All the integers in the expression are non-negative integers in the range
 * [0, 2^31 - 1].
 * The answer is guaranteed to fit in a 32-bit integer.
 * 
 * 
 */


/**
 * @param {string} s
 * @return {number}
 */

// String solution
const calculate = function(s) {
    let stack = [];
    let num = 0;
    let sign = '+';
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + parseInt(s[i]);
        }
        if (s[i] < '0' && s[i] !== ' ' || i === s.length - 1) {
        if (sign === '+') {
            stack.push(num);
        } else if (sign === '-') {
            stack.push(-num);
        } else if (sign === '*') {
            stack.push(stack.pop() * num);
        } else if (sign === '/') {
            stack.push(parseInt(stack.pop() / num));
        }
        sign = s[i];
        num = 0;
        }
    }
    return stack.reduce((a, b) => a + b);
};

// Stack solution
const calculate = function(s) {
    let stack = [];
    let num = 0;
    let sign = '+';
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + parseInt(s[i]);
        }
        if (s[i] < '0' && s[i] !== ' ' || i === s.length - 1) {
        if (sign === '+') {
            stack.push(num);
        } else if (sign === '-') {
            stack.push(-num);
        } else if (sign === '*') {
            stack.push(stack.pop() * num);
        } else if (sign === '/') {
            stack.push(parseInt(stack.pop() / num));
        }
        sign = s[i];
        num = 0;
        }
    }
    return stack.reduce((a, b) => a + b);
}

// Map solution
const calculate = function(s) {
     // create storage variable
     let stack = [], map = {
        "+" : (a, b) => a + b,
        "-" : (a, b) => a - b,
        "*" : (a, b) => a * b,
        "/" : (a, b) => Math.trunc(a / b),
    }
    // iterate through string
    for (let i = 0; i < s.length; i++) {
        // if character is a number
        if (s[i] >= '0' && s[i] <= '9') {
            // create a number variable
            let num = 0;
            // while the character is a number
            while (s[i] >= '0' && s[i] <= '9') {
                // add the number to the number variable
                num = num * 10 + parseInt(s[i]);
                // increment i
                i++;
            }
            // decrement i
            i--;
            // push the number to the stack
            stack.push(num);
        } else if (s[i] !== ' ') {
            // if the character is an operator
            // get the last two numbers from the stack
            let num2 = stack.pop(), num1 = stack.pop();
            // push the result of the operation to the stack
            stack.push(map[s[i]](num1, num2));
        }
    }
    // return the result in the stack which is the last number
    return stack[0];
}