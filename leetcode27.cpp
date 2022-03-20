class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int pointer1 = 0;
        int pointer2 = 0;
        while (pointer2 < nums.size()) {
            if (nums[pointer2] == val) {
                pointer2++;
                continue;
            }
            nums[pointer1++] = nums[pointer2];
            pointer2++;
        }
        return pointer1;
    }
};