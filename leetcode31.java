class Solution {
    public void nextPermutation(int[] num) {
        int i = num.length - 2;
        while (i >= 0) {
            int current = num[i];
            int next = num[i + 1];
            if (current < next) {
                for (int j = num.length - 1;; j--) {
                    if (num[j] > current) {
                        num[i] = num[j];
                        num[j] = current;
                        Arrays.sort(num, i + 1, num.length);
                        return;
                    }
                }
            } else {
                i--;
            }
        }
        Arrays.sort(num);
    }
}