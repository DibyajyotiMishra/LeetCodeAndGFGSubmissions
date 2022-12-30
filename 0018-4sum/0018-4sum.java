class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        List<List<Integer>> ans = new ArrayList<>();
        for(int i = 0; i < nums.length - 3; i++) {
            if(i == 0 || (i > 0 && nums[i] != nums[i-1])) {
                List<List<Integer>> list = threeSum(nums, target-nums[i], i+1);
                for(int itr = 0; itr < list.size(); itr++) {
                    list.get(itr).add(nums[i]);
                    ans.add(list.get(itr));
                }
            }
        }
        
        return ans;
    }
    
    
    public List<List<Integer>> threeSum(int nums[], long target, int ind) {
        List<List<Integer>> ans = new ArrayList<>();
        int n = nums.length;
        for(int i = ind; i < nums.length-2; i++) {
            if(i == ind || (i > 0 && nums[i] != nums[i-1])) {
                List<List<Integer>> list = twoSum(nums, target-nums[i], i+1);
                for(int itr = 0; itr < list.size(); itr++) {
                    list.get(itr).add(nums[i]);
                    ans.add(list.get(itr));
                }
            }
        }
        
        return ans;
    }
    
    
    public List<List<Integer>> twoSum(int nums[], long target, int ind) {
        int n = nums.length;
        int lo = ind, hi = nums.length-1;
        List<List<Integer>> ans = new ArrayList<>();
        while(lo < hi) {
            long curSum = nums[lo] + nums[hi];
            
            if(curSum > target){
                hi--;
            }
            else if(curSum < target) {
                lo++;
            }
            else {
                ans.add(new ArrayList<>(Arrays.asList(nums[lo], nums[hi])));
                while(lo < hi && nums[lo] == nums[lo+1]) lo++;
                while(lo < hi && nums[hi] == nums[hi-1]) hi--;
                lo++; hi--;
            }
        }
        
        return ans;
    }
}