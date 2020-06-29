/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums = [0], target = 0) {
    let res = [-1, -1];
    const numSize = nums.length;
    for (let i = 0; i < numSize; i++) {
        const num = nums[i];
        if (num === target) {
            if (res[0] === -1) {
                res[0] = i;
            } else {
                res[1] = i;
            }
        }
    }

    return res;
};
// @lc code=end

