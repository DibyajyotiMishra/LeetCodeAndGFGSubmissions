class Solution {

    public int scoreOfParentheses(String s) {
        Stack<Integer> st = new Stack<>();
        int curScore = 0;
        for (int ch : s.toCharArray()) {
            if (ch == '(') {
                st.push(curScore);
                curScore = 0;
            } else if (ch == ')') {
                curScore = st.pop() + Math.max(2 * curScore, 1);
            }
        }
        return curScore;
    }
}
