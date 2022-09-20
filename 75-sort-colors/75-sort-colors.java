class Solution {

    public void sortColors(int[] nums) {
        int start = 0, end = nums.length - 1, mid = 0, temp = 0;

        // loop as long as mid != to end.
        // Solve by Dutch National Flag approach
        // to perform sorting

        while (mid <= end) {
            switch (nums[mid]) {
                case 0:
                    temp = nums[start];
                    nums[start] = nums[mid];
                    nums[mid] = temp;
                    mid++;
                    start++;
                    break;
                case 1:
                    mid++;
                    break;
                case 2:
                    temp = nums[mid];
                    nums[mid] = nums[end];
                    nums[end] = temp;
                    end--;
                    break;
                default:
                    break;
            }
        }
    }
}
