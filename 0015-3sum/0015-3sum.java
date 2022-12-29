class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        int n = nums.length, i = 0;
        Arrays.sort(nums);
        List<List<Integer>> ans = new ArrayList<>();
        while(i < n-2) {
            if(i == 0 || (i > 0 && nums[i] != nums[i-1])) {
                int j = i+1, k = n-1;
                int trgt = - nums[i];
                while(j < k) {
                    int curSum = nums[j] + nums[k];
                    if(curSum == trgt) {
                        List<Integer> list = new ArrayList<>();
                        list.add(nums[i]);
                        list.add(nums[j]);
                        list.add(nums[k]);
                        ans.add(list);
                        while(j < k && nums[j] == nums[j+1]) j++;
                        while(j < k && nums[k] == nums[k-1]) k--;
                        j++; k--;
                    }
                    else if(trgt < curSum) 
                        k--;
                    else j++;
                }
            }
            i++;
        }
        
        return ans;
    }
}