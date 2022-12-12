class Solution {
    int dp[];
    public int fib(int n) {
        dp = new int[n+1];
        Arrays.fill(dp, -1);
        return solve(n);
    }
    int solve(int n) {
        if(n == 0)
            return 0;
        if(n == 1)
            return 1;
        if(dp[n] != -1)
            return dp[n];
        return fib(n-1) + fib(n-2);
    }
}