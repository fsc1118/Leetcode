/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((item1, item2)=>{return item1 - item2})
    let res = 0x3f3f3f3f
    nums.forEach(
        (num1, index)=>{
            let left = index + 1
            let right = nums.length - 1
            while (left < right) {
                let num2 = nums[left]
                let num3 = nums[right]
                let sum = num1 + num2 + num3
                if (Math.abs(sum - target) < Math.abs(res - target)) {
                    res = sum
                }
                if (sum > target) {
                    right--
                } else {
                    left++
                }
            }
        }
    )
    return res
};
