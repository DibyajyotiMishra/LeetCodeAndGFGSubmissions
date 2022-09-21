class Solution {
    public int maxChunksToSorted(int[] arr) {
        // Generate Right Min
        int rMin[] = new int[arr.length+1];
        rMin[arr.length] = Integer.MAX_VALUE;;
        
        for(int i = arr.length-1; i>= 0; i--){
            rMin[i] = Math.min(rMin[i+1], arr[i]);
        }
        
        // iterate and manage Left Max and count chunks
        int leftMax = Integer.MIN_VALUE, chunks = 0;
        
        for(int i = 0; i < arr.length; i++){
            leftMax = Math.max(leftMax, arr[i]);
            
            if(leftMax <= rMin[i+1])
                chunks++;
        }
        return chunks; 
    }
}