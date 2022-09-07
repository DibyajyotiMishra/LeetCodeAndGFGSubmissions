class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        HashMap<String, Integer> map = new HashMap<>();
        PriorityQueue<Map.Entry<String, Integer>> pq = new PriorityQueue<>(
        (a,b) -> a.getValue()==b.getValue() ? b.getKey().compareTo(a.getKey()) : a.getValue()-b.getValue()
        );
        
        for(String word: words){
            map.put(word, map.getOrDefault(word, 0) + 1);
        }
        
        for(Map.Entry<String, Integer> entry : map.entrySet()){
            pq.add(entry);
            
            if(pq.size() > k)
                pq.poll();
        }
        
        List<String> ans = new ArrayList<>();
        int i = 0;
        while(!pq.isEmpty())
            ans.add(0, pq.poll().getKey());
        
        return ans;
    }
}