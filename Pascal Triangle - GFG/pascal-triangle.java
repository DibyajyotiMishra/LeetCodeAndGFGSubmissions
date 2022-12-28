//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    // Driver code
    public static void main(String[] args) throws Exception {
        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());

            ArrayList<Long> ans = new Solution().nthRowOfPascalTriangle(n);
            printAns(ans);
        }
    }
    public static void printAns(ArrayList<Long> ans) {
        for (Long x : ans) {
            System.out.print(x + " ");
        }
        System.out.println();
    }
}

// } Driver Code Ends


// User function Template for Java

class Solution {
    ArrayList<Long> nthRowOfPascalTriangle(int n) {
        // code here
        ArrayList<Long> list = null, prev = null;
        
        for(int i = 0; i < n; i++) {
            list = new ArrayList<>();
            for(int j = 0; j <= i; j++) {
                if(j == 0 || j == i)
                    list.add((long)1);
                else 
                    list.add((long)(prev.get(j-1) + prev.get(j)) % 1000000007);
            }
            prev = list;
        }
        
        return list;
    }
}