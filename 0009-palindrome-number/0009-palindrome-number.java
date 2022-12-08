class Solution {
    public boolean isPalindrome(int x) {
     if(x < 0)
         return false;
        int num = x, revNum = 0;
        while(x > 0){
            revNum = revNum * 10 + x % 10;
            x /= 10;
        }
        return num == revNum;
    }
}