/*
 * This program is a number guessing game
 * @author  Ava Venturino 
 * @version 1.0 
 * @since   2024-02-26
 */

import java.util.ArrayList;
import java.util.List;

/**
 * This is a standard program.
 */

public class MrCoxallStack {

    private List<String> strStack;

    // Constructor
    public MrCoxallStack() {
        this.strStack = new ArrayList<>();
    }

    // Check if stack is empty
    public boolean isEmpty() {
        if (strStack.size() > 0) {
            return false;
        } else {
            return true;
        }
    }

    // Return top item of stack
    public String peak() {
        if (!isEmpty()) {
            return strStack.get(strStack.size() - 1);
        } else {
            return null; // Or throw an exception for empty stack
        }
    }

    // Return stack size
    public int size() {
        return strStack.size();
    }

    // Show full stack separated by commas
    public String show() {
        if (!isEmpty()) {
            StringBuilder values = new StringBuilder();
            for (String item : strStack) {
                values.append(item).append(", ");
            }
            return values.substring(0, values.length() - 2);
        } else {
            return "stack is empty";
        }
    }

    // Clear all items off stack
    public void clear() {
        strStack.clear();
    }

    /**
     * Pushes the specified string onto the top of the stack.
     *
     * @param pushedString using pushedString
     */

    public void push(String input) {
        strStack.add(input);
    }

    // Pop item from end of list and return value
    public String pop() {
        if (!isEmpty()) {
            String removed = strStack.remove(strStack.size() - 1);
            return removed;
        } else {
            return "nothing to remove";
        }
    }
}
