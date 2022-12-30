class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        List<List<Integer>> ans = new ArrayList<>();
        for(int i = 0; i < nums.length-3; i++) {
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
    
    
    public List<List<Integer>> threeSum(int[] nums, long target, int ind) {
        List<List<Integer>> ans = new ArrayList<>();
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
    
    
    public List<List<Integer>> twoSum(int[] nums, long target, int ind) {
        List<List<Integer>> ans = new ArrayList<>();
        int low = ind, high = nums.length-1;
        while(low < high) {
            int sum = nums[low] + nums[high];
            if(sum > target) {
                high--;
            } else if(sum < target) {
                low++;
            } else {
                ans.add(new ArrayList<>(Arrays.asList(nums[low], nums[high])));
                
                while(low < high && nums[low] == nums[low+1]) low++;
                while(low < high && nums[high] == nums[high-1]) high--;
                low++; high--;
            }
        }
        
        return ans;
    }
}