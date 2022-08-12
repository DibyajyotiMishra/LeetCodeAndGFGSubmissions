// Using HashMap to store the frequency of each number.

// class Solution {
//     public List<Integer> majorityElement(int[] nums) {
//        List<Integer> majorityElements = new ArrayList<>();
//         int n = nums.length;
//        HashMap<Integer, Integer> map = new HashMap<>();
//         for(int num: nums)
//             map.put(num, map.getOrDefault(num, 0)+1);
//         for(Map.Entry<Integer, Integer> e : map.entrySet()){
//             if(e.getValue() > n/3)
//                 majorityElements.add(e.getKey());
//         }
//         return majorityElements;
//     }
// }
    
// Using Bayer-Moore Majority Vote Algo

class Solution {
    public List<Integer> majorityElement(int[] nums) {
        Integer major1 = null, major2 = null, cnt1 = 0, cnt2 = 0;
        for (Integer num : nums) {
            if (num.equals(major1)) {
                cnt1++;
            } else if (num.equals(major2)) {
                cnt2++;
            } else if (cnt1 == 0) {
                major1 = num;
                cnt1 = 1;
            } else if (cnt2 == 0) {
                major2 = num;
                cnt2 = 1;
            } else {
                cnt1--;
                cnt2--;
            }
        }
        
        cnt1 = cnt2 = 0;
        for (Integer num : nums) {
            if (num.equals(major1)) cnt1++;
            else if (num.equals(major2)) cnt2++;
        }
        
        List<Integer> result = new ArrayList<>();
        if (cnt1 > nums.length / 3) result.add(major1);
        if (cnt2 > nums.length / 3) result.add(major2);
        return result;
    
    }
}