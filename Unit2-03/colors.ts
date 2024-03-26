/*
 * This is a program prints out stuff.
 * @author  Ava Venturino 
 * @version 1.0 
 * @since   2024-02-26
 */

import MrCoxallStack from './mrCoxallStack.ts'

// this function uses the MrCoxallStack
const colorStack = new MrCoxallStack()
console.log("The size of the stack is: " + colorStack.size)
console.log("Is the stack empty?: " + colorStack.isEmpty)
colorStack.push("red")
colorStack.push("green")
colorStack.push("blue")
console.log("Color items: " + colorStack.show)
console.log("Popped item: " + colorStack.pop())
console.log("Color items: " + colorStack.show)
console.log("The size of the stack is: " + colorStack.size)
console.log("Is the stack empty?: " + colorStack.isEmpty)
console.log("\nDone.")
