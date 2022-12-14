/** 
 *
 * Deck of Card Pairs
 *
 * Given an array of cards return true if add the cards has at least pair. Return false if a card
 * doesn't have a pair. 
 * 
 * 
 * Example 1:
 * Input: array = [10, 10, 3, 3, 3, 1]
 * Output: false
 * Explanation: 1 doesn't have a pair value.
 * 
 * 
 * Example 2:
 * Input: root = [4, 2, 4, 4, 4, 5, 2, 5]
 * Output: true
 * Explanation: All values have at least one addition card. aka each value has at least one pair
 * 
 * 
 * Constraints:
 * 2 <= 10
 * 4 of kinds, 3 of kind, or 2 of a kind
 * No neg values
 * 
 * 
 */


/**
 * @param {array}
 * @return {number}
 */

/*
    2: 1,
    3: 3,
    4  4,
    5
    6
    ...
    10
*/
// const deckOfCards = function(num) {
//     // create variable map for key/value pairs
//     let map = new Map(num)
//     // iterate over values
//         // add if already in map.
//         // if not in map, return false
//     for(let i = 0; i < num.length; i++){
//         if(!map[num[i]]) return false;
//     } // // 
//     // return created variable
    return true;
// };

// sliding window approach: [10, 10, 3, 3, 3, 1]
/*
    2: 1,
    3: 3,
    4: 4,
    5: 2,
    6: 3
    ...
    10
*/
const deckOfCards = function(num) {
    let hashmap = {};
    for(let pair of num) {
        if(hashmap[pair]) { // if hashmap has our values
            hashmap[pair] += 1; // add 1 to our values
        } else {
            hashmap[pair] = 1; // set values to 1
        }

        //  or
        // if(hashmap[pair]) {
        //     hashmap[pair] += 1 || 1; // add 1 to value or set value to 1
        // }        
    }

    // iterate over hashmap
    for(let pair in hashmap) {
        // checking for odd value
        console.log(hash[pair]); // 1
        if(hashmap[pair] % 2 !== 0) return false;
    }
    return true;
}

let array = [10, 10, 3, 3, 3, 1];
console.log(deckOfCards(array));
// console.log(deckOfCards([4, 2, 4, 4, 4, 5, 2, 5]));

// test("deckOfCards", () => {
//     expect(deckOfCards([10, 10, 3, 3, 3, 1])).toBe(false),
//     expect(deckOfCards([4, 2, 4, 4, 4, 5, 2, 5])).toBe(true)
// });

// sliding window
// 1. create a map
// 2. iterate of our values
// 3. if value is inside of our map incement by 1
// 4. else add the value into our map with the value of 1
// 5. iterate over our map
// 6. if value is odd return false
// 7. return true
const cards = function(numb) {
    let map = new Map();
    for(let pair of numb) {
        if(map.has(pair)) {
            map.set(pair, map.get(pair) + 1); // add + 1 to value seen
        } else {
            map.set(pair, 1); // set value into map
        }
    }
    for(let [key, value] in map) {
        if(value % 2 !== 0) return false;
    }
    return true;
}

// Understand question:
// return true if value shows up more than once in input array 
// return false if any value only shows up once
// highest value is 10 lowest value is 2

// Devise a plan:
// create map for key/value pairs
// iterate through 


https://leetcode.com/problems/sliding-window-maximum/


var maxSlidingWindow = function(nums, k) {
    
};