class Solution {
    public List<Integer> majorityElement(int[] nums) {
        int el1 = -1, el2 = -1, cnt1 = 0, cnt2 = 0, n = nums.length;
        for(int num: nums) {
            if(el1 == num)
                cnt1++;
            else if(el2 == num)
                cnt2++;
            else if(cnt1 == 0) {
                el1 = num;
                cnt1++;
            }
            else if(cnt2 == 0) {
                el2 = num;
                cnt2++;
            }
            else {
                cnt1--;
                cnt2--;
            }
        }
        
        cnt1 = cnt2 = 0;
        
        for(int num: nums) {
            if(el1 == num)
                cnt1++;
            else if(el2 == num)
                cnt2++;
        }
        
        List<Integer> ans = new ArrayList<>();
        if(cnt1 > n/3)
            ans.add(el1);
        if(cnt2 > n/3)
            ans.add(el2);
        
        
        return ans;
    }
}