# Hashmap

### Map: A collection of key-value pairs that remembers the insertion order of the keys.    

> Note: `📚 Maps are similar to objects`.    

| Maps | Objects |
| :----------- | :----------- |
| **`Maps -`** there are no keys unless you explicitly added it to the Map yourself. | **`object`** - may inherit keys and cause some surprising side effects. |
| **`Maps -`** the keys of a Map may be of any type of value, including functions & objects. | **`object -`** the keys in an object may only be strings and Symbol objects. |
| **`Maps -`** remembers the insertion order of the keys. When iterating the keys, they are always in order of insertion. | **`object -`** not so much. |
| **`Maps -`** Ordered key-value pairs of data. | **`object -`** Unordered key-value pairs of data. |
| **`Maps -`** Element access via key. | **`object -`** Element access via key (property name). |
| **`Maps -`** Iterable (= you can use the for...of loop). | **`object -`** Not iterable (only with for...in). |
| **`Maps -`** Keys are unique, values are not. | **`object -`** Keys are unique, values are not. |
| **`Maps -`** Keys can be anything (incl. reference values like arrays). | **`object -`** Keys have to be strings, numbers or symbols. |
| **`Maps -`** Pure data storage, optimized for data access. | **`object -`** Can store data & **`functionality`** (methods). |
| **`Maps -`** __Focused on data storage and access.__ | **`object -`** __Very versatile construct and data storage in JavaScript.__ |
| **`Maps -`** __Can simplify and improve data access compared to objects.__ | **`object -`** __Must-use if you want to add extra functionality.__ |

## [For… In Loops](https://careerkarma.com/blog/javascript-for-loop/#:~:text=For%E2%80%A6in%20loops%20are%20useful%20when%20you%20want%20to%20iterate,over%20items%20in%20an%20object.&text=As%20you%20can%20see%2C%20our%20for%E2%80%A6of%20loop%20has%20iterated,is%20printed%20to%20the%20console.) 
> iterates over `all enumerable property keys (names)` of an object.

```js
for (variable in object) {
	// Execute code
}
```
*`for...in`* loops are useful if we want to run a certain block of code based on the number of attributes in an object. For example, we may have a student object whose properties we want to print out to the console.

Here's an example of a *`for...in`* loop that will loop through every item in a student object and print out each attribute:

```js
const student = {
	name: "Mark Redmond",
	gpa: 3.7,
	age: 17
};

for (item in student) {
	console.log(item); // Output: name gpa age
}
```
As you can see, our program has iterated through each item in the student object and printed out its property name. If we wanted to print out the value of each item, we could use this code:
```js
for (item in student) {
	console.log(student[item]);
}
```
Our code returns the following:

```js
Mark Redmond
3.7
17
```

## [For...Of Loops](https://careerkarma.com/blog/javascript-for-loop/#:~:text=For%E2%80%A6in%20loops%20are%20useful%20when%20you%20want%20to%20iterate,over%20items%20in%20an%20object.&text=As%20you%20can%20see%2C%20our%20for%E2%80%A6of%20loop%20has%20iterated,is%20printed%20to%20the%20console.)
> iterates over the `values of an iterable object.` or in otherwords if you want to iterate over `items in an object.` __Example.__ iterable objects are arrays, strings, node-list, etc... (new in ES6) does use an [object-specific](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

*`for...of`* loops are more concise than a regular for loop. This makes a *`for...of`* loop easier to read. The general rule of programming is to use the right tools for the job. *`for...of`* loops are easier to understand if you want to iterate over a list. So, you should use *`for...of`* loops when possible.
```js
let students = ["Paul", "Andy", "Reba", "Erin"];

for (let student of students) {
    console.log(student); // Output: Paul Andy Reba Erin
}
```

## Hashmaps
![hashmaps](/dsa-journey/assets/img/hashmap.png "Hashmaps example"){align=center}

(https://miro.medium.com/max/700/1*GLjtAmfB4uOCQGf9i00p-g.png)<p style="text-align:center; color:hotpink;">How to declare and initialize a new JS hashmap object.</p>

> 💡 **Tip:** Useful Methods and Properties:

- `hashmap.size()` - returns the # of elements in the hashmap.
- `hashmap.get(<key>)` - returns the value of the element of the given key.
- `hashmap.has(<key>)` - checks to see if the hashmap contains the key that is passed as an argument.
- `hashmap.set(<key>, <value>)` - accepts 2 arguments and creates a new element to the hashmap.
- `hashmap.delete(<key>)` - deletes the key/value pair that matches the key that is passed in as an argument.
- `hashmap.clear()` - clears all elements from the hashmap.