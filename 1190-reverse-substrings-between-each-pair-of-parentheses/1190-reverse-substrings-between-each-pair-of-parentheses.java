class Solution {
    public String reverseParentheses(String s) {
        Stack<Integer> st = new Stack<>();
        int len = s.length();
       int pair[] = new int[len];
        for(int i = 0; i < len; i++){
            if(s.charAt(i) == '('){
                st.push(i);
            } else if(s.charAt(i) == ')'){
                int j = st.pop();
                pair[j] = i;
                pair[i] = j;
            }
        }
        StringBuilder sb = new StringBuilder();
        for(int i = 0, d = 1; i<len; i += d){
            if(s.charAt(i) == '(' || s.charAt(i) == ')'){
                i = pair[i];
                d = -d;
            } else sb.append(s.charAt(i));
        }
        return sb.toString();
    }
}