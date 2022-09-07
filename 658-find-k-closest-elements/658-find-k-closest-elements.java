class Pair {
    int diff, el;
    Pair(int diff, int el) {
        this.diff = diff;
        this.el = el;
    }
}

class Solution {
    public List<Integer> findClosestElements(int[] nums, int k, int x) {
        PriorityQueue<Pair> pq = new PriorityQueue<>(
            new Comparator<Pair>(){
                public int compare(Pair a, Pair b){
                    if((b.diff - a.diff) == 0)
                        return b.el - a.el;
                    return b.diff - a.diff;
                }
            }
        );
        
        List<Integer> ans = new ArrayList<>();
        
        for(int i: nums){
        pq.add(new Pair(Math.abs(i-x), i));
        
        if(pq.size() > k)
            pq.poll();
        }

        while(pq.size() != 0){
            Pair p = pq.poll();
            ans.add(p.el);
        }
        
        Collections.sort(ans);
        return ans;
    }
}