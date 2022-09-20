class Solution {
    public String rankTeams(String[] votes) {
        // Corner Cases Error Checking
        if(votes.length < 0 || votes == null)
            return "";
        
        Map<Character, int[]> map = new HashMap<>();
        int teamSize = votes[0].length();
        for(String vote: votes){
            for(int i = 0; i < teamSize; i++){
                char ch = vote.charAt(i);
                map.putIfAbsent(ch, new int[teamSize]);
                map.get(ch)[i]++;
            }
        }
        
        List<Character> list = new ArrayList<>(map.keySet());
        
        Collections.sort(list, (a, b) -> {
            for(int i = 0; i < teamSize; i++){
                if(map.get(a)[i] != map.get(b)[i]){
                    return map.get(b)[i] - map.get(a)[i];
                }
            }
            return a - b;
        });
        
        StringBuilder answer = new StringBuilder();
        for(char team: list)
            answer.append(team);
        
        return answer.toString();
    }
}