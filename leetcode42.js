/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const stack = []
    let res = 0
    for (let i = 0; i < height.length;) {
        const currentHeight = height[i]
        if (stack.length === 0 || height[stack[stack.length - 1]] <= currentHeight) {
            stack.push(i++)
            continue
        }
        while (true) {
            let top = stack[stack.length - 1]
            let topHeight = height[top]
            let distance = i - top - 1
        }

    }
    return res
}