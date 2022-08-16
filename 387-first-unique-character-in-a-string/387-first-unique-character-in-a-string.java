class Solution {
    public int firstUniqChar(String s) {
        int freqArr[] = new int[26];
        for(int i = 0; i < s.length(); i++){
            freqArr[s.charAt(i) - 'a']++;
        }
        for(int i = 0; i < s.length(); i++){
            if(freqArr[s.charAt(i) - 'a'] == 1)
                return i;
        }
        return -1;
    }
}