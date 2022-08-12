
// W/O Using Priority Queue

// class Solution {
//     public int[][] diagonalSort(int[][] mat) {
//         // sort diagonals that are starting at top row
//         for (int j = 0; j < mat[0].length; j++) {
//             fillMat(mat, countDiagonal(mat, 0, j), 0, j);
//         }
        
//         // diagonals starting at first column
//         for (int i = 1; i < mat.length; i++) {
//             fillMat(mat, countDiagonal(mat, i, 0), i, 0);
//         }
        
//         return mat;
//     }
    
//     private int[] countDiagonal(int[][] mat, int i, int j) {
//         // since the constraint specifys mat[i][j] is between 1 and 100, we can use a bucket
//         int[] count = new int[101];
//         while (i < mat.length && j < mat[0].length)
//             count[mat[i++][j++]] ++;
//         return count;
//     }
    
//     private void fillMat(int[][] mat, int[] count, int i, int j) {
//         // fill diagonal start with the lowest value in the bucket
//         int start = 1;
//         while (i < mat.length && j < mat[0].length && start < 101) {
//             while (count[start] == 0)
//                 start ++;
//             mat[i++][j++] = start;
//             count[start] --;
//         }
//     }
// }


// Using Priority Queue
class Solution {
    public int[][] diagonalSort(int[][] mat) {
        int row = mat.length, col = mat[0].length;
        HashMap<Integer, PriorityQueue<Integer>> map = new HashMap<>();
        for(int i = 0; i < row; i++) {
            for(int j = 0; j < col; j++) {
                map.putIfAbsent(i-j, new PriorityQueue<>());
                map.get(i-j).add(mat[i][j]);
            }
        }
        for(int i = 0; i < row; i++) {
            for(int j = 0; j < col; j++) {
                mat[i][j] = map.get(i-j).poll();
            }
        }
        return mat;
    }
}