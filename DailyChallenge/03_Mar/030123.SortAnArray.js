/*
 *
 *
 * [912] Sort an Array
 *
 * https://leetcode.com/problems/sort-an-array/description/
 * 
 * Given an array of integers nums, sort the array in ascending order and
 * return it.
 * 
 * You must solve the problem without using any built-in functions in
 * O(nlog(n)) time complexity and with the smallest space complexity
 * possible.
 * 
 * 
 * Example 1:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Explanation: After sorting the array, the positions of some numbers are not
 * changed (for example, 2 and 3), while the positions of other numbers are
 * changed (for example, 1 and 5).
 * 
 * 
 * Example 2:
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 * Explanation: Note that the values of nums are not necessairly unique.
 * 
 * 
 * 
 * Constraints:
 * 1 <= nums.length <= 5 * 10^4
 * -5 * 10^4 <= nums[i] <= 5 * 10^4
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */



// https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-1.php

const sortArray = function(nums) {
    const quickSortHelper = (nums, start, end) => {
        if (start >= end) return nums;
        const pivot = nums[start];

        let low = start;
        for (let idx = start + 1; idx <= end; idx++)
            (nums[idx] <= pivot) && (low++, [nums[low], nums[idx]] = [nums[idx], nums[low]]);
            
        [nums[low], nums[start]] = [nums[start], nums[low]];

        quickSortHelper(nums, start, low - 1);
        quickSortHelper(nums, low + 1, end);
        return nums;
    };
    return quickSortHelper(nums, 0, nums.length-1);
};
console.log(sortArray([1, 6, 1, 5, 3, 2, 1, 4]));


// const sortArray = function(nums) {
//     const quickSortHelper = (nums, start, end) => {
//         if (start >= end) return nums;
//         const pivot = nums[start];
//         let low = start;

    // or for-loop w/o the curly brackets
//          for (let idx = start + 1; idx <= end; idx++) {
//              (nums[idx] <= pivot) && (low++, [nums[low], nums[idx]] = [nums[idx], nums[low]]);

        // or the if-statement below not shorthand
//              if(nums[idx] < pivot ) {
//                  (low++, [nums[low], nums[idx]] = [nums[idx], nums[low]]);
                // or
//                  low++
//                  [nums[low++], nums[idx]] = [nums[idx], nums[low]];
//              }
//          }
//          [nums[low], nums[start]] = [nums[start], nums[low]];

//          quickSortHelper(nums, start, low - 1);
//          quickSortHelper(nums, low + 1, end);
//          return nums;
//     };
//     return quickSortHelper(nums, 0, nums.length-1);
// }

   


// Quick sort:
// Sort element by quick sort algorithm
// choose pivot is last element
function quickSort(arr, startIndex, endIndex) {
    // return immediately when endIndex is less than startIndex
    if(endIndex <= startIndex) return;
    
    // sort the array into 2 piece, first piece contains values less than pivot and second piece contains values larger than pivot
    // return pivot index
    let pivotIndex = partition(arr, startIndex, endIndex);
    
    // continue sort 2 pieces above
    quickSort(arr, startIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, endIndex);
  }
  
  // Choose pivot is last element
  // Divide the array into 2 piece, first piece contains values less than pivot and second piece contains values larger than pivot
  // return pivot index final
  function partition(arr, startIndex, endIndex) {
    // choose pivot is last element
    let pivot = arr[endIndex];
    
    // Index of element need swap
    let indexPendingSwap = 0;
    
    // loop through the array, swap the value with indexPendingSwap if the value is less than indexPendingSwap and increase indexPendingSwap by 1
    for(let j = 0; j <= endIndex; j++) {
      ( arr[j] <= pivot ) && ( [arr[indexPendingSwap], arr[j]] = [arr[j], arr[indexPendingSwap]], indexPendingSwap++ );
    }
    
    // Because we choose last element is pivot so the value before indexPendingSwap is pivot index
    return indexPendingSwap - 1;
  }
  
  // testing
  let arr = [3, 0, 2, 5, -1, 4, 1];
  
  console.log(arr);
  
  console.time('#1');
  for(let i = 0; i <= 100000; i++) {
    quickSort(arr, 0, arr.length - 1);
  }
  console.timeEnd('#1');
  





/*
Understand the problem:
    return array input in sorted order in array format
Devise a Plan:
    create two pointers, start and end
    compare values, if one is larger, then switch
    keep pointers moving until array is sorted
    likely to use while loop
Code:
*/
const sortArray2 = function(nums) {
    //create start and end pointers
    let start = 0, end = nums.length - 1;
    //while loops
    while(start < end){
        if(nums[start] > nums[end]){
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
        }
    }
    //return nums
};

console.log("sortArray2:", sortArray2([5,2,3,1])) 
