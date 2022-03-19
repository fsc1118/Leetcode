/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((item1, item2)=>{
        return item1 - item2
    })
    let res = []
    for (let w = 0; w < nums.length; w++) {
        if (nums[w] === nums[w - 1]) {
            continue
        }
        for (let x = w + 1; x < nums.length;) {
            let y = x + 1
            let z = nums.length - 1
            while (y < z) {
                let valueY = nums[y]
                let valueZ = nums[z]
                let sum = nums[w] + nums[x] + nums[y] + nums[z]
                if (sum > target) {
                    z--
                } else if (sum < target) {
                    y++
                } else {
                    res.push([nums[w], nums[x], valueY, valueZ])
                    while (nums[y] === valueY) {
                        y++
                    }
                    while (nums[z] === valueZ) {
                        z--
                    }
                }
            }         
            let valueAtX = nums[x]
            do {
                x++
            } while (nums[x] === valueAtX)
        }
    }
    return res
};
