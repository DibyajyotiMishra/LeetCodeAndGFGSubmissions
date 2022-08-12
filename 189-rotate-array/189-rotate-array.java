class Solution {
    public void rotate(int[] nums, int k) {
        
        k %= nums.length;
        
        if(k < 0)
            k+= nums.length;
        
       // reverse from arr[0] -----> arr[arr.length - k - 1]
        reverse(nums, 0, nums.length - k - 1);
       
        // reverse from arr[arr.length - k] ------> arr[arr.length - 1]
        reverse(nums, nums.length-k, nums.length-1);
        
        // reverse the entire array.
        reverse(nums, 0, nums.length-1);
    }
    public void reverse(int nums[], int left, int right) {
        int start = left;
        int end = right;
        
        while(start <= end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            
            start++; end--;
        }
    }
}