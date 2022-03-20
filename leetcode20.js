/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let isLeft = (character) => {
        return character === "(" || character === "[" || character === "{"
    }
    let isMatch = (left, right) => {
        return left === "(" && right === ")"
            || left === "[" && right === "]"
            || left === "{" && right === "}"
    }
    for (let i of s) {
        if (isLeft(i)) {
            stack.push(i)
        } else {
            if (stack.length === 0) {
                return false
            }
            let left = stack.pop()
            if (!isMatch(left, i)) {
                return false
            }
        }
    }
    return stack.length === 0
};