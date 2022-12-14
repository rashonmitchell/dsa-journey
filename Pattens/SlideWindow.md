# Sliding Window Technique

I first encountered the term "sliding window" when learning about the sliding window protocols, which is used in Transmission Control Protocol (TCP) for packet-based data transimission. It is used to improved transmission efficiency in order to avoid congestions. The sender and the receiver each has a window size, w1 and w2, respectively. The window size may vary based on the network traffic flow. However, in a simpler implementation, the sizes are fixed, and they must be greater than 0 to perform any task.

The sliding window technique in algorithms is very similar, but it applies to more scenarios. Now, let's go over this technique.

## Introduction

Sliding window technique, also known as two pointers technique, can help reduce time complexity in problems that ask for "consecutive" or "contiguous" items. For example, [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/127732/official-solution/). For more related problems, go to the `List of Problems` below.

## Common Types

This technique is mainly for solving problems ask about "consecutive substring" or "contiguous subarray". It would be helpful if you can relate these terms with this technique in your mind. Whether the technique solve the exact problem or not, it would come in handy.

There are mainly three types of application:

- Fixed window size
- Variable window size and looking for the maximum window size that meet the requirement
- Variable window size and looking for the minimum window size that meet the requirement (e.g. Problem#209 mentioned above)

The last two are catogorized as "variable window". Of course, they are all of the same essentially. It's all about the implementation details.

### Fixed Window Size

For fixed window size problem, we only need to keep track of the left pointer l and the right pointer r, which indicate the boundaries of a fixed window, and make sure that:

1. l is initialized to be 0
2. r is initialied such that the window's size = r - l + 1
3. Always move l and r simultaneously
4. Decide if the consecutive elements contained within the window satisfy the required conditions.
   - 4.1 If they satisfy, based on whether we need an optimal solution or not, we either return the solution or keep updating until we find the optimal one.
   - 4.2 Otherwise, we continue to find an appropriate window

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghluhfr2c3j308z0d5aaa.jpg)

### Variable Window Size

For variable window, we initialize the left and right pointers the same way. Then we need to make sure that:

1. Both l and r are initialized to 0
2. Move r to the right by one step
3. Decide if the consecutive elements contained within the window satisfy the required conditions
    - 3.1 If they satisfy
        - 3.1.1 and we need an optimal solution, we try moving the pointer l to minimize our window's size and repeat step 3.1
        - 3.1.2 else we return the current solution
   - 3.2 If they don't satisfy, we continue to find an appropriate window

If we view it another way, it's simply moving the pointer r to find an appropriate window and we only move the pointer l once we find an appropriate window to minimize the window and find an optimal solution.

1. l is initialized to be 0
2. r is initialied such that the window's size = r - l + 1
3. Always move l and r simultaneously
4. Decide if the consecutive elements contained within the window satisfy the required conditions.
   - 4.1 If they satisfy, based on whether we need an optimal solution or not, we either return the solution or keep updating until we find the optimal one.
   - 4.2 Otherwise, we continue to find an appropriate window

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghluhfr2c3j308z0d5aaa.jpg)

### Variable Window Size

For variable window, we initialize the left and right pointers the same way. Then we need to make sure that:

1. Both l and r are initialized to 0
2. Move r to the right by one step
3. Decide if the consecutive elements contained within the window satisfy the required conditions
    - 3.1 If they satisfy
        - 3.1.1 and we need an optimal solution, we try moving the pointer l to minimize our window's size and repeat step 3.1
        - 3.1.2 else we return the current solution
   - 3.2 If they don't satisfy, we continue to find an appropriate window

If we view it another way, it's simply moving the pointer r to find an appropriate window and we only move the pointer l once we find an appropriate window to minimize the window and find an optimal solution.

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghluhlt7wwj30d90d50t5.jpg)

## Code Template