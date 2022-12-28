/**
 * Challenge 1: Remove Even Integers From an Array
 * 
 * Given an array of size n, remove all even integers from it. 
 * 
 * Implement a function removeEven(arr), which takes an array arr in its input 
 * and removes all the even elements from a given array.
 */

/*
Understand Problem:
    - Take all even number from the array. [1, 2, 3, 4, 5, 6] Becomes [1, 3, 5]
Devise Plan:
    - loop through array
        - if-cond regarding if element is even 
            - do-something if the element is even
    - return the given arr
Code:

Refactor:

*/

// arr = [1, 2, 3, 4, 5, 6] => [1, 3, 5]
function removeEven(arr) {
    const results = []
    for(let i = 0; i < arr.length; i++){ // O(n)
        if(arr[i] % 2 !== 0){
            results.push(arr[i]) // 0(1)
        }
    }
    return results;
}

let arr = [1, 2, 3, 4, 5, 6]
console.log("line 36 ", removeEven(arr))


// another 

const removeEven2 = (arr) => {
    for(let idx = 0; idx < arr.length; idx++) {
        if(arr[idx] % 2 === 0){
            arr.splice(idx, 1); 
            idx--;
        }
    }
    return arr;
}
console.log("splice method", removeEven2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]

// another

// filter() 
// time: O(n), space: O(1)
const removeEven3 = (arr) => {
    return arr.filter(element => (element % 2) !== 0);
}
console.log("filter method", removeEven3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]

// another

// reduce() 
// time: O(n), space: O(1)
const removeEven4 = (arr) => {
    return arr.reduce((acc, current) => {
        if(current % 2 === 0) {
            return acc;
        } else {
            return acc.concat(current)
        }
    }, []);
}
console.log("reduce method", removeEven4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]

// another

// pop()
// time: O(n), space: O(1)
const removeEven5 = (arr) => {
    console.log("arr 81: ", arr)
    for(let idx = 0; idx < arr.length; idx++) {
        if(arr[idx] % 2 === 0){
            arr.pop(); 
            console.log("arr: ", arr)
            idx--;
        }
    }
    return arr;
}
console.log("pop method", removeEven5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
//[1, 2, 3, 4, 5, 6, 7, 8, 9,]