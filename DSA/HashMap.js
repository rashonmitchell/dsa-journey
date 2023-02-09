/* Hash Table */





/* Maps */
// new Maps()
let hashMap = function() {
    this.collection = {};
    this.counter = 0;

    // size
    this.size = function() {
        return this.counter;
    }

    // set  +nums
    this.set = function(key, value) {
        this.collection[key] = value; // ("I", 1) || map[I] = 1 || { I: 1 }
        this.counter++;
    };

    // has
    this.has = function(key) {
        return (key in this.collection);
    };

    // get 
    this.get = function(key) {
        return (key in this.collection) ? this.collection[key] : null;
    };

    // delete
    this.delete = function(key) {
        if(key in this.collection) { 
            delete this.collection[key];
            this.counter--;
        }
    };

    // values
    this.values = function() {
        let result = new Array();
        for(let key of Object.keys(this.collection)) {
            result.push(this.collection[key]);
        };
        return (result.length > 0) ? result : null;
    };

    // entries
    this.entries = function() {  //key = 'wife', value = 1
        return this.collection[key].reduce((acc, key) => {
            if (key === undefined) {
                acc.push(this.collection[key]);
            };
        }, []);
    }

    // clear
    this.clear = function() {
        this.collection = {};
        this.counter = 0;
    };
}

// for(let [key, value] of map) {}

let ownMap = new hashMap()
ownMap.set('works at Google', 'Gabriel & Teddy');
ownMap.set('chicago', 'IL'),
ownMap.set('wife', 1);
ownMap.set('gf', 1);
ownMap.set('happiness', true);
console.log("line 64: ", ownMap.get('gf'));
console.log("line 65: ", ownMap.get('wife'));
console.log("line 66: ", ownMap.get('happiness'));
console.log("line 67: ", ownMap.get('works at Google'));
console.log("line 68: ", ownMap.get('chicago'));
console.log("line 69: ", ownMap.values()); //  [ 'Gabriel & Teddy', 'IL', 1, 1, true ]
console.log("line 70: ", ownMap.size());


let map = new Map();
map.set(1, 3);
map.set(2, 3);
map.set(3, 1);
map.set(2, 3);
console.log("line 78: ", map.get(1)); 
console.log("line 76: ", map.size);
console.log("line 77: ", map.values()); // [Map Iterator] { 3, 3, 1 }
// console.log("line 78: ", map.get());
