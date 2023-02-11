/** 
 *
 * [705] Design HashSet
 *
 * https://leetcode.com/problems/design-hashset/description/
 * 
 * Testcase Example:  '["MyHashSet","add","add","contains","contains","add","contains","remove","contains"]\n' +
  '[[],[1],[2],[1],[3],[2],[2],[2],[2]]'
 *
 * Design a HashSet without using any built-in hash table libraries.
 * 
 * Implement MyHashSet class:
 * 
 * 
 * void add(key) Inserts the value key into the HashSet.
 * bool contains(key) Returns whether the value key exists in the HashSet or
 * not.
 * void remove(key) Removes the value key in the HashSet. If key does not exist
 * in the HashSet, do nothing.
 * 
 * 
 * 
 * Example 1:
 * Input
 * ["MyHashSet", "add", "add", "contains", "contains", "add", "contains",
 * "remove", "contains"]
 * [[], [1], [2], [1], [3], [2], [2], [2], [2]]
 * Output
 * [null, null, null, true, false, null, true, null, false]
 * 
 * Explanation
 * MyHashSet myHashSet = new MyHashSet();
 * myHashSet.add(1);      // set = [1]
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(1); // return True
 * myHashSet.contains(3); // return False, (not found)
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(2); // return True
 * myHashSet.remove(2);   // set = [1]
 * myHashSet.contains(2); // return False, (already removed)
 * 
 * 
 * Constraints:
 * 0 <= key <= 10^6
 * At most 10^4 calls will be made to add, remove, and contains.
 * 
 * 
 */
// i = ["MyHashSet", "add", "add", "contains", "contains", "add", "contains","remove", "contains"]
// i = [[],           [1],   [2],     [1],         [3],     [2],     [2],       [2],       [2]]
// o = [null,         null,  null,   true,        false,    null,   true,       null,     false]


const  MyHashSet = function() {
    this.set = {};
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.set[key] = true;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    // check if we have key, if so delete it somehow or maybe set to null?
    delete this.set[key];
};

/** 
 * @param {number} key
 * @return {boolean}
 *
 * hasOwnProperty - Determines whether an object has a property with the specified name.
 * @param v — A property name.
 *
 * call() - 
 * Calls a method of an object, substituting another object for the current object.
 * @param thisArg — The object to be used as the current object.
 * @param argArray — A list of arguments to be passed to the method.
 *
 *
 */
MyHashSet.prototype.contains = function(key) {
    return Object.prototype.hasOwnProperty.call(this.set, key);
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */