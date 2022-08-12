class Solution {
    public int maxArea(int[] height) {
        int maxWater = 0, curWater = 0, l = 0, r = height.length-1;
        while(l <= r) {
            if(height[l] <= height[r]) {
                curWater = height[l] * (r-l);
                l++;
            } else {
                curWater = height[r] * (r-l);
                r--;
            }
            maxWater = Math.max(maxWater, curWater);
        }
        
        return maxWater;
    }
}