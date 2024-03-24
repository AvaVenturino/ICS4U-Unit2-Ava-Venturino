/*
 * This program is a number guessing game
 * @author  Ava Venturino 
 * @version 1.0 
 * @since   2024-02-26
 */

class MrCoxallStack {
  
  private strstack: string[]
  
  constructor() {
    self.strstack = []
  }

  public get show() {
    let values = ""
    for (let counter = 0; counter < self.strstack.length; counter++) {
      values = values + self.strstack[counter] + ", "
    }
    values = values.substring(0, values.length-2)
    return values
  }
  
  public push(input) {
    self.strstack.push(input)
  }

  public pop() {
    let removed = ""
    if (self.strstack[0]) {
      removed = self.strstack[self.strstack.length - 1]
    } else {
      removed = "nothing to remove"
    }
    self.strstack.splice(-1)
    return removed
  }
}

// Export the class
export default MrCoxallStack
