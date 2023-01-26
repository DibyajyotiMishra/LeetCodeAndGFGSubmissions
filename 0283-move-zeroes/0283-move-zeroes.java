class Solution {
    public void moveZeroes(int[] nums) {
        int firstZeroInd = 0;
        int n = nums.length;
        for(int i = 0; i < n; i++){
            if(nums[i] == 0)
                break;
            else firstZeroInd++;
        }
        
        int i = firstZeroInd, j = i+1;
        while(i < n && j < n){
            if(nums[j] != 0){
                swap(nums, i++, j);
            }
            j++;
        }
    }
    
    private void swap(int nums[], int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}