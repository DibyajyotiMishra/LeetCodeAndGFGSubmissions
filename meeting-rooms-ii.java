import java.util.*;

class Intervals {
    int start, end;

    Intervals() {
        start = 0;
        end = 0;
    }

    Intervals(int s, int e) {
        start = s;
        end = e;
    }
}

class Solution {
    public int minMeetingRooms(Intervals intervals[]) {
        if (intervals == null || intervals.length == 0)
            return 0;
        Arrays.sort(intervals, (el1, el2) -> el1.start - el2.start);
        PriorityQueue<Intervals> minHeap = new PriorityQueue<>(
                (el1, el2) -> el1.end - el2.end);
        minHeap.add(intervals[0]);

        for (int i = 1; i < intervals.length; i++) {
            Interval lastMeeting = minHeap.remove();
            Interval curMeeting = intervals[i];

            if (curMeeting.end >= lastMeeting.end)
                lastMeeting.end = curMeeting.end;
            else
                minHeap.add(curMeeting);
            minHeap.add(lastMeeting);
        }

        return minHeap.size();
    }
}