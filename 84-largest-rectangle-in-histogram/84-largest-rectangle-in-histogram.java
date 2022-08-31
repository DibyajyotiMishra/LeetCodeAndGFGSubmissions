class Solution {
    public int largestRectangleArea(int[] heights) {
        int n = heights.length;
        int lsmall[] = new int[n];
        int rsmall[] = new int[n];
        Stack<Integer> st = new Stack<>();
        for(int i = 0; i < n; i++){
            while(!st.isEmpty() && heights[st.peek()] >= heights[i]){
                st.pop();
            }
            if(st.isEmpty())
                lsmall[i] = 0;
            else lsmall[i] = st.peek() + 1;
            st.push(i);
        }
        
        while(!st.isEmpty())
            st.pop();
        
        int maxArea = 0;
        for(int i = n-1; i >= 0; i--){
            while(!st.isEmpty() && heights[st.peek()] >= heights[i]){
                st.pop();
            }
            if(st.isEmpty())
                rsmall[i] = n-1;
            else rsmall[i] = st.peek() - 1;
            st.push(i);
            
            maxArea = Math.max(maxArea, heights[i]*(rsmall[i]-lsmall[i]+1));
        }
        return maxArea;
    }
}