/**
 * Set
 * 
 * Sets are a bit like maps but they only store keys not key-value pairs.
 * 
 * They are common in other programming languages but are a new 
 * addition to JavaScript in ES6.
 * 
 */


/**
 * Creating, getting and setting 
 * @param {} getting 
 * @param {} setting
 * 
 */

// We create a Set using the new keyword, like so
let set = new Set();

// We can then add entries by using the add method, like so:
set.add('APPLE');
set.add('ORANGE');
set.add('MANGO');

// The add method is chainable, like so:
let set_Chaining = new Set()
    .add('APPLE')
    .add('ORANGE')
    .add('MANGO');


// Or we can initialise the Set with an array, like so:
let set_Array = new Set(['APPLE', 'ORANGE', 'MANGO']);

// We can check to see if a value is in a set like so:
set.has('APPLE') // true

// We can delete a value from the set:
set.delete('APPLE')

// We can count the number of entries in the set like so:
set.size // 2

// We can empty the entire set with the clear method:
set.clear();
set.size // 0

// Sets can only store unique values, so adding a value a second time has no effect:
let set_unique = new Set();
set_unique.add('Moo');
set_unique.size // 1
set_unique.add('Moo');
set_unique.size // 1

// Looping over a Set
// We can use the for-of loop to loop over items in our set, like so:
let set_for_of = new Set(['APPLE', 'ORANGE', 'MANGO']);

for (let entry of set_for_of) {
    console.log(entry);
}
// APPLE
// ORANGE
// MANGO

/*
* 
* Sets are a bit like maps but they only store keys not key-value pairs.
*
* Important: Sets can only store unique values, so adding a value a second time has no effect.
*
* Similar to Maps, Sets also record the order in which elements are inserted,
* so you can iterate over them in the order in which they were inserted. 
*
*/