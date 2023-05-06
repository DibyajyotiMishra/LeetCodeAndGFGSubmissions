//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            Long X = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.reversedBits(X));
        }
    }
}
// } Driver Code Ends


//User function Template for Java

class Solution {
    static Long reversedBits(Long X) {
        // code here
        long bitsArr[] = new long[32]; // array of size 32 to store the bits of a number.
        long ans = 0;
        for(int i = 0; i < 32; i++) {
            long curBit = X % 2;
            bitsArr[i] = curBit; // store the bits in reverse order.
            X /= 2;
        }
        int power = 31;
        for(int i = 0; i < 32; i++) {
            ans += bitsArr[i] * (long)(Math.pow(2, power)); // convert the binary to decimal
            power--;
        }
        return ans;
    }
};