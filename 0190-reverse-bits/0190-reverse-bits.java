public class Solution {
    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        int revBit = 0;
        for(int i = 0; i < 32; i++) {
            revBit = revBit << 1;
            if((n & (1 << i)) != 0)
                revBit = revBit | 1;
        }
        return revBit;
    }
}