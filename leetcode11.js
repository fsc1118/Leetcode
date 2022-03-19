/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let max = 0
    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left))
        if (height[left] < height[right]) {
            left++
        } else if (height[right] < height[left]) {
            right--
        } else {
            left++
            right--
        }
    }
    return max
};
