class Solution {
    public void rotate(int[][] matrix) {
        // i: row iterator
        // j : column iterator
        
        int n = matrix.length;
        
        for(int i = 0; i < n; i++) {
            for(int j = i+1; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
        
        
        int k = n-1;
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n/2; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[i][k];
                matrix[i][k--] = temp;
            }
            k = n - 1;
        }
    }
}