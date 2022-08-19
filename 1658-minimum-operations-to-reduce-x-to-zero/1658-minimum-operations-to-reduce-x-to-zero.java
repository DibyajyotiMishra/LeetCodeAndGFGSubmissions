class Solution {
    public int minOperations(int[] nums, int x) {
        // Calculate total Sum of array.
        int totalSum = 0;
        for(int num: nums)
            totalSum += num;
        
        // try to maximise the middle elements subarray.
        int maxLength = -1, currSum = 0;
        for (int l=0, r=0; r<nums.length; r++) {
            currSum += nums[r];
            while (l <= r && currSum > totalSum - x) currSum -= nums[l++];
            if (currSum == totalSum - x) maxLength = Math.max(maxLength, r-l+1);
        }

	    return maxLength == -1 ? -1 : nums.length - maxLength;
    }
}