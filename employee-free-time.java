import java.util.*;

class Interval {
    int start;
    int end;

    Interval() {
        start = 0;
        end = 0;
    }

    Interval(int s, int e) {
        start = s;
        end = e;
    }
}

class Solution {
    public List<Interval> employeeFreeTime(List<List<Interval>> schedule) {
        // Corner Case Checks
        if (schedule == null || schedule.size() == 0) {
            return new ArrayList<>();
        }

        // Break the schedule into a single list of intervals
        List<Interval> intervals = new ArrayList<>();
        for (Interval interval : schedule) {
            intervals.add(interval);
        }

        // Sort the intervals by start time
        Collections.sort(intervals, (interval1, interval2) -> interval1.start - interval2.start);

        /*
         * Loop through each interval from intervals and check for free time.
         * If interval1.end < interval2.start, then there is free time between the two
         * intervals.
         */
        List<Interval> freeTime = new ArrayList<>();
        int lastEndTime = intervals.get(0).end;
        for (int i = 1; i < intervals.size(); i++) {
            int currentStart = intervals.get(i).start;
            int currentEnd = intervals.get(i).end;
            if (currentStart > lastEndTime) {
                freeTime.add(new Interval(lastEndTime, currentStart));
            }
            lastEndTime = Math.max(lastEndTime, currentEnd);
        }

        // Return the final answer which is the list of free times.
        return freeTime;
    }
}