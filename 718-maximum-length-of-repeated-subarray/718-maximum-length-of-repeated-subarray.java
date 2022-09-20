class Solution {
    public int findLength(int[] nums1, int[] nums2) {
        int m = nums1.length, n = nums2.length;
        int dp[][] = new int[m+1][n+1];
        int ans = 0;
        for(int i = 0; i < m+1; i++)
            for(int j = 0; j < n+1; j++){
                if(i == 0 || j == 0)
                    dp[i][j] = 0;
                else if(i > 0 && j > 0 && nums1[i-1] == nums2[j-1])
                    dp[i][j] = 1 + dp[i-1][j-1];
                else if(i > 0 && j > 0)
                    dp[i][j] = 0;
                    ans = Math.max(ans,dp[i][j]);
            }
        return ans;
    }
}