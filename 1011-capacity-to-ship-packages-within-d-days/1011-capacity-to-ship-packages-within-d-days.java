class Solution {
    public int shipWithinDays(int[] weights, int days) {
        
        if(weights.length == 0 || weights == null || days == 0)
            return 0;
        
        int maxWeight = 0, totalWeight = 0;
        for(int weight: weights){
            maxWeight  = Math.max(weight, maxWeight);
            totalWeight += weight;
        }
        
        
        if(weights.length == days)
            return maxWeight;
        
        int start = maxWeight, end = totalWeight, ans = 0;
        while(start <= end){
            int mid = start + ((end - start) >> 1);
            if(canShip(weights, mid, days)){
                ans = mid;
                end = mid - 1;
            } else start = mid + 1;
        }
        return ans;
    }
    private boolean canShip(int weights[], int maxWeight, int days){
        int sumOfWeights = 0, day = 1;
        for(int i = 0; i < weights.length; i++){
            sumOfWeights += weights[i];
            if(sumOfWeights > maxWeight){
                day++;
                sumOfWeights = weights[i];
            }
            if(day > days)
                return false;
        }
        return true;
    }
}