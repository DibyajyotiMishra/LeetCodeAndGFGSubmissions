//{ Driver Code Starts
//Initial Template for Java



import java.util.*;
import java.io.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());
        while (tc-- > 0) {
            String[] inputLine;
            int n = Integer.parseInt(br.readLine().trim());
            int[] arr = new int[n];
            inputLine = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }

            new Solution().rearrange(arr, n);
            for (int i = 0; i < n; i++) {
                System.out.print(arr[i] + " ");
            }
            System.out.println();
        }
    }
}

// } Driver Code Ends


//User function Template for Java




class Solution {
    void rearrange(int arr[], int n) {
        // code here
        ArrayList<Integer> negs = new ArrayList<>();
        ArrayList<Integer> poss = new ArrayList<>();        
        for(int i = 0; i < n; i++){
            if(arr[i] < 0)
                negs.add(arr[i]);
            else
                poss.add(arr[i]);
        }
                
        int i = 0, j = 0;        
        int k = 0;
        while(i < poss.size() && j < negs.size()) {
            if(k % 2 == 0) {
                arr[k++] = poss.get(i++);
            } else {
                arr[k++] = negs.get(j++);
            }
        }
        
        while(i < poss.size()) {
            arr[k++] = poss.get(i++);
        }
        
        while(j < negs.size()) {
            arr[k++] = negs.get(j++);
        }
    }
}