class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int totRows = matrix.length, totCols = matrix[0].length;
        int curRow = 0, curCol = totCols-1; 
        while(curRow < totRows && curCol >= 0) {
            if(matrix[curRow][curCol] == target)
                return true;
            else if(matrix[curRow][curCol] < target)
                curRow++;
            else curCol--;
        }
        
        return false;
    }
}