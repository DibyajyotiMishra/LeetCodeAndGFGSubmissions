class Solution {
    public int subarraySum(int[] nums, int k) {
       if(nums.length < 1)
           return 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        int count = 0, sum = 0;
        for(int i = 0; i < nums.length; i++){
            sum += nums[i];
            
            if(sum == k)
                count++;
            
            if(map.containsKey(sum-k))
                count += map.get(sum-k);
            
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        
        return count;
    }
}