/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s = "") {
    let res = 0;
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": "500",
        "M": 100
    };
    const size = s.length;
    
    for (let i = size; i > 0; i--) {
        const char = s[i - 1];
        const nextChar = s[i];
        const num = map[char];

        if (!nextChar) {
            res += num;
        } else {
            const nextNum = map[nextChar];
            if (num >= nextNum) {
                res += num;
            } else {
                res -= num;
            }
        }
    }

    return res;
};
// @lc code=end

