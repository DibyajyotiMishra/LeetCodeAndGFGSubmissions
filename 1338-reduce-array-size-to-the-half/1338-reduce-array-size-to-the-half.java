class Solution {
    public int minSetSize(int[] arr) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for(int num: arr)
            map.put(num, map.getOrDefault(num, 0) + 1);
        
        int n = arr.length;
        int countingArr[] = new int[n+1]; 
        for(int freq: map.values())
            countingArr[freq]++;
        
        int removed = 0, half = n/2, ans = 0, freq = n;
        while(removed < half){
            ans += 1;
            while(countingArr[freq] == 0) freq--;
            removed += freq;
            countingArr[freq]--;
        }
        return ans;
    }
}