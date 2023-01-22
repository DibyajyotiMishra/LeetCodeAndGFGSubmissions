class Solution {
    public boolean check(int[] nums) {
        int unsortedPos = 0;
        int n = nums.length;
        for(int i = 0; i < n; i++) {
            if(nums[i] > (nums[(i+1)  % n]))
                unsortedPos++;
            if(unsortedPos > 1)
                return false;
        }
        return true;
    }
}