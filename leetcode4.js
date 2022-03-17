/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let median = (array) => {
        if (array.length % 2 === 0) {
            return (array[array.length >> 1] + array[(array.length >> 1) - 1]) / 2
        }
        return array[array.length >> 1]
    }
    if (nums1.length === 0) {
        return median(nums2)
    }
    if (nums2.length === 0) {
        return median(nums1)
    }
    let findMedian = (nums1, nums2, elementIn1, elementIn2) => {
        if ((nums1.length + nums2.length) % 2 === 0) {
            let arr = [nums1[elementIn1], nums2[elementIn2], nums1[elementIn1 + 1], nums2[elementIn2 + 1]]
            arr = arr.sort((item1, item2) => {
                return item1 - item2
            })
            return (arr[0] + arr[1]) / 2
            // console.log(arr)
        } else {
            let arr = [nums1[elementIn1], nums2[elementIn2]]
            arr = arr.sort((item1, item2) => { return item1 - item2 })
            return arr[0]
        }
    }
    /**
     * 
     * 
     * 123XX456-> 8/2
     * 123x456 -> 7/2
     * 
     *  */
    let left = 0
    let right = nums2.length - 1
    let expected = (nums1.length + nums2.length) % 2 === 0 ? ((nums1.length + nums2.length) >> 1) - 1 : (nums1.length + nums2.length) >> 1
    while (left <= right) {

        let mid = left + ((right - left) >> 1)
        let numberInNums2 = mid + 1


        let numberInNums1 = expected - numberInNums2
        if (numberInNums1 < 0) {
            right = mid - 1
            continue
        }
        if (numberInNums1 > nums1.length) {
            left = mid + 1
            continue
        }
        let nextIn2 = nums2[mid + 1]
        let nextIn1 = nums1[numberInNums1]
        if (nums1[numberInNums1 - 1] === undefined) {
            if (nextIn1 >= nums2[mid]) {
                return findMedian(nums1, nums2, numberInNums1, mid + 1)
            }
            right = mid - 1
            continue
        }
        if (nextIn1 === undefined) { // at last
            if (nextIn2 >= nums1[numberInNums1 - 1]) {
                return findMedian(nums1, nums2, numberInNums1, mid + 1)
            } else {
                left = mid + 1
            }
        } else if (nextIn2 === undefined) {
            if (nextIn1 >= nums2[mid]) {
                return findMedian(nums1, nums2, numberInNums1, mid + 1)
            } else {
                right = mid - 1
            }
        } else {
            if (nextIn2 >= nums1[numberInNums1 - 1] && nextIn1 >= nums2[mid]) {
                return findMedian(nums1, nums2, numberInNums1, mid + 1)
            }
            if (nextIn1 < nums2[mid]) {
                right = mid - 1
                continue
            }
            if (nextIn2 < nums1[numberInNums1 - 1]) {
                left = mid + 1
                continue
            }
        }
    }
    return findMedian(nums1, nums2, expected, 0)
};