class Solution {
    int dp[] = new int[38];
    Solution() {
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 1;
        for(int i = 3; i < dp.length; i++)
            dp[i] = -1;
    }
    public int tribonacci(int n) {
        if(dp[n] != -1)
            return dp[n];
        int sum = tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1);
        dp[n] = sum;
        return sum;
    }
}