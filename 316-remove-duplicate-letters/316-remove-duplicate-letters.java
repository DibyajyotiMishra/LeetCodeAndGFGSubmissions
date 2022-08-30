class Solution {
    public String removeDuplicateLetters(String s) {
        int len = s.length(); // length of the string.
        
        boolean visited[] = new boolean[26];
        int lastIndex[] = new int[26];
        
        for(int i = 0; i < len; i++){
            lastIndex[s.charAt(i) - 'a'] = i; // find the last index of each char.
        }
        
        Stack<Integer> st = new Stack<>();
        for(int i = 0; i < len; i++){
            int c = s.charAt(i) - 'a';
            
            if(visited[c]) continue; // skip over duplicate elements.
            
            visited[c] = true;
            
            while(!st.isEmpty() && st.peek() > c && lastIndex[st.peek()] > i)
                visited[st.pop()] = false;
            st.push(c);
        }
        
        StringBuilder ans = new StringBuilder();
        for(int i : st)
            ans.append((char)(i+'a'));
            
        return ans.toString();
    }
}