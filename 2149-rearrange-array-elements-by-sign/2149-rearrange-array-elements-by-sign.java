class Solution {
    public int[] rearrangeArray(int[] nums) {
        int modNums[] = new int[nums.length];
        
        int posIndex = 0, negIndex = 1;
        int k = 0;
        
        for(int num: nums){
            if(num > 0){
                modNums[posIndex] = num;
                posIndex += 2;
            }
            else if(num < 0) {
                modNums[negIndex] = num;
                negIndex += 2;
            }
        }
        
        return modNums;
    }
}