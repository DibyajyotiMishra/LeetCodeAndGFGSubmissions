class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int n = nums.length, minDistance = Integer.MAX_VALUE, ans = -1;
        for(int i = 0; i < n-2; i++) {
            int j = i+1, k = n-1;
            while(j < k) {
                int sum = nums[i] + nums[j] + nums[k];
                if(Math.abs(target-sum) < minDistance) {
                    minDistance = Math.abs(target-sum);
                    ans = sum;
                }
                if(target-sum == 0)
                    return sum;
                else if(target < sum)
                    k--;
                else j++;
            }
        }
        
        return ans;
    }
}