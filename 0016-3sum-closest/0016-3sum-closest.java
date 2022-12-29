class Solution {
    public int threeSumClosest(int[] A, int x) {
        Arrays.sort(A);
        int ans = 0, minDistance = Integer.MAX_VALUE, n = A.length;
        for(int i = 0; i < n-2; i++) {
            int j = i+1, k = n-1;
            while(j < k) {
                int sum = A[i] + A[j] + A[k];
                if(Math.abs(x - sum) < minDistance) {
                    ans = sum;
                    minDistance = Math.abs(x - sum);
                    while(j < k && A[j] == A[j+1])
                        j++;
                    while(j < k && A[k] == A[k-1])
                        k--;
                }
                if(x - sum == 0)
                    return sum;
                else if(x < sum)
                    k--;
                else j++;
            }
        }
        return ans;
    }
}