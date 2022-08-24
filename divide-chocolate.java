import java.util.*;

class Solution {
    public int divideChocolate(int nums[], int k) {
        m++;
        long left = Integer.MAX_VALUE, right = 0;

        for (int num : nums) {
            right += num;
            left = Math.min(left, num);
        }

        while (left + 1 < right) {
            long mid = left + (right - left) / 2;
            if (canDivide(nums, mid, k)) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }

        if (canDivide(nums, right, k)) {
            return (int) right;
        } else {
            return (int) left;
        }
    }

    private boolean canDivide(int nums[], long mid, int k) {
        long count = 0, sum = 0;

        for (int num : nums) {
            sum += num;
            if (sum > mid) {
                count++;
                sum = 0;
            }
        }

        return count >= k;
    }
}