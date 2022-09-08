class Pair{
    int diff, point[] = new int[2];
    Pair(int diff, int point[]){
        this.diff = diff;
        this.point = point;
    }
}


class Solution {
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<Pair> pq = new PriorityQueue<>(
            new Comparator<Pair>(){
                public int compare(Pair a, Pair b){
                    int val =  Integer.compare(a.diff, b.diff);
                    if(val > 0)
                        return -1;
                    else if(val < 0)
                        return 1;
                    else return 0;
                }
            }
        );
        
        for(int point[]: points){
            pq.add(new Pair((point[0] * point[0] + point[1] * point[1]), point));
            
            if(pq.size() > k)
                pq.poll();
        }
        
        int ans[][] = new int[k][2];
        int ind = 0;
        while(!pq.isEmpty()){
            ans[ind++] = pq.poll().point;
        }
        return ans;
    }
}