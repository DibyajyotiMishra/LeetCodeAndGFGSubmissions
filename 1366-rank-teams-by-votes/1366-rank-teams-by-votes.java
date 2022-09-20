class Solution {
    public String rankTeams(String[] votes) {
        Map<Character, int[]> map = new HashMap<>();
        int teams = votes[0].length();
        
        // Total Votes of individual teams
        for(String vote: votes){
            for(int i = 0; i < teams; i++){
                char ch = vote.charAt(i);
                map.putIfAbsent(ch, new int[teams]);
                map.get(ch)[i]++;
            }
        }
        
        List<Character> teamRank = new ArrayList<>(map.keySet());
        
        // Sort the teams
        Collections.sort(teamRank, (a, b) -> {
            for(int i = 0; i < teams; i++){
                if(map.get(a)[i] != map.get(b)[i]){
                    return map.get(b)[i] - map.get(a)[i];
                }
            }
            return a - b;
        });
        
        // Concatenate the team by their votes into a single string.
        StringBuilder answer = new StringBuilder();
        for(char team: teamRank)
            answer.append(team);
        
        return answer.toString();
    }
}