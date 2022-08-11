class Solution {
    public int subarraySum(int[] nums, int k) {
       if(nums.length == 0)
           return 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        int count = 0;
        map.put(0, 1);
        int sum = 0;
        for(int num: nums){
            sum += num;
            if(map.containsKey(sum-k))
                count += map.get(sum-k);
            map.put(sum, map.getOrDefault(sum, 0)+1);
        }
        return count;
    }
}