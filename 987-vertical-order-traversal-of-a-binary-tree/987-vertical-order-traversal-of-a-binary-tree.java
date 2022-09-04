/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Tuple {
    int row, col;
    TreeNode node;
    public Tuple(TreeNode node,  int row, int col) {
        this.row = row;
        this.col = col;
        this.node = node;
    }
}

class Solution {
    public List<List<Integer>> verticalTraversal(TreeNode root) {
        TreeMap<Integer, TreeMap<Integer, PriorityQueue<Integer>>> map = new TreeMap<>();
        Queue<Tuple> q = new LinkedList<Tuple>();
        q.offer(new Tuple(root, 0, 0));
        while(!q.isEmpty()) {
            Tuple t = q.poll();
            TreeNode node = t.node;
            int row = t.row;
            int col = t.col;
            
            if(!map.containsKey(row))
                map.put(row, new TreeMap<>());
            if(!map.get(row).containsKey(col))
                map.get(row).put(col, new PriorityQueue<>());
            map.get(row).get(col).offer(node.val);
            
            if(node.left!= null)
                q.offer(new Tuple(node.left, row-1, col+1));
            if(node.right!= null)
                q.offer(new Tuple(node.right, row+1, col+1));
        }
        
        List<List<Integer>> ans = new ArrayList<>();
        for(TreeMap<Integer, PriorityQueue<Integer>> levels: map.values()){
            ans.add(new ArrayList<>());
            for(PriorityQueue<Integer> pq : levels.values()) {
                while(!pq.isEmpty()) {
                    ans.get(ans.size()-1).add(pq.poll());
                }
            }
        }
        return ans;
    }
}