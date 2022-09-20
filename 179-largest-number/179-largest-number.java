class Solution {
    public String largestNumber(int[] nums) {
        List<String> numsList = new ArrayList<>();
        for(int num: nums)
            numsList.add(String.valueOf(num));
        
        Collections.sort(numsList, new Comparator<>(){
            public int compare(String num1, String num2){
                String type1 = num1+num2;
                String type2 = num2+num1;
                
                return type1.compareTo(type2) > 0 ? -1 : 1;
            }
        });
        
        StringBuilder largestNumber = new StringBuilder();
        for(String num: numsList)
            largestNumber.append(num);
        
        if(largestNumber.toString().charAt(0) == '0')
            return "0";
            
        return largestNumber.toString();
    }
}