// Using MaxHeap

// class Solution {
//     public int[] topKFrequent(int[] nums, int k) {
//         PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>((a,b) -> b.getValue() - a.getValue());
//         HashMap<Integer, Integer> map = new HashMap<>();
        
//         for(int num: nums){
//             map.put(num, map.getOrDefault(num, 0) + 1);
//         }
        
//         for(Map.Entry<Integer, Integer> entry : map.entrySet())
//             pq.add(entry);
        
//         int ans[] = new int[k];
//         int i = 0;
//         while(i < k){
//             ans[i++] = pq.poll().getKey();
//         }
//         return ans;
//     }
// }

//  Using MinHeap

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>((a,b) -> Integer.compare(a.getValue(), b.getValue()));
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for(int num: nums){
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        
        for(Map.Entry<Integer, Integer> entry : map.entrySet()){
            pq.add(entry);
            
            if(pq.size() > k)
                pq.poll();
        }
        
        int ans[] = new int[k];
        int i = 0;
        while(!pq.isEmpty()){
            ans[i++] = pq.poll().getKey();
        }
        return ans;
    }
}