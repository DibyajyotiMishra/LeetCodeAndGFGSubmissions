class Solution {
    public int singleNumber(int[] nums) {
        int curXor = 0;
        for(int num : nums)
            curXor ^= num;
        return curXor;
    }
}