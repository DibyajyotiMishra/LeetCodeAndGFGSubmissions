class Solution {
    public String reorganizeString(String s) {
        Map<Character, Integer> freqMap = new HashMap<>();
        for(char ch: s.toCharArray())
            freqMap.put(ch, freqMap.getOrDefault(ch, 0) + 1);
        
        PriorityQueue<Character> maxHeap = new PriorityQueue<>(
            (el1, el2) -> freqMap.get(el2) - freqMap.get(el1)
        );
        maxHeap.addAll(freqMap.keySet());
        
        StringBuilder ans = new StringBuilder();
        while(maxHeap.size() > 1){
            char current = maxHeap.remove();
            char next = maxHeap.remove();
            ans.append(current);
            ans.append(next);
            freqMap.put(current, freqMap.get(current) - 1);
            freqMap.put(next, freqMap.get(next) - 1);
            if(freqMap.get(current) > 0)
                maxHeap.add(current);
            if(freqMap.get(next) > 0)
                maxHeap.add(next);
        }
        
        if(!maxHeap.isEmpty()){
            char last = maxHeap.remove();
            if(freqMap.get(last) > 1)
                return "";
            ans.append(last);
        }
        
        
        return ans.toString();
    }
}