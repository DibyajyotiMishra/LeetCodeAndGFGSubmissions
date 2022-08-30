class Solution {

    public String removeDuplicateLetters(String s) {
        int len = s.length(); // length of the string

        boolean visited[] = new boolean[26];
        int lastIndex[] = new int[26];

        for (int i = 0; i < len; i++) lastIndex[s.charAt(i) - 'a'] = i; // marking the last occurance (index) of each character

        Stack<Integer> st = new Stack<>();
        StringBuilder ans = new StringBuilder();
        for (int i = 0; i < len; i++) {
            int c = s.charAt(i) - 'a'; // the value of a particular char in terms of index like a = 0, b = 1, c = 2, and so on.

            if (visited[c]) continue; // skip over duplicates.

            visited[c] = true; // mark an character as visited.

            while (!st.isEmpty() && st.peek() > c && lastIndex[st.peek()] > i) visited[st.pop()] = false;
            st.push(c);
        }

        for (int ind : st) ans.append((char) (ind + 'a')); // convert index back into char.

        return ans.toString();
    }
}
