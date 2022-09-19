import java.util.*;

public class Browser {
    static Stack<String> backStack, frontStack;
    static String currentUrl = "";

    Browser() {
        backStack = new Stack<String>();
        frontStack = new Stack<String>();
    }

    static void visitNewUrl(String url) {
        if (!currentUrl.equals("")) {
            backStack.push(currentUrl);
        }
        currentUrl = url;
        return;
    }

    static void back(String url) {
        if (backStack.isEmpty() || currentUrl.equals(backStack.peek())) {
            System.out.println("No pages in history");
            return;
        } else {
            frontStack.push(url);
            currentUrl = backStack.pop();
            return;
        }
    }

    static void forward(String url) {
        if (frontStack.isEmpty() || currentUrl.equals(frontStack.peek())) {
            System.out.println("No pages to  move ahead");
            return;
        } else {
            backStack.push(url);
            currentUrl = frontStack.pop();
            return;
        }
    }

    public static void main(String[] args) {
        // Need not create objects since there are static methods.
        visitNewUrl("www.google.com");
        back();
        visitNewUrl("www.facebook.com");
        forward("www.bing.com");
    }
}