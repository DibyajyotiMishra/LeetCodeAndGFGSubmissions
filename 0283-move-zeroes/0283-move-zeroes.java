class Solution {
    public void moveZeroes(int[] nums) {
        int k = 0;
        int n = nums.length;
        while(k < n){
            if(nums[k] == 0)
                break;
            else k++;
        }
        
        int i = k, j = k+1;
        while(i < n && j < n) {
            if(nums[j] != 0) {
                swap(nums, i, j);
                i++;
            }
            j++;
        }
    }
    
    private void swap(int arr[], int st, int en) {
        int temp = arr[st];
        arr[st] = arr[en];
        arr[en] = temp;
    }
}