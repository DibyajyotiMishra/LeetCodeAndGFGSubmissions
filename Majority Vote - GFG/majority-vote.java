//{ Driver Code Starts
import java.io.*;
import java.util.*;


class IntArray
{
    public static int[] input(BufferedReader br, int n) throws IOException
    {
        String[] s = br.readLine().trim().split(" ");
        int[] a = new int[n];
        for(int i = 0; i < n; i++)
            a[i] = Integer.parseInt(s[i]);

        return a;
    }

    public static void print(int[] a)
    {
        for(int e : a)
            System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<Integer> a)
    {
        for(int e : a)
            System.out.print(e + " ");
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while(t-- > 0){
            
            int n;
            n = Integer.parseInt(br.readLine());
            
            
            int[] nums = IntArray.input(br, n);
            
            Solution obj = new Solution();
            ArrayList<Integer> res = obj.Solve(n, nums);
            
            IntArray.print(res);
            
        }
    }
}

// } Driver Code Ends


class Solution {
    public static ArrayList<Integer> Solve(int n, int[] nums) {
        // code here
        int el1 = -1, el2 = -1, cnt1 = 0, cnt2 = 0;
        for(int i = 0; i < n; i++) {
            if(el1 == nums[i])
                cnt1++;
            else if(el2 == nums[i])
                cnt2++;
            else if(cnt1 == 0) {
                el1 = nums[i];
                cnt1++;
            }
            else if(cnt2 == 0) {
                el2 = nums[i];
                cnt2++;
            }
            else {
                cnt1--;
                cnt2--;
            }
        }
        
        cnt1 = cnt2 = 0;
        ArrayList<Integer> ans = new ArrayList<>();
        for(int i = 0; i < n; i++) {
            if(nums[i] == el1)
                cnt1++;
            if(nums[i] == el2)
                cnt2++;
        }
        
        if(cnt1 > n/3)
            ans.add(el1);
        if(cnt2 > n/3)
            ans.add(el2);
            
            
        if(ans.size() < 1)
            ans.add(-1);
            
        return ans;
    }
}
        
