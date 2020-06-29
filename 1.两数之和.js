/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    const numSize = nums.length;
    while (i < numSize) {
        const first = nums.shift();
        const index = nums.indexOf(target - first)
        if (index > -1) {
            return [i, index];
        }
    }

    return [];
};
// @lc code=end

