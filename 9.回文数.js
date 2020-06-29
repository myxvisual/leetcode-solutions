/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x = 0) {
    if (x < 0|| (x % 10 == 0 && x != 0)) {
        return false;
    } else {
        let reveredNum = 0;
        while (x > reveredNum) {
            reveredNum = reveredNum * 10 + Number.parseInt(x % 10);
            x = Number.parseInt(x / 10);
        }
        return x === reveredNum || x === Number.parseInt(reveredNum / 10);
    }
};
// @lc code=end

