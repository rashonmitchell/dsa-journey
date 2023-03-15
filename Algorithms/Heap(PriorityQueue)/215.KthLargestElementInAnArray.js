/**
 *
 * [215] Kth Largest Element in an Array
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * Given an integer array nums and an integer k, return the k^th largest
 * element in the array.
 * 
 * Note that it is the k^th largest element in the sorted order, not the k^th
 * distinct element.
 * 
 * You must solve it in O(n) time complexity.
 * 
 * 
 * Example 1:
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 * 
 * Example 2:
 * Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 * Output: 4
 * 
 * 
 * Constraints:
 * 1 <= k <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Quick Select solution
// time complexity: O(n)
// space complexity: O(1)
const findKthLargest = function(nums, k) {
    const n = nums.length;
    return quickSelect(nums, 0, n - 1, n - k);
};

function quickSelect(arr, left, right, k) {
    if (left === right) return arr[left];
    const pivotIndex = partition(arr, left, right);
    if (k === pivotIndex) return arr[k];
    else if (k < pivotIndex) return quickSelect(arr, left, pivotIndex - 1, k);
    else return quickSelect(arr, pivotIndex + 1, right, k);
};

function partition(arr, left, right) {
    const pivot = arr[right];
    let idx = left;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[idx], arr[j]] = [arr[j], arr[idx]];
            // or
            // swap(arr, idx, j);
            idx++;
        }
    }
    [arr[idx], arr[right]] = [arr[right], arr[idx]];
    // or
    // swap(arr, idx, right);
    return idx;
}

// function swap(arr, idx, j) {
//     const temp = arr[idx];
//     arr[idx] = arr[j];
//     arr[j] = temp;
// }

// another solution

// Quick Sort solution
// time complexity: O(nlogn)
// space complexity: O(1)
const findKthLargest = function(nums, k) {
    const n = nums.length;
    quickSort(nums, 0, n - 1);
    return nums[n - k];
};

function quickSort(arr, left, right) {
    if (left >= right) return;
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
};

function partition(arr, left, right) {
    const pivot = arr[right];
    let idx = left;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[idx], arr[j]] = [arr[j], arr[idx]];
            idx++;
        }
    }
    [arr[idx], arr[right]] = [arr[right], arr[idx]];
    return idx;
}

// another solution

// Sort solution
// time complexity: O(nlogn)
// space complexity: O(1)
const findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};

// another solution

// Heap (Priority Queue) solution
// time complexity: O(nlogk)
// space complexity: O(k)
// const findKthLargest = function(nums, k) {};