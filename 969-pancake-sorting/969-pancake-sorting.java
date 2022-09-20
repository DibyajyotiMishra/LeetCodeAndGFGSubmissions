class Solution {
    public List<Integer> pancakeSort(int[] arr) {
        int arrSize = arr.length;
        List<Integer> answer = new ArrayList<>();
        
        while(arrSize > 1){
            int maxNum = arr[0], maxInd = 0;
            
            // find the maximum number in the array along with its index.
            for(int i = 0; i < arrSize; i++){
                if(maxNum < arr[i]){
                    maxNum = arr[i];
                    maxInd = i;
                }
            }
            
            // if the maximum number is at the last index, don't perform any flips.
            if(maxInd == arrSize-1){
                arrSize--;
                continue;
            }
            
            // reverse till the maximum number's index and bring it to the front
            answer.add(maxInd+1);
            reverse(arr, maxInd+1);
            
            // reverse the entire array.
            answer.add(arrSize);
            reverse(arr, arrSize);
            
            // reduce required reversal length by 1. 
            arrSize--;
        }
        
        return answer;
    }
    
    private void reverse(int arr[], int size){
        int start = 0, end = size - 1;
        while(start <= end){
            int temp = arr[start];
            arr[start++] = arr[end];
            arr[end--] = temp;
        }
    } 
}