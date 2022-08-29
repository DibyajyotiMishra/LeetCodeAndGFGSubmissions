class Solution {
    public String removeDuplicates(String s, int k) {
        Stack<int[]> st = new Stack<>();
        for(int i = 0; i < s.length(); i++){
            if(st.size() > 0 && s.charAt(st.peek()[0]) == s.charAt(i))
                st.peek()[1]++;
            else st.push(new int[]{i, 1});
            
            if(st.peek()[1] == k)
                st.pop();
        }
        StringBuilder answer = new StringBuilder();
        while(st.size() > 0){
            int top[] = st.pop();
            while(top[1]-- > 0)
                answer.append(s.charAt(top[0]));
        }
        return answer.reverse().toString();
    }
}