class Solution {
    public List<String> letterCombinations(String digits) {
        String digitsArr[] = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
          
          List<String> ans = new ArrayList<>();
          
          if (digits.length()==0) return ans;
          
          ans.add("");
          
         for (int i=0; i<digits.length(); i++) 
            ans = combine(digitsArr[digits.charAt(i)-'0'],ans);
        return ans;
    }
    public static List<String> combine(String digit, List<String> l) {
        List<String> result = new ArrayList<String>();

        for (int i=0; i<digit.length(); i++) 
            for (String x : l) 
                result.add(x+digit.charAt(i));

        return result;
    }
}