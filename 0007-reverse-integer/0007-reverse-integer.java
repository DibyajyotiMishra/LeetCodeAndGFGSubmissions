class Solution {
    public int reverse(int x) {
        int sign = x < 0 ? -1 : 1;
        x = Math.abs(x);
        int res = 0;
        while(x > 0){
            if(res > Integer.MAX_VALUE / 10 || res < Integer.MIN_VALUE / 10)
                return 0;
            res = res * 10 + x % 10;
            x /= 10;
        }
        return sign * res;
    }
}