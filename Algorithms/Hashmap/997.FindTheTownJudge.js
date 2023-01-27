/**
 *
 * [997] Find the Town Judge
 *
 * https://leetcode.com/problems/find-the-town-judge/description/
 *
 * In a town, there are n people labeled from 1 to n. There is a rumor that one
 * of these people is secretly the town judge.
 * 
 * If the town judge exists, then:
 * 
 *  1. The town judge trusts nobody.
 *  2. Everybody (except for the town judge) trusts the town judge.
 *  3. There is exactly one person that satisfies properties 1 and 2.
 * 
 * 
 * You are given an array trust where trust[i] = [ai, bi] representing that the
 * person labeled ai trusts the person labeled bi.
 * 
 * Return the label of the town judge if the town judge exists and can be
 * identified, or return -1 otherwise.
 * 
 * 
 * Example 1:
 * Input: n = 2, trust = [[1,2]]
 * Output: 2
 * 
 * 
 * Example 2:
 * Input: n = 3, trust = [[1,3],[2,3]]
 * Output: 3
 * 
 * 
 * Example 3:
 * Input: n = 3, trust = [[1,3],[2,3],[3,1]]
 * Output: -1
 * 
 * 
 * Constraints:
 * 1 <= n <= 1000
 * 0 <= trust.length <= 10^4
 * trust[i].length == 2
 * All the pairs of trust are unique.
 * ai != bi
 * 1 <= ai, bi <= n
 * 
 * 
 */

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

//  Array solution

// thinking:
// 1. create a hashmap with key = person, value = trust count
// 2. iterate through trust array
// 3. for each trust pair, increment the trust count of the person being trusted
// 4. iterate through hashmap
// 5. if a person has a trust count of n-1, return that person
// 6. if no person has a trust count of n-1, return -1
const findJudge = function(n, trust) {
    const array  = new Array(n + 1).fill(0); // 
    console.log("array: ", array);

    console.log("trust: ", trust);
    for(let [a1, b1] of trust){ // [1,3],[2,3],[3,1]
        console.log("a: ", a1, array[a1]--); // 1->0   2   3
        console.log("b: ", b1, array[b1]++); // 3 -> 1  3   1
        //     1     3
        // a:  0 b:  0

        //     2     3
        // a:  0 b:  1

        //     3     1
        // a:  2 b:  -1
    }

    for(let person = 1; person <= n; person++) {
        if(array[person] === n - 1) return person;
    };
    return -1;
}
// console.log("findJudge: ", findJudge(2, [[1,2]]));
console.log("findJudge: ", findJudge(3, [[1,3],[2,3],[3,1]]));
// console.log("findJudge: ", findJudge(3, [[1,3],[2,3]]));

// anothet

// Hashmap solution
const findJudge2 = function(n, trust) {
    // // create with key/value pairs
    // let map = {};

    // // iterate over n
    // for(let idx = 1; idx <= n; idx++) {
    //     //  store inside of map
    //     // map[idx] = map[idx] || 0;  //  or 
    //     map[idx] = 0;
    // };

    // // iterate over trust
    // for(let idx = 0; idx < trust.length; idx++) {
    //     // [1,3] aka trust[i] = [ai, bi]
    //     const [truster, trustee] = trust[idx];
    //      // add up trust for each pair
    //      map[trustee]++;
    // };
    
    // // iterate over our map
    // for(let person in map) {
    //     // if they trust him, return the person
    //     if(map[person] === n - 1) return person;
    // };
    // // if not, return -1
    // return -1
};