class Solution {
    public int firstMissingPositive(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] <= 0) {
                nums[i] = 0;
            }
        }
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                continue;
            }
            int original = nums[i];
            if (original == Integer.MIN_VALUE) {
                continue;
            }
            if (nums[i] < 0) { // this position has been labeled as used
                original = -original;
            }
            int position = original - 1;
            if (position >= nums.length) {
                continue;
            }
            if (nums[position] > 0) {
                nums[position] = -nums[position];
            } else if (nums[position] == 0) {
                nums[position] = Integer.MIN_VALUE;
            }
        }
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] >= 0) {
                return i + 1;
            }
        }
        return nums.length + 1;
    }
}