#define MAX(A, B) (A) > (B) ? (A) : (B)
#define MIN(A, B) (A) < (B) ? (A) : (B)
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int numsSize = nums.size();
        int right = numsSize - 1;
        vector<int>* res = new vector<int>();
        // find leftest
        int left = 0;
        int leftMin = 0x3f3f3f3f;
        while (left <= right) {
            int mid = left + ((right - left) >> 1);
            if (nums[mid] == target) {
                leftMin = MIN(mid, leftMin);
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        res->push_back(leftMin == 0x3f3f3f3f ? -1 : leftMin);
        left = 0;
        right = numsSize - 1;
        int rightMin = -1;
        while (left <= right) {
            int mid = left + ((right - left) >> 1);
            if (nums[mid] == target) {
                rightMin = MAX(mid, rightMin);
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        res->push_back(rightMin == -1 ? -1 : rightMin);
        return *res;
    }
};