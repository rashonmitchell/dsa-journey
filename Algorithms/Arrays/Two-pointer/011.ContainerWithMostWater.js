/**
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * You are given an integer array height of length n. There are n vertical
 * lines drawn such that the two endpoints of the i^th line are (i, 0) and (i,
 * height[i]).
 * 
 * Find two lines that together with the x-axis form a container, such that the
 * container contains the most water.
 * 
 * Return the maximum amount of water a container can store.
 * 
 * Notice that you may not slant the container.
 * 
 * 
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array
 * [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the
 * container can contain is 49.
 * 
 * 
 * Example 2:
 * Input: height = [1,1]
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 * 
 * 
 */


/**
 * @param {number[]} height
 * @return {number}
 */

// Two-pointer approach:
    // 1. create two pointers, start and end
    // 2. create a variable to store the max area.
    // 3. While the two pointers do not overlap:
    // 4. cal the area of the container 
    // 5. if-cond the area is greater than max area....do-something
    // 6. if-cond the height of the two-pointers.....?
    // 7. return the max area
const maxArea = function(height) { // [1,8,6,2,5,4,8,3,7]
    let start = 0, end = height.length - 1, result = 0;
    while(start < end) {
        // base = (end - start) * height
        const temp = (end - start) * Math.min(height[start], height[end]); 
        if (temp > result) result = temp; 
        if (height[start] < height[end]) start++;
        else end--;
    };
    return result;
};
console.log("maxArea: ", maxArea([1,8,6,2,5,4,8,3,7]));

// another

// Array approach:
const maxArea2 = function(height) {

};

// another

// Greedy approach:
const maxArea3 = function(height) {};




// BRUTE FORCE APPROACH
/* 
    Understand the Problem:
        Find the indices whose values create the largest area. Output the largest area.
    Devise a Plan:
        Brute Force
        Use nested loops to find area between two indexes and its values. 
        use a holder variable to store current highest number. at end of loops last number remains
        return highest number
    Code: Brute Force
                                                         i
                                        Input: height = [1,8,6,2,5,4,8,3,7]
                                                             j
Output: 49
*/ 
const maxArea4 = function(height) {
    //create max area holder
    let maxArea = 0;
    //use nested loops to work with values
    for(let i = 0; i < height.length; i++){
        for(let j = i + 1; j < height.length; j++){
            let area1 = (j - i) * height[i];
            let area2 = (j - 1) * height[j];
            if(height[i] <= height[j] && area1 > maxArea){
                maxArea = area1; //maxArea = 1
            }
            else if(height[i] > height[j] && area2 > maxArea){
                maxArea = area2
            }
        }
    }
    //return max Area
    return maxArea;
};
console.log("maxArea4:", maxArea4([1,1]))

