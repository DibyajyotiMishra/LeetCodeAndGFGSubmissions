class Solution {
    public int[] rearrangeArray(int[] nums) {
        ArrayList<Integer> posNums = new ArrayList<>();
        ArrayList<Integer> negNums = new ArrayList<>();
        
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] < 0)
                negNums.add(nums[i]);
            else posNums.add(nums[i]);
        }
        
        int i = 0, j = 0, k = 0;
        while(i < posNums.size() && j < negNums.size()) {
            if(k % 2 == 0)
                nums[k++] = posNums.get(i++);
            else nums[k++] = negNums.get(j++);
        }
        
        while(i < posNums.size())
            nums[k++] = posNums.get(i++);
        
        while(j < negNums.size())
            nums[k++] = negNums.get(j++);
        
        return nums;
    }
}