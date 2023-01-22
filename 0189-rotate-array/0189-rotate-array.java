class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k %= n;
        reverse(nums, 0, n-k-1);
        reverse(nums, n-k, n-1);
        reverse(nums, 0, n-1);
    }
    
    private void reverse(int nums[], int i, int j) {
        while(i <= j) {
            int temp = nums[i];
            nums[i++] = nums[j];
            nums[j--] = temp;
        } 
    }
}

// 1 2 3 4 5 6 7
// 4 3 2 1 7 6 5
// 5 6 7 1 2 3 4

// 5 6 7 1 2 3 4