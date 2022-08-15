class Solution {
    public int findMin(int[] nums) {
        if(nums.length <= 0)
            return 0;
        if(nums.length == 1)
            return nums[0];
        
        int left = 0, right = nums.length-1;
        
        while(left <= right) {
            int mid = left + ((right-left) >> 1);
            if(mid > 0 && nums[mid-1] > nums[mid])
                return nums[mid];
            
            if(nums[left] <= nums[mid] && nums[mid] > nums[right])
                left = mid + 1;
            else right = mid - 1;
        }
        return nums[left];
    }
}