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
    // create a stack
    let stack = [];

    // create a variable to store the current number
    let num = 0;

    // create a variable to store the current sign
    let sign = '+';

    // iterate through the string
    for (let i = 0; i < s.length; i++) {
        // if the character is a number
        if (s[i] >= '0' && s[i] <= '9') {
            // add the number to the number variable
            num = num * 10 + (+s[i]);
        }

        // if the character is an operator or the end of the string
        if (s[i] < '0' && s[i] !== ' ' || i === s.length - 1) {
            // if the sign is a plus
            if (sign === '+') {
                stack.push(num); // push the number to the stack
            } else if (sign === '-') { // if the sign is a minus
                stack.push(-num); // push the negative number to the stack
            } else if (sign === '*') { // if the sign is a multiply
                // multiply the last number in the stack by the current number and push it to the stack
                stack.push(stack.pop() * num); // ex: 3 * 2 = 6 -> [6] -> 6 * 2 = 12 -> [12]
            } else if (sign === '/') { // if the sign is a divide
                // divide the last number in the stack by the current number and push it to the stack
                stack.push(parseInt(stack.pop() / num)); // ex: 3 / 2 = 1 -> [1] -> 1 / 2 = 0 -> [0]
            }
            // set the sign to the current sign
            sign = s[i];

            // reset the number variable
            num = 0;
        }
    }

    // return the sum of the stack
    return stack.reduce((a, b) => a + b);
}

// No stack solution
const calculate = function(s) {
    if (s === null || s.length === 0) return 0;
    let sum = 0, result = 0, current = 0;

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c >= '0' && c <= '9') {
            current = current * 10 + (+c);
        } else if (c === '+' || c === '-') {
            sum += result;
            result = c === '+' ? current : -current;
            current = 0;
        } else if (c === '*' || c === '/') {
            result = c === '*' ? result * current : ~~(result / current);
            current = 0;
        }
    }
    sum += result;
    return sum;

}

// No stack solution
const calculate = function(s) {
    // create a variable to store the current number 
    let num = 0, result = 0, current = 0;
    let sign = '+'; // the sign before the current number 
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            num = num * 10 + parseInt(s[i]);
        }

        // if the character is an operator or the end of the string
        if (s[i] < '0' && s[i] !== ' ' || i === s.length - 1) {
            if (sign === '+') {
                result += current;
                current = num;
            } else if (sign === '-') {
                result += current;
                current = -num;
            } else if (sign === '*') {
                current = current * num;
            } else if (sign === '/') {
                current = +(current / num);
            }
            sign = s[i];
            num = 0;
        }
    }
    result += current;
    return result;
}

const calculate = function(s) {
    const calculator = s.match(/(\d+)|[+-/*]/g);
	const addition = [+calculator.shift()]; // 
	const operator = {
		'+': (num) => addition.push(num),
		'-': (num) => addition.push(-num),
		'*': (num) => addition.push(addition.pop() * num),
		'/': (num) => addition.push(addition.pop() / num | 0),
	};

	calculator.forEach((str, index) => operator[str]?.(+calculator[index + 1]));
	return addition.reduce((result, num) => result + num);
};