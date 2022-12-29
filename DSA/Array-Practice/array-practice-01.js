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
        if(arr[idx] % 2 === 0){ // 1,2,3,4,5,6
            // arr.pop(); 
            // console.log("arr: ", arr)
            let c = arr[arr.length - 1];
            arr[idx] = c
            arr.pop()
            idx--;
            
        }
    }
    return arr.sort();
}
console.log("pop method", removeEven5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]

//arr: [1, 9, 3, 7, 5]
//                  i
//idx: 5
//c= 6

// Bonus Challenge: Remove Duplicates from an Array

const removeDups = (array) => {
    // return new Set(array) //created a set to automatically remove duplicates
    return [...new Set(array)]
}
console.log("removeDups", removeDups([1, 2, 2, 4, 5, 7, 7, 7, 9, 10]));


const removeDups2 = (array) => {
    let resultsArray = []
    for(let i = 0; i < array.length; i++){
        if(!resultsArray.includes(array[i])) resultsArray.push(array[i]);
    }
    return resultsArray
}
console.log("removeDups2", removeDups2([1, 2, 2, 4, 5, 7, 7, 7, 9, 10]));


// another

// filter & indexOf methods
    // indexOf() method returns the first index at which a given element 
    // can be found in the array, or -1 if it is not present.
const removeDups3 = (array) => {
    return array.filter((ele, index) => {
        return array.indexOf(ele) === index
    });
}
console.log("removeDups3", removeDups3([1, 2, 2, 4, 5, 7, 7, 7, 9, 10]));

// another 

// indexOf()
const removeDups4 = (array) => {
    let arr = []
    for(let i = 0; i < array.length; i++){
        if(arr.indexOf(array[i]) === -1) arr.push(array[i]);
    }
    return arr
}
console.log("removeDups4", removeDups4([1, 2, 2, 4, 5, 7, 7, 7, 9, 10]));


// another 

// forEach() & includes()
const removeDups5 = (array) => {
    let arr = []
    array.forEach((ele) => {
        if(!arr.includes(ele)) arr.push(ele)
    })
    return arr
}
console.log("removeDups5", removeDups5([1, 2, 2, 4, 5, 7, 7, 7, 9, 10]))


// another 

// reduce() & includes()
const removeDups6 = (array) => {
    return array.reduce((acc, ele) => {
        if(acc.includes(ele)) {
            return acc 
        } else {
            return [...acc, ele]
        }
    }, [])
}
console.log("removeDups6", removeDups6([1, 2, 2, 4, 5, 7, 7, 7, 9, 10]))