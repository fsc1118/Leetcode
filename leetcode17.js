/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let num2Character = (digit)=>{
        if (digit === 2) {
            return ['a', 'b', 'c']
        }
        if (digit === 3) {
            return ['d', 'e', 'f']
        }
        if (digit === 4) {
            return ['g', 'h', 'i']
        }
        if (digit === 5) {
            return ['j', 'k', 'l']
        }
        if (digit === 6) {
            return ['m', 'n', 'o']
        }
        if (digit === 7) {
            return ['p', 'q', 'r', 's']
        }
        if (digit === 8) {
            return ['t', 'u', 'v']
        }
        if (digit === 9) {
            return ['w', 'x', 'y', 'z']
        }
    }
    let dfs = (digits, index) => {
        if (index === digits.length) {
            return []
        }
        let prefix = num2Character(parseInt(digits[index]))
        let suffixList = dfs(digits, index + 1)
        // console.log(suffixList)
        if (suffixList.length === 0) {return prefix}
        let res = []
        prefix.forEach((char)=>{
            suffixList.forEach((suffix)=>{
                res.push(char + suffix)
            })
        })
        return res
    }
    return dfs(digits, 0)
};
