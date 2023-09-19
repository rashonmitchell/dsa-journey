/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time and O(1) space 
// floyd's cycle detection algorithm solution
// const findDuplicate = function(nums) {
//     const hash = {};
//     for (let idx = 0; idx < nums.length; idx++) {
//         if (hash.hasOwnProperty(nums[idx])) {
//             return nums[idx];
//         } else {
//             hash[nums[idx]] = 1;
//         }
//     }
// };

// another

// two pointer solution
const findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    // Phase 1: Find the intersection point of the two pointers
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Phase 2: Find the entrance to the cycle
    let ptr1 = nums[0];
    let ptr2 = slow;
    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1;
};
