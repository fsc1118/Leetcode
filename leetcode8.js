/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let positive = true
    let res = 0
    const limit = 2147483648
    let isNum = (s) => {
        return s.codePointAt(0) >= "0".codePointAt(0)
            && s.codePointAt(0) <= "9".codePointAt(0)
    }
    let atoi = (s, startIndex) => {
        let sum = 0
        let isLeading = true
        for (let i = startIndex; i < s.length; i++) {
            let character = s[i]
            if (character === "0") {
                if (isLeading) {
                    continue
                }
            }
            if (!isNum(character)) {
                // res = 0
                break
            }
            isLeading = false
            let num = s.codePointAt(i) - "0".codePointAt(0)
            // console.log(character)
            sum *= 10
            sum += num
            res = sum
            if (sum >= limit) {
                res = limit
                return
            }
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "-") {
            positive = false
            atoi(s, i + 1)
            break
        }
        if (s[i] === "+") {
            atoi(s, i + 1)
            break
        }
        if (s[i] === " ") {
            continue
        }
        if (isNum(s[i])) {
            atoi(s, i)
            break
        }
        return 0
    }
    if (positive) {
        return Math.min(limit - 1, res)
    }
    return -res
};