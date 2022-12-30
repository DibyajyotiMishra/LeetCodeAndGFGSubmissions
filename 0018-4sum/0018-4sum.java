class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        List<List<Integer>> ans= new ArrayList<>();
        for(int a =0; a<nums.length-3;a++){
           if(a==0 || (a>0 && nums[a]!= nums[a-1] )){
            List<List<Integer>> sol = threeSum( nums,target-nums[a],a+1);
            for(int i =0;i<sol.size() ;i++){
                sol.get(i).add(nums[a]);
                ans.add(sol.get(i));
            }
           }
           
           
        }
        return ans;
    }
    public List<List<Integer>> threeSum(int[] nums, long target,int firstIndex) {
        
        List<List<Integer>> ans= new ArrayList<>();
        for(int a =firstIndex; a<nums.length-2;a++){
            if(a==firstIndex || (a>0 && nums[a]!= nums[a-1] )){
            List<List<Integer>> sol = twoSum( nums,target-nums[a],a+1);
            for(int i =0;i<sol.size() ;i++){
                sol.get(i).add(nums[a]);
                ans.add(sol.get(i));
            }
            }
        }
        return ans;
    }

    public List<List<Integer>> twoSum(int[] nums,long target, int firstIndex){
         List<List<Integer>> ans= new ArrayList<>();
         int low = firstIndex;
         int high = nums.length-1;
         while(low < high){
             long sum = nums[low]+nums[high];
             if( sum> target) high--;
             else if(sum < target) low++;
             else {
                ans.add(new ArrayList<>( Arrays.asList(nums[low],nums[high])));
                while(low<high && nums[low] == nums[low+1]) low++;
                while(low<high && nums[high] == nums[high-1]) high--;
                low++;
                high--;
             }

         }
         return ans;
    }

}