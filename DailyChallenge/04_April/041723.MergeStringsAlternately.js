/** 
 *
 * [1768] Merge Strings Alternately
 *
 * https://leetcode.com/problems/merge-strings-alternately/
 *
 * You are given two strings word1 and word2. Merge the strings by adding letters
 * in alternating order, starting with word1. If a string is longer than the other, 
 * append the additional letters onto the end of the merged string.
 * 
 * Return the merged string.
 * 
 * Example 1:
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr"
 * Explanation: The merged string will be merged as so:
 * word1:  a   b   c
 * word2:    p   q   r
 * merged: a p b q c r
 * 
 * Example 2:
 * Input: word1 = "ab", word2 = "pqrs"
 * Output: "apbqrs"
 * Explanation: Notice that as word2 is longer, "rs" is appended to the end.
 * word1:  a   b 
 * word2:    p   q   r   s
 * merged: a p b q   r   s
 * 
 * 
 * Example 3:
 * Input: word1 = "abcd", word2 = "pq"
 * Output: "apbqcd"
 * Explanation: Notice that as word1 is longer, "cd" is appended to the end.
 * word1:  a   b   c   d
 * word2:    p   q
 * merged: a p b q c   d
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [1, 2 * 10^4]. 10 ** 4
 * 1 <= word1.length, word2.length <= 100
 * word1 and word2 consist of lowercase English letters.
 * 
 * 
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */


const mergeAlternately = function(word1, word2) {
    let result = '', mark = 0, p1 = 0, p2 = 0;
    while (p1 < word1.length && p2 < word2.length) {
       if ( mark === 0) {
           result += word1[p1++]; // a, p, b, q, c
           mark = 1;
       } else {
           result += word2[p2++]; // a, p, b, q, c, r
           mark = 0;
       }
    }
    
    while (p1 < word1.length) result += word1[p1++];
    while (p2 < word2.length) result += word2[p2++];
    return result;
};

// another

const mergeAlternately = function(word1, word2) {
    let max = Math.max(word1.length, word2.length), result = '';
    for(let idx = 0; idx < max; idx++) {
        result += word1[idx] || '';
        result += word2[idx] || '';
    }
    return result;
}

// another

const mergeAlternately = function(word1, word2) {
    let arr1 = word1.split(''), arr2 = word2.split('');
    // create string
    let results = "";
    // shift and add to string while words have letters
    while(arr1.length > 0 && arr2.length > 0){
        results += arr1.shift();
        results += arr2.shift();
    }
    // if there are still letters, add to the end of string and return
    if(arr1.length) results += arr1.join('');
    if(arr2.length) results += arr2.join('');
    return results
};