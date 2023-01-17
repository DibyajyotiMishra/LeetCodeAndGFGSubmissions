class Solution {
    public int singleNumber(int[] nums) {
        int ones = 0; // for elements occuring 1st, 4th, 7th, ... times
        int twos = 0; // for elements occuring 2nd, 5th, 8th, ... times
        for(int num: nums) {
            ones = (ones ^ num) & ~(twos);
            twos = (twos ^ num) & ~(ones);
        }
        
        return ones;
    }
}