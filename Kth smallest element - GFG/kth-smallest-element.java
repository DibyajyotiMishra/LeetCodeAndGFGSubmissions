//{ Driver Code Starts
//Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
class GFG {
	public static void main (String[] args) {
		Scanner sc=new Scanner(System.in);
		PrintWriter out = new PrintWriter(System.out);
		int t=sc.nextInt();
		
		while(t-->0)
		{
		    int n=sc.nextInt();
		    
		    int arr[]=new int[n];
		    
		    for(int i=0;i<n;i++)
		    arr[i]=sc.nextInt();
		    
		    int k=sc.nextInt();
		    Solution ob = new Solution();
		    out.println(ob.kthSmallest(arr, 0, n-1, k));
		}
		out.flush();
	}
}

// } Driver Code Ends


//User function Template for Java

class HeapComparator implements Comparator<Integer>{
    @Override
    public int compare(Integer num1, Integer num2) {
        int res = num1.compareTo(num2);
        if(res > 0)
            return -1;
        else if(res < 0)
            return 1;
        else return 0;
    }
}

class Solution{
    public static int kthSmallest(int[] arr, int l, int r, int k) 
    { 
        //Your code here
        PriorityQueue<Integer> pq = new PriorityQueue<>(new HeapComparator());
        
        for(int num: arr){
            pq.add(num);
            if(pq.size() > k)
                pq.poll();
        }
            
        return pq.peek();
    } 
}
