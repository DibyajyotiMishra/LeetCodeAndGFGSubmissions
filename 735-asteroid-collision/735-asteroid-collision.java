class Solution {

    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> st = new Stack<>();
        for (int i = 0; i < asteroids.length; i++) {
            if (st.isEmpty() || asteroids[i] > 0) st.push(asteroids[i]); else {
                while (true) {
                    int top = st.peek();
                    if (top < 0) {
                        st.push(asteroids[i]);
                        break;
                    } else if (top == Math.abs(asteroids[i])) {
                        st.pop();
                        break;
                    } else if (top > Math.abs(asteroids[i])) {
                        break;
                    } else {
                        st.pop();
                        if (st.isEmpty()) {
                            st.push(asteroids[i]);
                            break;
                        }
                    }
                }
            }
        }
        int ans[] = new int[st.size()];
        for (int i = st.size() - 1; i >= 0; i--) {
            ans[i] = st.pop();
        }
        return ans;
    }
}
