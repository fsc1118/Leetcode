/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let leftRes = 0
    let rightRes = 0
    let maxLengthWithSingleCenter = () => {
        let max = (center) => {
            let length = 1
            let left = center - 1
            let right = center + 1
            while (left >= 0 && right < s.length) {
                if (s[left] === s[right]) {
                    length += 2
                } else {
                    break
                }
                left--
                right++
            }
            return length
        }
        for (let i = 0; i < s.length; i++) {
            let length = max(i)
            if (length > rightRes - leftRes + 1) {
                leftRes = i - (length >> 1)
                rightRes = i + (length >> 1)
            }
        }
    }
    let maxLengthWithDoubleCenter = () => {
        let max = (centerLeft, centerRight) => {
            if (s[centerLeft] !== s[centerRight]) {
                return 0
            }
            let length = 2
            let left = centerLeft - 1
            let right = centerRight + 1
            while (left >= 0 && right < s.length) {
                if (s[left] === s[right]) {
                    length += 2
                } else {
                    break
                }
                left--
                right++
            }
            return length
        }
        for (let i = 0; i < s.length - 1; i++) {
            let length = max(i, i + 1) >> 1
            if (max(i, i + 1) > rightRes - leftRes + 1) {
                leftRes = i - length + 1
                rightRes = i + 1 + length - 1
            }
        }
    }
    maxLengthWithSingleCenter()
    maxLengthWithDoubleCenter()
    return s.substring(leftRes, rightRes + 1)
};