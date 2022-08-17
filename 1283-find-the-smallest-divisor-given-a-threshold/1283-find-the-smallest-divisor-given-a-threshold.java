class Solution {
    public int smallestDivisor(int[] nums, int threshold) {
        int lo = 1, hi = (int)1e6;
        while(lo < hi){
            int mid = (lo + hi) / 2, sum = 0;
            for(int num: nums)
                sum += (num + mid - 1)/mid;
            if(sum > threshold)
                lo = mid + 1;
            else hi = mid;  
        }
        return lo;
    }
}