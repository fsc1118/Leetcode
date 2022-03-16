/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let characterComposition = new Set()
    let left = 0, right = 0
    let max = 0
    while (right < s.length) {
        if (characterComposition.has(s[right])) {
            while (s[left] !== s[right]) {
                characterComposition.delete(s[left++])
            }
            characterComposition.delete(s[left++])
        }
        max = Math.max(max, right - left + 1)
        characterComposition.add(s[right++])
    }
    return max
}