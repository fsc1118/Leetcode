class Solution {
    Map<String, Integer> map = new HashMap<>();
    int length;
    List<Integer> res = new ArrayList<>();
    boolean hasStart[];
    int target;
    public List<Integer> findSubstring(String s, String[] words) {
        length = words[0].length();
        target = words.length;
        for (String i : words) {
            map.put(i, map.getOrDefault(i, 0) + 1);
        }
        hasStart = new boolean[s.length()];
        for (int i = 0; i < s.length(); i++) {
            if (hasStart[i]) {
                continue;
            } 
            canStart(s, i);
        }
        return res;
    }
    private void canStart(String s, int start) {
        int num = 0;
        int left = start;
        int right = start;
        while (right + length <= s.length()) {
            String string = s.substring(right, right + length);
            hasStart[left] = true;
            if (!map.containsKey(string)) {
                while (left < right) {
                    String i = s.substring(left, left + length);
                    map.put(i, map.get(i) + 1);
                    hasStart[left] = true;
                    left += length;
                }
                return;
            }
            while (map.get(string) == 0) {
                String removedString = s.substring(left, left + length);
                map.put(removedString, map.get(removedString) + 1);
                num--;
                hasStart[left] = true;
                left += length;
            }
            map.put(string, map.get(string) - 1);
            num++;
            if (num == target) {
                res.add(left);
            }
            hasStart[left] = true;
            right += length;
        }
        while (left + length <= s.length()) {
            String string = s.substring(left, left + length);
            map.put(string, map.get(string) + 1);
            hasStart[left] = true;
            left += length;
        }
    }
}