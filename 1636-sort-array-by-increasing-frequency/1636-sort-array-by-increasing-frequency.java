class CustomComparator implements Comparator<Map.Entry<Integer, Integer>>{
    @Override
    public int compare(Map.Entry<Integer, Integer> entry1, Map.Entry<Integer, Integer> entry2){
        if(entry1.getValue() == entry2.getValue())
            return entry2.getKey() - entry1.getKey();
        return entry1.getValue() - entry2.getValue();
    }
}

class Solution {
    public int[] frequencySort(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // {element: frequency} map
        for(int num: nums)
            map.put(num, map.getOrDefault(num, 0) + 1);
        
        // Convert Map to List for sorting.
        List<Map.Entry<Integer, Integer>> list = new ArrayList(map.entrySet());
        
        // Sorting the list using the Custom Comparator
        Collections.sort(list, new CustomComparator());
        
        int ind = 0;
        int ans[] = new int[nums.length];
        
        // Output array
        for(Map.Entry<Integer, Integer> entry : list){
            int freq = entry.getValue();
            while(freq-- > 0)
                ans[ind++] = entry.getKey();
        }
        
        return ans;
    }
}