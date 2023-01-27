/** 
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/find-closest-node-to-given-two-nodes/
 * 
 * You are given a directed graph of n nodes numbered from 0 to n - 1, 
 * where each node has at most one outgoing edge.
 * 
 * The graph is represented with a given 0-indexed array edges of size n, 
 * indicating that there is a directed edge from node i to node edges[i]. 
 * 
 * If there is no outgoing edge from i, then edges[i] == -1.
 * 
 * You are also given two integers node1 and node2.
 * 
 * Return the index of the node that can be reached from both node1 and node2, such that the maximum between the distance from node1 to that node, and from node2 to that node is minimized. If there are multiple answers, return the node with the smallest index, and if no possible answer exists, return -1.
 *
 * Note that edges may contain cycles.
 * 
 * 
 * Example 1:
 * Input: edges = [2,2,3,-1], node1 = 0, node2 = 1
 * Output: 2
 * Explanation:
 * The distance from node 0 to node 2 is 1, and the distance from node 1 to node 2 is 1. 
 * The maximum of those two distances is 1. It can be proven that we cannot get a 
 * node with a smaller maximum distance than 1, so we return node 2.
 * 
 * 
 * Example 2:
 * Input: edges = [1,2,-1], node1 = 0, node2 = 2
 * Output: 2
 * Explanation:
 * he distance from node 0 to node 2 is 2, and the distance from node 2 to itself is 0.
 * The maximum of those two distances is 2. 
 * It can be proven that we cannot get a node with a smaller 
 * maximum distance than 2, so we return node 2.
 * 
 * 
 * 
 * Constraints:
 * n == edges.length == 2 * 10^4
 * 2 <= n <= 10^5
 * -1 <= edges[i] <= n
 * edges[i] != i
 * 0 <= node1, node2 < n
 * 
 * 
 */

/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */

// DFS solution:

// thinking: 
// 1. find the path from node1 to node2
// 2. find the path from node2 to node1
// 3. find the intersection of the two paths
// 4. find the node with the smallest index in the intersection
// 5. return the node with the smallest index in the intersection

const closestMeetingNode = function(edges, node1, node2) {
    const n = edges.length;
    const dfs = (i, dist)=>{
        const seen = new Set();
        let len = 0;
        while(i != -1){
            dist[i] = len++;
            seen.add(i);
            if(seen.has(edges[i])) break;
            i = edges[i];
        }
    }
    const n1Dist = Array(n).fill(-1);
    const n2Dist = Array(n).fill(-1);
    dfs(node1, n1Dist);
    dfs(node2, n2Dist);
    let maxim = Number.MAX_SAFE_INTEGER;
    let ans = -1;
    for(let i = 0; i < n; ++i){
        if(n1Dist[i] == -1 || n2Dist[i] == -1) continue;
        if(Math.max(n1Dist[i], n2Dist[i]) < maxim){
            ans = i;
            maxim = Math.max(n1Dist[i], n2Dist[i]);
        }
    }
    return ans;
};


// BFS solution:
const closestMeetingNode = function(edges, node1, node2) {
    const n = edges.length;
    const bfs = (i, dist)=>{
        const q = [i];
        dist[i] = 0;
        while(q.length){
            const cur = q.shift();
            if(edges[cur] != -1){
                if(dist[edges[cur]] == -1){
                    dist[edges[cur]] = dist[cur] + 1;
                    q.push(edges[cur]);
                }
            }
        }
    }
    const n1Dist = Array(n).fill(-1);
    const n2Dist = Array(n).fill(-1);
    bfs(node1, n1Dist);
    bfs(node2, n2Dist);
    let maxim = Number.MAX_SAFE_INTEGER;
    let ans = -1;
    for(let i = 0; i < n; ++i){
        if(n1Dist[i] == -1 || n2Dist[i] == -1) continue;
        if(Math.max(n1Dist[i], n2Dist[i]) < maxim){
            ans = i;
            maxim = Math.max(n1Dist[i], n2Dist[i]);
        }
    }
    return ans;
};

// another

const closestMeetingNode = function(edges, node1, node2) {
    let map1 = {}, map2 = {}, count = 0;
    while(map1[node1] == undefined && node1 != -1){
        map1[node1] = count;
        count++;
        node1 = edges[node1];
    };
    count = 0;

    while(map2[node2] == undefined && node2 != -1){
        map2[node2] = count;
        count++;
        node2 = edges[node2];
    };

    let result = -1, max = Infinity;
    for(let i = 0; i < edges.length; i++){
        if(map1[i] == undefined || map2[i] == undefined) continue;
        let tempMax = Math.max(map1[i], map2[i]);
        if(tempMax < max) {
            max = tempMax;
            result = i;
        };
    };
    return result;
};