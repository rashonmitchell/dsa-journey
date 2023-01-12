/** 
* @param {Array.[]} 
* @param {Access: worst - 0(1)} 
* @param {Insert head: worst - 0(n)}
* @param {Insert tail: worst - 0(1)}
* @param {Search: worst - 0(n)}
* @param {Delete: worst - 0(n)}
* /

/** 
 * Push() -
 *  method adds a new element to the end of an array and returns the new array length.
 * 
 * Complexity:
 *  push() operation will be O(1) since we only have to update the length of the array and add the new element.
*/
const adding = [1, 2, 3, 4];
console.log("pushing", adding.push(5), adding) // [1, 2, 3, 4, 5];
adding.push(7) // [1, 2, 3, 4, 5, 7];
adding.push(9) // [1, 2, 3, 4, 5, 7, 9];


/**
 * Pop() -
 *  method removes the last element from an array and returns that element.
 *  
 * Complexity: 
 *  pop() operation will be O(1) since we only have to update the length of the array and remove the end index.
 */

const removing = [1, 2, 3, 4, 5];
removing.pop() // [1, 2, 3, 4];   5 is popped off
removing.pop() // [1, 2, 3];   4 is popped off
removing.pop() // [1, 2];   3 is popped off


 /**
 * Shift() -
 *  method removes the first element from an array and returns that element.
 *  
 * Complexity: 
 *  shift() operation will be O(n) since we have to remove the element at index 0, 
 *  shift all the elements to the left, and then update the length of an array.
 */

let numbers = [10, 20, 30, 40];
let results = numbers.shift();
console.log("results: ", results) // output: 10
console.log("numbers: ", numbers) // output: [ 20, 30, 40 ]
console.log({"numbers length: ": numbers.length}) // output: 3


/**1
 * Unshift(value) -
 *   method adds one or more elements to the front of an array and returns the new array length.
 *  
 * Complexity: 
 *  unshift() operation will be O(n) since we have to update the length of an array,
 *  shift all the elements to the right, and then add the new element at index 0.
 */

const unshifting = [1, 2, 3, 4, 5];
console.log("line 58: ", unshifting.unshift(0), unshifting) // 6 length = which is [0, 1, 2, 3, 4, 5]
console.log("line 59: ", unshifting.unshift(-1)) // 7 length = which is [-1, 0, 1, 2, 3, 4, 5];
console.log("line 60: ", unshifting.unshift(-2)) // 8 length = which is [-2, -1, 0, 1, 2, 3, 4, 5];

let numbs = [30, 40, 50];
let val = numbs.unshift(20);
console.log("val: ", val) // output: 4]
console.log("numbs: ", numbs) // output: [20, 30, 40, 50]

/**
 * delete keyword -
 *  Elements can be deleted using delete in JavaScript. However, using delete leaves 
 *  undefined holes in the array, so it is better to use the shift() or pop() method.
 *  
 * Complexity: 
 *  delete() function will be O(n) To remove the first element from the beginning, we
 *  need to move all the following elements to the left.
 */



/**
 * Reverse() -
 *  function reverses an array. Use it like array.reverse().
 *  
 * Complexity: 
 *  reverse() function will be O(n) since we have to traverse all the elements of an array.
 *  
 */

let arrReversed = [1, 2, 3, 4, 5];
arrReversed.reverse();
console.log("arrReversed: ", arrReversed) // output: [5, 4, 3, 2, 1]




/**
 * Splice() -
 *  function can be used to add or remove elements. The first parameter is the index number, 
 *  where the new elements should be spliced in.
 * 
 *  The second parameter is the number of elements that should be removed. 
 *  If you don’t want to remove anything, just put 0 as the second parameter. 
 * 
 *  The rest of the parameters are the new elements to be added.
 *  
 * Complexity: 
 *  splice() function is O(n) since we have to traverse all the elements of an array. 
 *  Since splice() add or remove elements in the original array. Therefore, in the worst-case, 
 *  we have to shift n-1 elements to the right.
 *  
 */





/**
 * Slice() -
 *  function can be used to slice out a piece of an array into a new array. 
 * 
 * The first parameter is the index number, where the start of the slicing takes place.
 * 
 * The second parameter is the index number up to which the array should be sliced out.
 * The new array excludes the second parameter. If the second parameter is left empty, 
 * the new slice contains the elements from the first parameter to the rest of the array.
 * 
 *  
 * Complexity: 
 *  slice() function is O(n) Since slice() returns a new array
 *  from the start to the end. Therefore, in the worst-case, 
 *  we have to make a copy of all the elements present in the array.
 *  
 */





/**
 * Concat() -
 *  function concatenates arrays as the name implies, and creates a 
 *  new array which does not affect the source arrays.
 * The first parameter is the index number, where the start of the slicing takes place.
 * 
 * The second parameter is the index number up to which the array should be sliced out.
 * The new array excludes the second parameter. If the second parameter is left empty, 
 * the new slice contains the elements from the first parameter to the rest of the array.
 * 
 *  
 * Complexity: 
 *  concat() function iwill be O(m+n), where m is the size of the first array, 
 *  and n is the size of the second array.
 * 
 *  concat() makes a new array of size m+n and then copy elements of both arrays one by one in a new array.
 *  
 */





/**
 * for....of statement -
 *  creates a loop to iterate over iterable objects, such as Arrays and Array-like objects.
 *  
 * Complexity: 
 *  for...of will be O(n) where n is the number of items in an array.
 *  
 */


const array = [1, 2, 3];

// examples: Insert at tail
// time: 0(1)

function insertAtTail(array, element) {
    array.push(element);
    return array;
}
console.log(insertAtTail(array, 4)) // [1, 2, 3, 4];


// examples: Appending to head
// time: 0(n)

function insertAtHead(array, element) {
    array.unshift(element);
    return array;
}
console.log(insertAtTail(array, 0)) // [0, 1, 2, 3];