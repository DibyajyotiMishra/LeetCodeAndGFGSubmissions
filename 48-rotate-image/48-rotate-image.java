class Solution {
    public void rotate(int[][] mat) {
        int r = mat.length;
        int c = mat[0].length;
        
        // swap 1st and last row.
        for(int i = 0; i< r/2; i++){
            for(int j = 0; j<c; j++){
                int tmp = mat[i][j];
                mat[i][j] = mat[r-1-i][j];
                mat[r-1-i][j] = tmp;
            }
        }
        
        // take transpose of the matrix
        for(int i = 0; i<r; i++){
            for(int j = i; j< c; j++){
                int tmp = mat[i][j];
                mat[i][j] = mat[j][i];
                mat[j][i] = tmp;
            }
        }
    }
}