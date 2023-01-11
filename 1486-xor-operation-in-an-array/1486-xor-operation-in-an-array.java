class Solution {
    public int xorOperation(int n, int start) {
        int startWithoutFirstBit = start >> 1;
        int from = startWithoutFirstBit;
        int to = from + n - 1;
        int xor = xorOfRange(from, to);
        int answer = xor << 1;
        if((start % 2 == 1) && (n % 2) == 1)
            answer |= 1;
        return answer;
    }
    
    
    private static int xorOfRange(int from, int to) {
        return xorOfWholeNumbers(from-1) ^ xorOfWholeNumbers(to);
    } 
    
    private static int xorOfWholeNumbers(int num) {
        if(num % 4 == 0) return num;
        else if(num % 4 == 1) return 1;
        else if(num % 4 == 2) return (num+1);
        else if(num % 4 == 3) return 0;
        return 0;
    }
}