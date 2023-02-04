
/**
 * @param {string} s
 * @return {string}
 */

// Two-pointer
const reverseVowels = function(s) {
    let array = s.split('')
    let start = 0, end = s.length - 1;
    while(start < end) { // h,e,l,l,o
        if(!array[start].match(/[aeiou]/gi)) {
            start++;
        } else if(!array[end].match(/[aeiou]/gi)) { // o
            end--;
        } else {
            [array[end], array[start]] = [array[start], array[end]]
            start++;
            end--;
        }
    }
    return array.join('')
};