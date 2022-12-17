class Solution {
    public boolean check(int[] nums) {
        int n = nums.length;
        int rotation = 0;
        for(int i = 0; i < n; i++) {
            if(nums[i] > nums[(i+1) % n])
                rotation++;
            if(rotation > 1)
                return false;
        }  
        return true;
    }
}