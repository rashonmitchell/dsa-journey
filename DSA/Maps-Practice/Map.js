/** 
* @param {Object. {key: value}}}}} 
* @param {Access: worst - 0(1)} 
* @param {Insert head: worst - 0(n)}
* @param {Insert tail: worst - 0(1)}
* @param {Search: worst - 0(n)}
* @param {Delete: worst - 0(n)}
* /

/*Using Object as a Map
In ES5 and below the only data structure we had to map keys to values was an Object, like so:*/
let obj = {key: "value", a: 1}
console.log(obj.a); // 1
console.log(obj['key']); // "value"
//However it does have a few pitfalls.

/*Inherited Objects
Looping over objects with for-in also iterated over the inherited properties as well as the objects own properties, like so:*/
// let base_iterated = {a:1,b:2};
// let obj_iterated = Object.create(base_iterated);
// obj_iterated[c] = 3;
// for (prop in obj_iterated) console.log(prop)
// a
// b
// c
//Tip


/*Object.create creates a new objects who’s prototype points to the passed in base object.
If it can’t find a requested property on obj, javascript then tries to search the base object for the same property.
Perhaps this is the behaviour you want? Or perhaps you only want to print out the keys that belong to the current object?*/

//With ES5 JavaScript to ensure you were looking at a property of the current object we need to use the hasOwnProperty function,like so:
// let base_ES5 = {a:1,b:2};
// let obj_ES5 = Object.create(base_ES5);
// obj_ES5[c] = 3;
// for (prop in obj_ES5) {
//     if (obj_ES5.hasOwnProperty(prop)) {
//         console.log(prop)
//     }
// }
// c


//Overriding Functions

//If we are using Object as a dictionary then we could theoretically store a key of hasOwnProperty which then leads to the code in the example above failing, like so:
let obj_hasOwnProperty = {hasOwnProperty: 1};
// obj_hasOwnProperty.hasOwnProperty("test");

// TypeError: Property 'hasOwnProperty' is not a function proto property proto holds a special meaning with respect to an objects prototype chain so we can’t use it as the name of a key.
// let base_proto = {__proto__:1,b:2};
// for (prop in obj_hasOwnProperty) console.log(prop) // b

/** 
* @param {Map, {key: value}}
* @param {Access/Search: worst - 0(n) - is an extreme case when there are too many collisions.  HashMap.get(key)}
* @param {Access/Search: best - 0(1) - is an extreme case when there are no collisions. HashMap.get(key)}
* @param { HashMap.get() }
*
* @param {Insert/Edit: worst - 0(n) - only happens with rehash when the Hash is 0.75 full}
* @param {Insert/Edit: best - 0(1)}
* @param { HashMap.set() }
*
* @param {Delete: worst - 0(n) - is an extreme case when there are too many collisions}
* @param {Delete: best - 0(1)}
* @param { HashMap.delete }
* /

// Map

//Map is a new data structure introduced in ES6 which lets you map keys to values without the drawbacks of using Objects.

/*Creating, getting and setting
We create a map using the new keyword, like so

let map = new Map();
We can then add entries by using the set method, like so:*/

let map_Add_entries = new Map();
map_Add_entries.set("A",1);
map_Add_entries.set("B",2);
map_Add_entries.set("C",3);
//The set method is also chainable, like so:

let map_chain = new Map()
    .set("A",1)
    .set("B",2)
    .set("C",3);

//Or we could initialise the Map with a an array of key-value pairs, like so:
let map_pairs = new Map([
    [ "A", 1 ],
    [ "B", 2 ],
    [ "C", 3 ]
]);

//We can extract a value by using the get method:
map_pairs.get("A"); // 1

//We can check to see if a key is present using the has method:
map_pairs.has("A"); // true

//We can delete entries using the delete method:
map_pairs.delete("A"); // true

//We can check for the size (number of entries) using the size property:
map_pairs.size // 2

//We can empty an entire Map by using the clear method:
map_pairs.clear()
map_pairs.size // 0


/*Looping over a Map
We use the for-of looping operator to loop over entries in a Map.
There are a couple of different method we can employ, we’ll go over each one using the below map as the example:*/

let map = new Map([
    [ "APPLE", 1 ],
    [ "ORANGE", 2 ],
    [ "MANGO", 3 ]
]);
//Using keys()
//The keys method returns the keys in the map as an array which we can loop over using for-of like so:

for (let key of map.keys()) {
    console.log(key);
}
// APPLE
// ORANGE
// MANGO
/*Using values()
The values method returns the values in the map as an array which we can loop over using for-of like so:*/

for (let value of map.values()) {
    console.log(value);
}
// 1:
// 2
// 3
/*Using entries()
The entries method returns the [key,value] pairs in the map as an array which we can loop over using for-of like so:*/

for (let entry of map.entries()) {
    console.log(entry[0], entry[1]);
}
// "APPLE" 1
// "ORANGE" 2
// "MANGO" 3
//Using destructuring we can access the keys and values directly, like so:

for (let [key, value] of map.entries()) {
    console.log(key, value);
}
// "APPLE" 1
// "ORANGE" 2
// "MANGO" 3
/*Looping over key-value pairs via entries is so common that this is the default for a Map.

Therefore we don’t even need to call entries() on a map instance, like so:*/

for (let [key, value] of map) {
    console.log(key, value);
}
// "APPLE" 1
// "ORANGE" 2
// "MANGO" 3

//Important

/*A distinction between Object and Map is that Maps record the order in which elements are inserted.
It then replays that order when looping over keys, values or entries.
*/

class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        } 
        return total;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    };

    get(key){
        let index = this._hash(key);
        return this.keyMap[index]
        // if(this.keyMap[index]){
        //     for(let i = 0; i < this.keyMap[index].length; i++){
        //         if(this.keyMap[index][i][0] === key){

        //             console.log("line 200: ", this.keyMap[index][i])
        //             return this.keyMap[index][i]
        //         }
        //     }
        // }
        // return undefined;
    }
}

let ht = new HashTable(17);
console.log("line 210: ", ht)
ht.set("yellow", "#FFFF00")
  .set("maroon", "#800000")
  .set("olive", "#808000")
  .set("salmon", "#FA8072")
  .set("lightcoral", "#F08080")
  .set("mediumvioletred", "#C71585")
  .set("plum", "#DDA0DD")

console.log("ht: ", ht)

// ht:  HashTable {
//     keyMap: [
//       [ [Array] ],
//       <2 empty items>,
//       [ [Array] ],
//       <4 empty items>,
//       [ [Array], [Array] ],
//       <1 empty item>,
//       [ [Array] ],
//       <2 empty items>,
//       [ [Array] ],
//       <2 empty items>,
//       [ [Array] ]
//     ]
//   }



