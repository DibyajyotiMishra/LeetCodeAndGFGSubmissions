class Solution {
    public int[] searchRange(int[] nums, int target) {
        int startIndex = findStartIndex(nums, target);
        int endIndex = findEndIndex(nums, target);
        return new int[]{startIndex, endIndex};
    }
    
    public int findStartIndex(int nums[], int target){
        int low = 0, high = nums.length-1;
        int index = -1;
        while(low <= high){
            int mid = low + (high-low)/2;
            
            if(nums[mid] > target){
                high = mid - 1;
            } else if(nums[mid] < target){
                low = mid + 1;
            } else {
                index = mid;
                high = mid - 1;
            }
        }
        return index;
    }
    
    public int findEndIndex(int nums[], int target){
        int low = 0, high = nums.length-1;
        int index = -1;
        while(low <= high){
            int mid = low + (high-low)/2;
            
            if(nums[mid] > target){
                high = mid - 1;
            } else if(nums[mid] < target){
                low = mid + 1;
            } else {
                index = mid;
                low = mid + 1;
            }
        }
        return index;
    }
}