/** 
 *
 * [1675] Minimize Deviation in Array
 *
 * https://leetcode.com/problems/minimize-deviation-in-array/description/
 *
 * You are given an array nums of n positive integers.
 * 
 * You can perform two types of operations on any element of the array any
 * number of times:
 * 
 * If the element is even, divide it by 2.
 * 
 * For example, if the array is [1,2,3,4], then you can do this operation on
 * the last element, and the array will be [1,2,3,2].
 * 
 * If the element is odd, multiply it by 2.
 * 
 * For example, if the array is [1,2,3,4], then you can do this operation on
 * the first element, and the array will be [2,2,3,4].
 * 
 * The deviation of the array is the maximum difference between any two
 * elements in the array.
 * 
 * Return the minimum deviation the array can have after performing some number
 * of operations.
 * 
 * 
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: 1
 * Explanation: You can transform the array to [1,2,3,2], then to [2,2,3,2],
 * then the deviation will be 3 - 2 = 1.
 * 
 * 
 * Example 2:
 * Input: nums = [4,1,5,20,3]
 * Output: 3
 * Explanation: You can transform the array after two operations to
 * [4,2,5,5,3], then the deviation will be 5 - 2 = 3.
 * 
 * 
 * Example 3:
 * Input: nums = [2,10,8]
 * Output: 3
 * 
 * 
 * Constraints:
 * n == nums.length
 * 2 <= n <= 5 * 10^4
 * 1 <= nums[i] <= 10^9
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Greedy solution
const minimumDeviation = function(nums) {
    nums.forEach((num, idx) => num % 2 && ( nums[idx] *= 2 ));
    nums = [...new Set(nums)].sort((n, m) => m - n );
    let len = nums.length - 1, dev = nums[0] - nums[len], idx;
    while (nums[0] % 2 == 0) {
        if ((nums[0] /= 2) < nums[1])
            idx = nums.findIndex(n => n < nums[0]),
            nums.splice( idx < 0 ? len : idx - 1, 0, nums.shift());
        dev = Math.min(dev, nums[0] - nums[len]);
    };
    return dev;
};

// another

// Max PriorityQueue && Max Heap solution
const minimumDeviation = function(nums) {
    // https://github.com/datastructures-js/priority-queue
    const mpq = new MaxPriorityQueue();
    
    // Convert all the numbers to even and enqueue them
    nums.forEach((num) => {
      if (num % 2 !== 0) {
        const value = num * 2;
        
        mpq.enqueue(value, value);
      } else {
        mpq.enqueue(num, num);
      }
    });
  
    // Get difference between max and min values
    let deviation = mpq.front().element - mpq.back().element;
    
    // Loop until we have any max even number left in the queue
    while(mpq.front().element % 2 === 0) {
      // Get max even value
      const { element } = mpq.dequeue();
      
      // Convert it to odd number and enqueue again
      mpq.enqueue(element/2, element/2);
      
      // Get minimum between previous deviation and after above conversion
      deviation = Math.min(deviation, mpq.front().element - mpq.back().element);
    }
    return deviation;
  };