/*
 * This is a program prints out stuff.
 * @author  Ava Venturino 
 * @version 1.0 
 * @since   2024-02-26
 */

import MrCoxallStack from './mrCoxallStack.ts'

// this function uses the MrCoxallStack
const fruitStack = new MrCoxallStack()
console.log("The size of the stack is: " + fruitStack.size)
console.log("Is the stack empty?: " + fruitStack.isEmpty)
fruitStack.push("apple")
fruitStack.push("banana")
fruitStack.push("cherry")
console.log("Fruit items: " + fruitStack.show)
console.log("Popped item: " + fruitStack.pop())
console.log("Fruit items: " + fruitStack.show)
console.log("The size of the stack is: " + fruitStack.size)
console.log("Is the stack empty?: " + fruitStack.isEmpty)
console.log()
console.log("\nDone.")
