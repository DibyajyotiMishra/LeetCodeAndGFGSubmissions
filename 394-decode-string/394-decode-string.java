class Solution {
    public String decodeString(String s) {
        Stack<Integer> freqStack = new Stack<>();
        Stack<StringBuilder> strStack = new Stack<>();
        
        StringBuilder curStr = new StringBuilder();
        int k = 0;
        
        for(char c: s.toCharArray()){
            if(Character.isDigit(c)){
                k = k * 10 + (c - '0');
            } else if(Character.isLetter(c)) {
                curStr.append(c);
            } else if(c == '[') {
                freqStack.push(k);
                strStack.push(curStr);
                k = 0;
                curStr = new StringBuilder();
            } else if(c == ']') {
                StringBuilder temp = curStr;
                int freq = freqStack.pop();
                curStr = strStack.pop();
                while(freq-- > 0){
                    curStr.append(temp); 
                }
                k = 0;
            }
        }
        return curStr.toString();
    }
}