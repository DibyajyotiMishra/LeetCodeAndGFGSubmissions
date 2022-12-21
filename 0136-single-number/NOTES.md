If the array is sorted:
​
```
class Solution {
public int singleNumber(int[] nums) {
int n = nums.length ;
int left = 0, right = n-2;
while(left <= right){
int mid = (left + right) >> 1;
if(nums[mid] == nums[mid^1])
left = mid + 1;
else
right = mid - 1;
}
return nums[left];
}
}
```