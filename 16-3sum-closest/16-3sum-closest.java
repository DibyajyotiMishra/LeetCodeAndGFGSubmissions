class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int curSum = nums[0] + nums[1] + nums[nums.length-1];
        int closestSum = curSum;
        int i = 0;
        while(i < nums.length - 2){
            if(i == 0 || nums[i] != nums[i-1]){
                int j = i+1;
                int k = nums.length - 1;
                while(j < k) {
                    curSum = nums[i] + nums[j] + nums[k];
                    if(curSum < target){
                        while(j < k && nums[j] == nums[j-1])
                            j++;
                        j++;
                    } else if(curSum > target){
                        while(j < k && nums[k] == nums[k-1])
                            k--;
                        k--;
                    }
                    else return curSum;
                    
                    if(Math.abs(target-closestSum) > Math.abs(target - curSum))
                        closestSum = curSum;
                }
            }
            i++;
        }
        return closestSum;
    }
}