class Solution {
    public int[] twoSum(int[] nums, int target) {
        // map -> {value, index}
        HashMap<Integer, Integer> map = new HashMap<>();
        int res[] = new int[2];
        map.put(nums[0], 0);
        for(int i = 1; i < nums.length; i++){
            if(map.containsKey(target-nums[i])) {
                res[0] = map.get(target-nums[i]);
                res[1] = i;
            } else {
                map.put(nums[i], i);
            }
        }
        
        return res;
    }
}