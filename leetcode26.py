class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        pointer1 = 0
        pointer2 = 0
        while pointer2 < len(nums):
            if pointer2 != 0 and nums[pointer2] == nums[pointer2 - 1]:
                pointer2 += 1
                continue
            nums[pointer1]  = nums[pointer2]
            pointer1 += 1
            pointer2 += 1
        return pointer1