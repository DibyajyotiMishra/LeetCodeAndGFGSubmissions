//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;
import java.lang.*;

class Geeks
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        
        while(t-- > 0)
        {
            int n =sc.nextInt();
            int arr[] = new int[n];
            
            for(int i = 0; i < n; i++)
             arr[i] = sc.nextInt();
             
           System.out.println(new Solution().majorityElement(arr, n)); 
        }
    }
}
// } Driver Code Ends


//User function Template for Java

class Solution
{
    static int majorityElement(int nums[], int size)
    {
        // your code here
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i< nums.length; i++){
            map.put(nums[i], map.getOrDefault(nums[i], 0)+1);
        }
        
        for(Map.Entry el: map.entrySet()){
            int cnt = (Integer)el.getValue();
            if(cnt > nums.length/2) return (Integer)el.getKey();
        }
        return -1;
    }
}