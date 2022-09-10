class Solution {
    public int maxProfit(int k, int[] prices) {
        int dp[][] = new int[2][k+1];
        for(int i = k; i > 0; i--){
            dp[0][k] = 0;
        }
        for(int i = prices.length-1; i>=0; i--){
            int cur[][] = new int[2][k+1];
            for(int j = 0; j<= 1; j++){
                for(int l = k; l >= 0; l--){
                    if(l == 0)
                        cur[j][l] = 0;
                    else if(l > 0) {
                        int profit = 0;
                        if(j == 1){
                            profit = Math.max(-1*prices[i] + dp[0][l], dp[1][l]);
                        } else {
                            profit = Math.max(prices[i] + dp[1][l-1], dp[0][l]);
                        }
                        cur[j][l] = profit;
                    }
                }
            }
            dp = cur;
        }
        return dp[1][k];
    }
}