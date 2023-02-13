class Solution {
    public int subarraySum(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int curSum = 0, cnt = 0;
        for(int num : nums) {
            curSum += num;
            if(curSum == k)
                cnt++;
            if(map.containsKey(curSum-k))
                cnt += map.get(curSum-k);
            map.put(curSum, map.getOrDefault(curSum, 0) + 1);
        }
        return cnt; 
    }
}