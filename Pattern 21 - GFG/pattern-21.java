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
            obj.printSquare(n);
        }
    }
}
// } Driver Code Ends


class Solution {

    void printSquare(int n) {
        // code here
        for(int i=0;i<n;i++)
      {
          // Inner loop for printing '*' in each column.
          for(int j=0;j<n;j++)
          {
              // For first row and last row we print '*' and for every other row we print the '*' at boundary region.
              if(i==0 || i==n-1 || j==0 || j==n-1)
              {
              System.out.print("*");
              }
              // Otherwise we print blank space.
              else
              System.out.print(" ");
          }
          System.out.println();
      }
    }
}