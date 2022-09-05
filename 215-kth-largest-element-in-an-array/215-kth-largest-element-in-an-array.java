class HeapComparator implements Comparator<Integer>{
    @Override
    public int compare(Integer num1, Integer num2){
        int res = num1.compareTo(num2);
        if(res > 0)
            return 1;
        else if(res < 0)
            return -1;
        else return 0;
    }
}

class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>(new HeapComparator());
        
        for(int num: nums){
            pq.add(num);
            
            if(pq.size() > k)
                pq.poll();
        }
        
        return pq.peek();
    }
}