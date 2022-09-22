class Solution {
    public String reverseWords(String s) {
        String words[] = s.split(" ");
        for(int i = 0; i < words.length; i++){
            words[i] = reverse(words[i]);
        }
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < words.length; i++){
                sb.append(words[i]);
                if(i != words.length -1)
                    sb.append(" ");
            }
        return sb.toString();
    }
    
    public String reverse(String s){
        StringBuilder revString = new StringBuilder();
        revString.append(s);
        return revString.reverse().toString();
    }
}