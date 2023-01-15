/** 
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing
 * order, and two integers m and n, representing the number of elements in
 * nums1 and nums2 respectively.
 * 
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * 
 * The final sorted array should not be returned by the function, but instead
 * be stored inside the array nums1. 
 * 
 * To accommodate this, nums1 has a length of m + n, 
 * where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. 
 * nums2 has a length of n.
 * 
 * 
 * Example 1:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming
 * from nums1.
 * 
 * 
 * Example 2:
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * Explanation: The arrays we are merging are [1] and [].
 * The result of the merge is [1].
 * 
 * 
 * Example 3:
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 * Explanation: The arrays we are merging are [] and [1].
 * The result of the merge is [1].
 * Note that because m = 0, there are no elements in nums1. The 0 is only there
 * to ensure the merge result can fit in nums1.
 * 
 * 
 * 
 * Constraints:
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -10^9 <= nums1[i], nums2[j] <= 10^9
 * 
 * 
 * 
 * Follow up: Can you come up with an algorithm that runs in O(m + n) time?
 * 
 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Two-pointer

// ex. nums1 = [1,2,3,0,0,0], m = 3, 
//     nums2 = [2,5,6],       n = 3
const merge = function(nums1, m, nums2, n) {
    // get the amount of val's from m === nums1.length  ex. m = 4, nums1 = [2,3,4,5,6,7]... nums1 = [2,3,4,5]
    // get the amount of val's from n === nums2.length

    let p1 = m - 1;  // nums1.length = m + n ....becomes nums1 has a length of m + n,
    let p2 = n - 1; // nums2.length = n ....nums2 has a length of n
    let combined = m + n - 1; // nums1.length = m + n

    // iterate comparing start & end 
    while (p1 >= 0 && p2 >= 0) { 
        if (nums1[p1] > nums2[p2]) {
            nums1[combined] = nums1[p1]; 
            p1--;
        } else {
            nums1[combined] = nums2[p2];
            p2--;
        }
        combined--;
    }
    while (p2 >= 0) {
        nums1[combined] = nums2[p2];
        p2--;
        combined--;
    }
};
console.log("merge: ", merge([1,2,3,0,0,0], 3, [2,5,6], 3));



// another 

const merge2 = function(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1, combined = m + n - 1; 
    while (p1 >= 0 || p2 >= 0) {
        if (p2 < 0 || nums1[p1] > nums2[p2]) {
            nums1[combined] = nums1[p1];
            p1--;
        } else {
            nums1[combined] = nums2[p2];
            p2--;
        }
        combined--;
    }
}

console.log("merge2: ", merge2([1,2,3,0,0,0], 3, [2,5,6], 3));

// aother

const merge3 = function(nums1, m, nums2, n) {
    nums1.length = m; 
    nums2.length = n;
    nums1.push(...nums2);
    nums1.sort((a,b) => a - b);
}

// another

const merge4 = function(nums1, m, nums2, n) {
    while(n--) {
        // nums1 has a length of m + n, 
        nums1[m + n] = nums2.pop();
    }
    nums1.sort((a,b) => a - b);
}
console.log("merge4: ", merge4([1,2,3,0,0,0], 3, [2,5,6], 3));


/////// push repo please