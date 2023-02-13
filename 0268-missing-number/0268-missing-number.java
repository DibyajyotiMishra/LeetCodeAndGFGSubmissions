class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;
        int totalSum = (n * (n+1)) >> 1;
        int curSum = 0;
        for(int num: nums)
            curSum += num;
        return totalSum - curSum;
    }
}