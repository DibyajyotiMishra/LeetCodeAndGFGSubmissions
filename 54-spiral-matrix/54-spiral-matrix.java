class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> spiralMatrix = new ArrayList<>();
        int top = 0, left = 0, down = matrix.length - 1, right = matrix[0].length - 1;
        
        int curDir = 0;
        while(top <= down && left <= right) {
            if(curDir == 0) {
                // Move left ------> right
                for(int i = left; i <= right; i++) {
                    spiralMatrix.add(matrix[top][i]);
                }
                top++;
            }
            if(curDir == 1) {
                // Move top ------> bottom
                for(int i = top; i <= down; i++) {
                    spiralMatrix.add(matrix[i][right]);
                }
                right--;
            }
            if(curDir == 2) {
                // Move right ------> left
                for(int i = right; i >= left; i--) {
                    spiralMatrix.add(matrix[down][i]);
                }
                down--;
            }
            if(curDir == 3) {
                // Move bottom ------> top
                for(int i = down; i >= top; i--) {
                    spiralMatrix.add(matrix[i][left]);
                }
                left++;
            }
            curDir = (curDir + 1) % 4;
        }
        return spiralMatrix;
    }
}