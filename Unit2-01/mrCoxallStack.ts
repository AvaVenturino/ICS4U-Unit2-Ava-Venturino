/*
 * This program is a number guessing game
 * @author  Ava Venturino 
 * @version 1.0 
 * @since   2024-02-26
 */

class MrCoxallStack {
  private stackAsList: string[] = [];

  push(pushedString: string): void {
    // push the value onto the stack
    this.stackAsList.push(pushedString);
  }

  showStack(): string {
    // return the stack
    let stackValues: string = "";
	        
    for (const value of this.stackAsList) {
      stackValues += value + ",";
    }
    stackValues = stackValues.slice(0, -1); // Remove the trailing comma

    return stackValues;
  }
}
