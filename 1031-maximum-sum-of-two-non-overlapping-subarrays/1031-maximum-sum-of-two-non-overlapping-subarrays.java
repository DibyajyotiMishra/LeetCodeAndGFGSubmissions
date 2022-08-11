class Solution {
    public int maxSumTwoNoOverlap(int[] nums, int firstLen, int secondLen) {
        int prefixSum[] = new int[nums.length+1];
        int maxRVal = 0, maxLVal = 0, ans = 0;
        
        for(int i = 1; i <= nums.length; i++)
            prefixSum[i] = nums[i-1] + prefixSum[i-1];
        
        for(int i = firstLen; i <= nums.length-secondLen; i++){
            int curLVal = prefixSum[i] - prefixSum[i-firstLen];
            int curMVal = prefixSum[i+secondLen] - prefixSum[i];
            maxLVal = Math.max(maxLVal, curLVal);
            ans = Math.max(ans, maxLVal+curMVal);
        }
        
        for(int i = secondLen; i <= nums.length-firstLen; i++){
            int curMVal = prefixSum[i] - prefixSum[i-secondLen];
            int curLVal = prefixSum[i+firstLen] - prefixSum[i];
            maxRVal = Math.max(maxRVal, curMVal);
            ans = Math.max(ans, maxRVal+curLVal);
        }
        return ans;
    }
}