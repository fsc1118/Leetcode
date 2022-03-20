/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let dfs = (left, right) => {
        if (left === 0) {
            let res = ""
            for (let i = 0; i < right; i++) {
                res += ")"
            }
            return [res]
        }
        if (left === right) { // remaning left equals to right parathesis
            let temp = dfs(left - 1, right)
            let result = []
            temp.forEach((item) => {
                result.push("(" + item)
            })
            return result
        } else { // remaining left is smaller than right parathesis
            let result = []
            let choice1 = dfs(left - 1, right)
            let choice2 = dfs(left, right - 1)
            choice1.forEach((item) => {
                result.push("(" + item)
            })
            choice2.forEach((item) => {
                result.push(")" + item)
            })
            return result
        }
    }
    return dfs(n, n)
}