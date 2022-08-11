class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int i = 0, j = 0;
        int sum = 0, minLen = Integer.MAX_VALUE;
        while(j<nums.length){
            sum += nums[j++];
            while(sum >= target){
                minLen = Math.min(minLen, j-i);
                sum -= nums[i++];
            }   
        }
        return minLen == Integer.MAX_VALUE ? 0 : minLen;
    }
}