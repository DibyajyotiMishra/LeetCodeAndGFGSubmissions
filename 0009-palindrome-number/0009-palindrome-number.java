class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0 || (x != 0 && x % 10 == 0))
            return false;
        int revNum = 0;
        int num = x;
        while(x > revNum){
            revNum = revNum * 10 + x % 10;
            x /= 10;
        }
        return (revNum == x || x == revNum / 10);
    }
}