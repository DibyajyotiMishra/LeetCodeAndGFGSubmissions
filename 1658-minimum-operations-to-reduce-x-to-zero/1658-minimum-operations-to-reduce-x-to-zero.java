class Solution {
    public int minOperations(int[] nums, int x) {
        int n = nums.length, sum = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, -1);
        for(int i = 0; i < nums.length; i++){
            sum += nums[i];
            map.put(sum, i);
        }
        int trgt = sum - x;
        
        if(trgt < 0)
            return -1;
        
        sum = 0;
        int remLength = Integer.MIN_VALUE;
        for(int i = 0; i < nums.length; i++){
            sum += nums[i];
            if(map.containsKey(sum-trgt)){
                remLength = Math.max(remLength, i - map.get(sum - trgt));
            }
        }
        return remLength == Integer.MIN_VALUE ? -1 : n - remLength;
    }
}