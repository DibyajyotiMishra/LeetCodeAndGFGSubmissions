class MedianFinder {
    private PriorityQueue<Long> minHeap, maxHeap;
    public MedianFinder() {
        minHeap = new PriorityQueue<Long>(Collections.reverseOrder());
        maxHeap = new PriorityQueue<Long>();
    }
    
    public void addNum(int num) {
        maxHeap.add((long) num);
        minHeap.add(maxHeap.poll());
        if(maxHeap.size() < minHeap.size())
            maxHeap.add(minHeap.poll());
    }
    
    public double findMedian() {
        return maxHeap.size() > minHeap.size() ? maxHeap.peek() : (minHeap.peek() + maxHeap.peek()) / 2.0;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */