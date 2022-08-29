class Solution {
    public String removeDuplicates(String s, int k) {
        Stack<int[]> st = new Stack<>();
        
        for(int i = 0; i < s.length(); i++){
            if(st.size() > 0 && s.charAt(st.peek()[0]) == s.charAt(i))
                st.peek()[1]++;
            else st.push(new int[]{i,1});
            
            if(st.peek()[1] == k)
                st.pop();
        }
        
        StringBuilder sb = new StringBuilder();
        while(st.size() > 0){
            int topChar[] = st.pop();
            while(topChar[1]-- > 0)
                sb.append(s.charAt(topChar[0]));
        }
        return sb.reverse().toString();
    }
}