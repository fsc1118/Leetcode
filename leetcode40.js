/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((left, right) => {
        return left - right
    })
    const res = []
    const backTracking = (index, sum, array) => {
        if (sum === target) {
            res.push([...array])
            return
        }
        if (sum > target) {
            return
        }
        if (index === candidates.length) {
            return
        }
        // choice1: skip the current value  
        let next = index + 1
        while (candidates[next] === candidates[index]) {
            next++
        }
        backTracking(next, sum, array)
        // choice2: select the current value
        array.push(candidates[index])
        backTracking(index + 1, sum + candidates[index], array)
        array.pop()
    }
    backTracking(0, 0, [])
    return res
};