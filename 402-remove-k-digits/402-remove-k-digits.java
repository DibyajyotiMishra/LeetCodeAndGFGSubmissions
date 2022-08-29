class Solution {
    public String removeKdigits(String nums, int k) {
        int size = nums.length();
        if(k == size)
            return "0";
        
        Stack<Character> st = new Stack<>();
        int ind = 0;
        while(ind < size){
            while(k > 0 && !st.isEmpty() && st.peek() > nums.charAt(ind)){
                st.pop();
                k--;
            }
            st.push(nums.charAt(ind));
            ind++;
        }
        
        while(k-- > 0)
            st.pop();
        
        StringBuilder sb = new StringBuilder();
        while(!st.isEmpty()){
            sb.append(st.pop());
        }
        sb.reverse();
        while(sb.length()>1 && sb.charAt(0) == '0')
            sb.deleteCharAt(0);
        return sb.toString();
    }
}