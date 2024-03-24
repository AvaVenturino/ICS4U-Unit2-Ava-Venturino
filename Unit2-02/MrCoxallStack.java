/*
 * This program is a number guessing game
 * @author Ava Venturino
 * @version 1.0
 * @since 2024-02-26
 */

import java.util.ArrayList;
import java.util.List;

/**
 * This is a standard program.
 */

public class MrCoxallStack {

    /**
     * Represents a stack data structure implemented using a List.
     * This list stores elements as strings.
     */

    private List<String> stackAsList;

    /**
     * Constructs a new instance of MrCoxallStack.
     * Initializes the stack with an empty ArrayList.
     *
     */

    public MrCoxallStack() {
        this.stackAsList = new ArrayList<>();
    }

    /**
     * Pushes the specified string onto the top of the stack.
     *
     * @param pushedString using pushedString
     */

    public void push(String pushedString) {
        // push the value onto the stack
        this.stackAsList.add(pushedString);
    }

    /**
     * Returns a string representation of the stack.
     *
     * @return stackValues
     */

    public String showStack() {
        // return the stack
        final StringBuilder stackValues = new StringBuilder();

        for (String value : this.stackAsList) {
            stackValues.append(value).append(", ");
        }
        // Remove the trailing comma and space
        if (stackValues.length() > 0) {
            stackValues.setLength(stackValues.length() - 2);
        }

        return stackValues.toString();
    }

    /**
     * Removes and returns the top element from the stack.
     * If the stack is empty, returns a message indicating so.
     *
     * @return The top element of the stack.
     *
     */

    public String pop() {
        // return top of the stack
        String returnValue = "";

        if (!this.stackAsList.isEmpty()) {
            returnValue = this.stackAsList.remove(this.stackAsList.size() - 1);
        } else {
            returnValue = "The stack is empty!";
        }

        return returnValue;
    }
}
