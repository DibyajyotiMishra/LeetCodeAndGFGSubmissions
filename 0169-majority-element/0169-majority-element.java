class Solution {
    public int majorityElement(int[] nums) {
//         HashMap<Integer, Integer> map = new HashMap<>();
//         for (int i = 0; i< nums.length; i++){
//             map.put(nums[i], map.getOrDefault(nums[i], 0)+1);
//         }
        
//         for(Map.Entry el: map.entrySet()){
//             int cnt = (Integer)el.getValue();
//             if(cnt > nums.length/2) return (Integer)el.getKey();
//         }
//         return -1;
        int el = -1, count = 0;
        for(int num: nums) {
            if(count == 0)
                el = num;
            if(num == el)
                count += 1;
            else count-= 1;
        }
        return el;
    }
}