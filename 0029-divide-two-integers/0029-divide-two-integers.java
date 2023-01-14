class Solution {
    public int divide(int dividend, int divisor) {
        if((dividend == (1 << 31)) && (divisor == -1))
            return (1 << 31) - 1;
        int sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
        int absDividend = Math.abs(dividend), absDivisor = Math.abs(divisor), ans = 0;
        for(int i = 31; i >= 0; i--) {
            if((absDividend >>> i) - absDivisor >= 0) {
                ans += (1 << i);
                absDividend -= (absDivisor << i);
            }
        }
        
        return sign * ans;
    }
}