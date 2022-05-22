/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return "1"
    }
    let start = 0
    let res = ""
    const prev = countAndSay(n - 1)
    while (start < prev.length) {
        const currentDigit = prev[start]
        let length = 0
        while (prev[start] === currentDigit) {
            length++
            start++
        }
        const appended = length.toString() + currentDigit
        res += appended
    }
    return res
};