//{ Driver Code Starts
//Initial Template for Java


/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
class GFG {
	public static void main (String[] args) {
	    
	    //taking input using Scanner class
		Scanner sc=new Scanner(System.in);
		
		//taking total count of testcases
		int t=sc.nextInt();
		
		while(t-->0)
		{
		    //taking total number of elements
		    int n=sc.nextInt();
		    
		    //calling printFibb() method
		    long[] res = new Solution().printFibb(n);
		    
		    //printing the elements of the array
		    for (int i = 0; i < res.length; i++)
		        System.out.print (res[i]+" ");
		    System.out.println();
		}
	}
}
// } Driver Code Ends


//User function Template for Java


class Solution
{
    //Function to return list containing first n fibonacci numbers.
    public static long[] printFibb(int n) 
    {
        //Your code here
        long series[] = new long[n];
        if(n <= 1)
            return new long[]{1};
        series[0] = series[1] = 1;
        genFibb(series, 2, n);
        return series;
    }
    static void genFibb(long series[], int i, int n){
        // if(i <= 1){
        //     series[i] = 1;
        // }
        if(i >= n)
            return;
        long sum = series[i-1] + series[i-2];
        series[i] = sum;
        genFibb(series,i+1,n);
    }
}