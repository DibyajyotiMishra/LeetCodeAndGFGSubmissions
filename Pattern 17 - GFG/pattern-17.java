//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Main {
    // Driver code
    public static void main(String[] args) throws Exception {
        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());
            Solution obj = new Solution();
            obj.printTriangle(n);
        }
    }
}
// } Driver Code Ends


class Solution {

    void printTriangle(int n) {
        // code here
        for (int row = 1; row <= n ; row++) {
            int ch = 65;
            int colCount = 0;
            int totalSpace = n - row;
            for (int sp = 1; sp <= totalSpace ; sp++) {
                System.out.print(" ");
            }
            for (int col = 1; col <= row ; col++) {
                System.out.print((char) ch);
                ch++;
                colCount++;
            }
            if(2 * colCount - 1 > row){
                ch--;
                for (int col = 1; col < colCount ; col++) {
                    ch--;
                    System.out.print((char) ch);
                }
            }
            System.out.println();
        }
    }
}