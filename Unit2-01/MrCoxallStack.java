/*
 * This is a program prints out stuff.
 * @author  Ava Venturino 
 * @version 1.0 
 * @since   2024-02-26
 */

import java.util.ArrayList;
import java.util.List;

public class MrCoxallStack {
    private List<String> stackAsList;

    public MrCoxallStack() {
        this.stackAsList = new ArrayList<>();
    }

    public void push(String pushedString) {
        // push the value onto the stack
        this.stackAsList.add(pushedString);
    }

    public String showStack() {
        // return the stack
        StringBuilder stackValues = new StringBuilder();

        for (String value : this.stackAsList) {
            stackValues.append(value).append(",");
        }
		        
        if (stackValues.length() > 0) {
            // Remove the trailing comma
            stackValues.deleteCharAt(stackValues.length() - 1);
        }

        return stackValues.toString();
    }
}
