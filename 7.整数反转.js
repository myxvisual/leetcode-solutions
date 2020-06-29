/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x = 0) {
    let res = 0;

    while (x !== 0) {
        res = res * 10 + x % 10;
        x = Number.parseInt(x / 10);
    }

    return res;
};
// @lc code=end

