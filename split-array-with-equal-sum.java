class Solution {
    public int findSplitPoint(int nums[]) {
        int leftSum = 0, rightSum = 0;

        for (int i = 0; i < nums.length; i++) {
            leftSum += nums[i];
        }

        for (int i = nums.length - 1; i >= 0; i--) {
            rightSum += nums[i];

            leftSum -= nums[i];

            if (leftSum == rightSum) {
                return i;
            }
        }
        return -1;
    }
}