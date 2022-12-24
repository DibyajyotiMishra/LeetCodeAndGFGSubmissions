class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length <= 0)
            return 0;
        
        HashSet<Integer> set = new HashSet<>();
        for(int num: nums)
            set.add(num);
        
        int maxLength = 0;
        for(int i = 0; i < nums.length; i++) {
            int curLength = 1;
            if(!set.contains(nums[i] - 1)) {
                int curEl = nums[i];
                while(set.contains(curEl + 1)) {
                    curLength++; curEl++;
                }
                maxLength = Math.max(maxLength, curLength);
            }
        }
        
        return maxLength;
    }
}