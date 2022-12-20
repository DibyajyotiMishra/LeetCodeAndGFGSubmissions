class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int cnt = 0, maxCnt = 0;
        for(int i = 0; i < nums.length; i++) {
            cnt++;
            if(nums[i] == 0)
                cnt=0;
            maxCnt = Math.max(maxCnt, cnt);
        }
        return maxCnt;
    }
}