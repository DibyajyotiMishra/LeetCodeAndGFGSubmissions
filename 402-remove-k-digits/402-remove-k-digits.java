class Solution {
    public String removeKdigits(String num, int k) {
        int size = num.length();
        
        if(k == size)
            return "0";
        Stack<Character> st = new Stack<>();
        int index = 0;
        while(index < size){
            while(k > 0 && !st.isEmpty() && st.peek() > num.charAt(index)){
                st.pop();
                k--;
            } 
            st.push(num.charAt(index));
            index++;
        }
        while(k-- > 0)
            st.pop();
        
        StringBuilder sb = new StringBuilder();
        while(!st.isEmpty())
            sb.append(st.pop());
        
        sb.reverse();
        while(sb.length()>1 && sb.charAt(0) == '0')
            sb.deleteCharAt(0);
        
        return sb.toString();
    }
}