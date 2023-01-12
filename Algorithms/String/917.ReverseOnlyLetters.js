/** 
 *
 * [917] Reverse Only Letters
 *
 * https://leetcode.com/problems/reverse-only-letters/description/
 
 *
 * Given a string s, reverse the string according to the following rules:
 * 
 * 
 * All the characters that are not English letters remain in the same position.
 * All the English letters (lowercase or uppercase) should be reversed.
 * 
 * 
 * Return s after reversing it.
 * 
 * 
 * Example 1:
 * Input: s = "ab-cd"
 * Output: "dc-ba"
 * 
 * Example 2:
 * Input: s = "a-bC-dEf-ghIj"
 * Output: "j-Ih-gfE-dCba"
 * 
 * Example 3:
 * Input: s = "Test1ng-Leet=code-Q!"
 * Output: "Qedo1ct-eeLg=ntse-T!"
 * 
 * 
 * Constraints:
 * 1 <= s.length <= 100
 * s consists of characters with ASCII values in the range [33, 122].
 * s does not contain '\"' or '\\'.
 * 
 * 
 */

/**
 * @param {string} s
 * @return {string}
 */

// 1. split the string into an array of characters
// 2. use two pointers to reverse the letters
// 3. join the array of characters into a string

// Regex
// https://cs.lmu.edu/~ray/notes/regex/

// Two-pointer solution
const reverseOnlyLetters = function(s) {
    let array = s.split("");
    let left = 0, right = array.length -1;
    while(left < right) {
        if(!array[left].match(/[a-zA-Z]/)) {
            left++;
        } else if(!array[right].match(/[a-zA-Z]/)) {
            right--;
        } else {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return array.join("");
};

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
console.log("reverseOnlyLetters: ", reverseOnlyLetters("Test1ng-Leet=code-Q!"))

// another

// helper function
function swap(result, start, end) {
    let temp = result[start];
    result[start] = result[end];
    result[end] = temp;
}

const reverseOnlyLetters2 = function(s) {
    let array = s.split("");
    let left = 0, right = array.length -1;
    while(left < right) {
        if(!array[left].match(/[a-zA-Z]/)) {
            left++;
        } else if(!array[right].match(/[a-zA-Z]/)) {
            right--;
        } else {
            swap(array, left++, right--);
        }
    };
    return array.join("");
}

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
console.log("reverseOnlyLetters2: ", reverseOnlyLetters2("a-bC-dEf-ghIj"))

//  another

// s consists of characters with ASCII values in the range [33, 122].
// [a-zA-Z]
const reverseOnlyLetters4 = function(s) {
    const charCheck = char => (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
    let results = s.split(""), left = 0, right = results.length - 1;

    while(left < right) {
        if(!charCheck(results[left])) left++;
        else if(!charCheck(results[right])) right--;
        else {
            [results[left], results[right]] = [results[right], results[left]];
            left++;
            right--;
        }
    }
    return results.join("");
}

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
console.log("reverseOnlyLetters4: ", reverseOnlyLetters4("a-bC-dEf-ghIj"));


// another

// RegExp.prototype.test() -
// The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
const reverseOnlyLetters3 = function(s) {
    let array = s.split("").filter(ele => /[a-zA-Z]/i.test(ele)); // true
    return s.split(/[a-zA-Z]/i).reduce((acc, val) => acc + val + (array.pop() || ''), '');
}
// Input: s = "a-bC-dEf-ghIj"
// gpv:  [
//     '', '-', '', '-', '',
//     '', '-', '', '',  '',
//     ''
// ]
// foo:  j
// foo:  j-I
// foo:  j-Ih
// foo:  j-Ih-g
// foo:  j-Ih-gfE-dC
// foo:  j-Ih-gfE-dCb
// foo:  j-Ih-gfE-dCba
// foo:  j-Ih-gfE-dCba
// reverseOnlyLetters3:  j-Ih-gfE-dCba

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
console.log("reverseOnlyLetters3: ", reverseOnlyLetters3("a-bC-dEf-ghIj"));