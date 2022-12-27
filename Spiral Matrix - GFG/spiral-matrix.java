//{ Driver Code Starts
import java.util.*;

class Find_Given_Element_Of_Spiral_Matrix 
{
	public static void main(String args[])
	{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t > 0)
		{
			int n = sc.nextInt();
			int m = sc.nextInt();
			int k = sc.nextInt();
			int arr[][] = new int[n][m];
			for(int i=0; i<n; i++)
			{
				for(int j=0; j<m; j++ )
				{
					arr[i][j] = sc.nextInt();
				}
			}
			Solution obj = new Solution();
			System.out.println(obj.findK(arr, n, m, k));
		t--;
		}
	}
}
// } Driver Code Ends


//User function Template for Java

class Solution
{
   
	public int findK(int a[][], int n, int m, int k)
	{
	    // Your code goes here
	    int top = 0, down = n - 1, left = 0, right = m - 1;
	    int d = 0;
	    int el = -1;
	    while((top <= down || left <= right) && k >= 0) {
	        d = d % 4;
	        switch(d) {
	            case 0:
	                for(int i = left; i <= right; i++){
	                    k--;
	                    if(k == 0) el = a[top][i];
	                } 
	                top++;
	                break;
	            case 1:
	                for(int i = top; i <= down; i++) {
	                    k--;
	                    if(k == 0) el = a[i][right];
	                }  
	                 right--;
	                 break;
	            case 2:
	                for(int i = right; i >= left; i--) {
	                    k--;
	                    if(k == 0) el = a[down][i];
	                }   
	                 down--;
	                 break;
	           case 3:
	               for(int i = down; i >= top; i--) {
	                    k--;
	                    if(k == 0) el = a[i][left];
	               }    
	               left++;
	               break;
	        }
	        d += 1;
	    }
	    return el;
	}
	
}