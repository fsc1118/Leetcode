/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const cache = new Array(s.length)
    const longestParenthesesEndAtIndex = (index) => {
        debugger
        if (index < 0) { return 0 }
        if (cache[index] !== undefined) {
            return cache[index]
        }
        if (s[index] === "(") {
            return 0
        }
        if (s[index - 1] === undefined) {
            return 0
        }
        let total = 0
        let innerIndex = index - 1
        while (s[innerIndex] === ")") {
            let t = longestParenthesesEndAtIndex(innerIndex)
            if (t === 0) {
                cache[index] = 0
                return 0
            }
            total += t
            innerIndex -= t
        }
        if (s[innerIndex] === "(") {
            cache[index] = 2 + total + longestParenthesesEndAtIndex(innerIndex - 1)
        } else {
            cache[index] = 0
        }
        return cache[index]
    }
    let max = 0
    for (let i = 0; i < s.length; i++) {
        max = Math.max(max, longestParenthesesEndAtIndex(i))
    }
    return max
};