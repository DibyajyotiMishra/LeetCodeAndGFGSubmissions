class Solution {
    public int totalHammingDistance(int[] nums) {
        long sum = 0;
        for(int i = 0; i < 32; i++) {
            long setBits = 0;
            for(int num : nums) {
                setBits += (num >> i) & 1;
            }
            sum += (setBits) * (nums.length - setBits);
        }
        
        return (int)(sum);
    }
}