/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        ListNode fast = head, slow = head;
        while(fast != null && fast.next != null) {
           fast = fast.next.next;
           slow = slow.next;
        }
        fast = reverse(slow);
        while(fast != null && head != null) {
            if(fast.val != head.val) return false;
            fast = fast.next;
            head = head.next;
        }
        return true;
    }
    public ListNode reverse(ListNode head) {
        ListNode pre = null, next = null;
        while(head != null){
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
    }
}