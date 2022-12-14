// A subarray is a contiguous non-empty sequence of elements within an array.

// Given an integer array nums, find the subarray which has the largest sum and return its sum.

/**
 * @param {number[]} nums
* @return {number}
*/

// kadines's algorithm = https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
const maxSubArray = function(nums) {
    //  create starting sum value and the highest possible neg value
   let sum = 0, result = Negative.MAX_VALUE;

   // iterate over nums 
   for(let idx = 0; idx < nums.length; idx++) {
    // store current sum value from idx + current sum
    let currentSum = currentSum + num[idx];
    sum = Math.max(currentSum, sum)

    if()


   }

   
};



/*
    Need a max
    Traverse the array
    Calculate the sum
    [4, -1, 2, 1]
    sum = 0
    res = infinity (start this var to a high number bc we don't know what it will be yet)
    for i in range( loop len(nums))
        if nums[i] > sum + nums[i]
            sum = nums[i]
        else 
            sum += nums[i]
        res = max(sum.res)

    sum = 4
    res = 6
    [  4]
*/

/* 
interviewee was wondering how to find the max. My thought process is to use an if condition to check if new subarray after each iteration is greater than previous max subarray

need a var (in the session they used var res to hold current maxSubarray) . Bc we don't know what the value will be, we can start the base res number to a really high number such as infinity.


look up Kadane's problem
*/