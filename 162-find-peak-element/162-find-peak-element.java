class Solution {
    public int findPeakElement(int[] nums) {
        int left = 0, right = nums.length-1;
        int mid = 0;
        while(left <= right){
            mid = (left + right) >> 1;
            if((mid == 0 || nums[mid] >= nums[mid-1]) && (mid == nums.length-1 || nums[mid] >= nums[mid+1]))
                break;
            else if(mid > 0 && nums[mid-1] > nums[mid])
                right = mid-1;
            else left = mid+1;
        }
        return mid;
    }
}