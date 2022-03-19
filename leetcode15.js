/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((item1, item2)=>{
        return item1 - item2
    })
    let findTuple = (nums, left, right, target)=>{
        let res = []
        while (left < right) {
            if (nums[left] + nums[right] > target) {
                right--
            } else if (nums[left] + nums[right] < target) {
                left++
            } else {
                let tuple = []
                res.push(tuple)
                let valueAtLeft = nums[left]
                let valueAtRight = nums[right]
                tuple.push(valueAtLeft)
                tuple.push(valueAtRight)
                while (nums[left] === valueAtLeft) {
                    left++
                }
                while (nums[right] === valueAtRight) {
                    right--
                }
            }
        }
        return res
    }
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let tupleList = findTuple(nums, i + 1, nums.length - 1, -nums[i])
        tupleList.forEach((tuple)=>{
            res.push([nums[i], ...tuple])
        })
    }
    return res
};
