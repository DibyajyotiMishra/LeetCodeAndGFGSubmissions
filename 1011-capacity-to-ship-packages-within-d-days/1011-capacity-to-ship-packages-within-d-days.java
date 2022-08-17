class Solution {
    public int shipWithinDays(int[] weights, int days) {
        int sum = 0, max = 0;
        for(int wt: weights){
            sum += wt;
            max = Math.max(max, wt);
        }
        int lo = max, hi = sum, ans = 0;
        while(lo <= hi){
            int mid = lo + ((hi-lo) / 2);
            if(canShip(weights, mid, days)){
                ans = mid;
                hi = mid - 1;
            } else lo = mid + 1;
        }
        return ans;
    }
    
    private boolean canShip(int weights[], int mid, int days){
        int sum = 0, d = 1;
        for(int i = 0; i < weights.length; i++){
            sum += weights[i];
            
            if(sum > mid){
                d++;
                sum = weights[i];
            }
        }
        return d <= days;
    }
}