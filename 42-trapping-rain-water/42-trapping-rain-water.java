class Solution {

    public int trap(int[] height) {
        int maxWater = 0;
        int leftMax = 0, rightMax = 0;
        int left = 0, right = height.length - 1;
        while (left <= right) {
            if (height[left] <= height[right]) {
                if (height[left] >= leftMax) leftMax = height[left]; else maxWater += (leftMax - height[left]);
                left++;
            } else {
                if (height[right] >= rightMax) rightMax = height[right]; else maxWater += (rightMax - height[right]);
                right--;
            }
        }
        return maxWater;
    }
}
