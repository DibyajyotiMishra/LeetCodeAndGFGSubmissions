class Solution {
    public List<List<Integer>> generate(int n) {
        List<List<Integer>> list = new ArrayList<>();
        List<Integer> currRow = null, prevRow = null;
        
        for(int i = 0; i < n; i++) {
            currRow = new ArrayList<>();
            for(int j = 0; j <= i; j++) {
                if(j == 0 || j == i)
                    currRow.add(1);
                else currRow.add(prevRow.get(j-1) + prevRow.get(j));
            }
            list.add(currRow);
            prevRow = currRow;
        }
        
        return list;
    }
}