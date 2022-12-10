class Solution {
    public boolean isPalindrome(String s) {
        // String Modifications
        
        s = s.replace(" ", "");
        s = s.replaceAll("[^a-zA-Z0-9]", "");
        s = s.toLowerCase();
        
        // finding the reverse of the string
        int len = s.length();
        char strs[] = s.toCharArray();
        String rev = reverse(strs, 0, len-1);
        
        // checking if it is exactly same if it is read backwards.
        return s.equals(rev);
    }
    
    private String reverse(char strs[], int start, int end){
        if(start > end)
            return new String(strs);
        char temp = strs[start];
        strs[start] = strs[end];
        strs[end] = temp;
        return reverse(strs, start+1, end-1);
    }
}