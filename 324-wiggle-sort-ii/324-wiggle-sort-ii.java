class Solution {
    public void wiggleSort(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        int i = 1, j = nums.length-1;
        int res[] = new int[n];
        while(i < n) {
            res[i] = nums[j];
            j--;
            i += 2;
        }
        
        i = 0;
        while(i < n) {
            res[i] = nums[j];
            j--;
            i += 2;
        }
        
        for(i = 0; i < n; i++)
            nums[i] = res[i];
    }
}