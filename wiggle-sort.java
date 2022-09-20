import java.util;

class Solution {
    public void sort(int nums[]) {
        int n = nums.length;
        for (int i = 1; i < n; i++) {
            if (i % 2 == 1 && nums[i] < nums[i - 1]) // odd indices should be greater than the previous index.
                swap(nums, i, i - 1);
            if (i % 2 == 0 && nums[i] > nums[i - 1]) // even indices should be lesser than the previous index.
                swap(nums, i, i - 1);
        }
    }

    public void swap(int arr[], int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}