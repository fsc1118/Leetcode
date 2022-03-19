/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let index = 0
    let res = 0
    while (index < s.length) {
        if (s[index] === "M") {
            res += 1000
            index++
            continue
        }
        if (s[index] === "C") {
            if (s[index + 1] === "M") {
                index += 2
                res += 900
                continue
            }
            if (s[index + 1] === "D") {
                index += 2
                res += 400
                continue
            }
            index += 1
            res += 100
            continue
        }
        if (s[index] === "X") {
            if (s[index + 1] === "C") {
                index += 2
                res += 90
                continue
            }
            if (s[index + 1] === "L") {
                index += 2
                res += 40
                continue
            }
            index += 1
            res += 10
            continue
        }
        if (s[index] === "I") {
            if (s[index + 1] === "X") {
                index += 2
                res += 9
                continue
            }
            if (s[index + 1] === "V") {
                index += 2
                res += 4
                continue
            }
            index += 1
            res += 1
            continue
        }
        if (s[index] === "D") {
            res += 500
            index++
            continue
        } 
        if (s[index] === "L") {
            res += 50
            index++
            continue
        }
        if (s[index] === "V") {
            res += 5
            index++
            continue
        }
    }
    return res
};
