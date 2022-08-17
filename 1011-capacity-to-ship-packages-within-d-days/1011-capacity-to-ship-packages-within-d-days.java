class Solution {
    public int shipWithinDays(int[] weights, int days) {
       int lo = 0, hi = 0;
        for(int weight: weights){
            lo = Math.max(lo, weight);
            hi += weight;
        }
        while(lo < hi) {
            int mid = (lo+hi) >> 1, need = 1, cur = 0;
            for(int weight: weights){
                if(cur+weight > mid){
                    need += 1;
                    cur = 0;
                }
                cur += weight;
            }
                if(need > days)
                    lo = mid + 1;
                else hi = mid;
        }
        return lo;
    }
}