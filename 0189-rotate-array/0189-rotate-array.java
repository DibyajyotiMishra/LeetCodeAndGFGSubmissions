class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k %= n;
        reverseTill(nums, 0, n-k-1);
        reverseTill(nums, n-k, n-1);
        reverseTill(nums, 0, n-1);
    }
    
    private void reverseTill(int nums[], int st, int en) {
        while(st <= en) {
            int temp = nums[st];
            nums[st++] = nums[en];
            nums[en--] = temp;
        }
    }
}


// n : 7, k : 3

// 1 2 3 4 5 6 7

// 4 3 2 1 7 6 5

// 5 6 7 1 2 3 4
