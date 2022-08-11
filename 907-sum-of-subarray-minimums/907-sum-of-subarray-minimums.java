class Solution {
    public int sumSubarrayMins(int[] arr) {
        int mod = 1000000007;
        int n = arr.length;
        
        Stack<Integer> st = new Stack<>();
        int nse[] = new int[n];
        int pse[] = new int[n];
        
        Arrays.fill(nse, n);
        for(int i = 0; i < n; i++){
            while(!st.isEmpty() && arr[st.peek()] >= arr[i])
                nse[st.pop()] = i;
            pse[i] = st.isEmpty() ? -1 : st.peek();
            st.push(i);
        }
        
        long sumOfDiff = 0;     
        for(int i = 0; i < n; i++) {
            long leftInd = i - pse[i];
            long rightInd = nse[i] - i;
            sumOfDiff += arr[i] * leftInd * rightInd;
            sumOfDiff %= mod;
        }
        return (int) sumOfDiff;
    }
}