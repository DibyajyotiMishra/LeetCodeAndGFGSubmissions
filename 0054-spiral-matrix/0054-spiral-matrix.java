class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> list = new ArrayList<>();
        
        int top = 0, left = 0, right = matrix[0].length - 1, down = matrix.length - 1;
        int d = 0;
        
        while(top <= down && left <= right) {
            switch(d) {
                case 0:
                    for(int i = left; i <= right; i++)
                        list.add(matrix[top][i]);
                    top++;
                    break;
                case 1:
                    for(int i = top; i <= down; i++)
                        list.add(matrix[i][right]);
                    right--;
                    break;
                case 2:
                    for(int i = right; i >= left; i--)
                        list.add(matrix[down][i]);
                    down--;
                    break;
                case 3:
                    for(int i = down; i >= top; i--)
                        list.add(matrix[i][left]);
                    left++;
                    break;
            }
            d = (d + 1) % 4;
        }
        
        return list;
    }
}