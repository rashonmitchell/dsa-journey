/** 
 *
 * [2306] Naming a Company
 *
 * https://leetcode.com/problems/naming-a-company/
 *
 * You are given an array of strings ideas that represents a list 
 * of names to be used in the process of naming a company. The process of naming a company is as follows:
 * 
 * [1] Choose 2 distinct names from ideas, call them ideaA and ideaB.
 * [2] Swap the first letters of ideaA and ideaB with each other.
 * [3] If both of the new names are not found in the original ideas, then the name ideaA ideaB (the concatenation of ideaA and ideaB, separated by a space) is a valid company name.
 * [4] Otherwise, it is not a valid name.
 * 
 * Return the number of distinct valid names for the company.
 * 
 * 
 * Example 1:
 * Input: ideas = ["coffee","donuts","time","toffee"]
 * Output: 6
 * Explanation: The following selections are valid:
 * - ("coffee", "donuts"): The company name created is "doffee conuts".
 * - ("donuts", "coffee"): The company name created is "conuts doffee".
 * - ("donuts", "time"): The company name created is "tonuts dime".
 * - ("donuts", "toffee"): The company name created is "tonuts doffee".
 * - ("time", "donuts"): The company name created is "dime tonuts".
 * - ("toffee", "donuts"): The company name created is "doffee tonuts".
 * 
 * Therefore, there are a total of 6 distinct company names.
 * 
 * The following are some examples of invalid selections:
 * - ("coffee", "time"): The name "toffee" formed after swapping already exists in the original array.
 * - ("time", "toffee"): Both names are still the same after swapping and exist in the original array.
 * - ("coffee", "toffee"): Both names formed after swapping already exist in the original array.
 * 
 * Example 2:
 * Input: ideas = ["lack","back"]
 * Output: 0
 * Explanation: There are no valid selections. Therefore, 0 is returned.
 * 
 * 
 * 
 * Constraints:
 * 2 <= ideas.length <= 5 * 10^4
 * 1 <= ideas[i].length <= 10
 * ideas[i] consists of lowercase English letters.
 * All the strings in ideas are unique.
 * 
 */


/**
 * @param {string[]} ideas
 * @return {number}
 */

// hashmap w/ Set()
const distinctNames = function (ideas) {
    let map = {};
    for (idea of ideas) {
        let firstChar = idea.slice(0, 1), others = idea.slice(1);
        if (!map[firstChar]) {
            map[firstChar] = new Set(); // or map[firstChar] = new Set([others]); 
        };
        map[firstC].add(others);
    };

    let count = 0, keys = Object.keys(map);
    for (let idx = 0; idx < keys.length; idx++) {
        for (let j = idx + 1; j < keys.length; j++) {
            let sameCount = 0, firstLetterSet = map[keys[idx]], secondLetterSet = map[keys[j]]
            for (let element of firstLetterSet) {
                if (secondLetterSet.has(element)) {
                    sameCount++;
                };
            };
            count += 2 * (firstLetterSet.size - sameCount) * (secondLetterSet.size - sameCount); // 
        };
    };
    return count;
};


const distinctNames2 = function (ideas) {
    const map = new Map();
    
};