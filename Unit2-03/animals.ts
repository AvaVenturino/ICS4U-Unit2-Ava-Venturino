/*
 * This is a program prints out stuff.
 * @author  Ava Venturino 
 * @version 1.0 
 * @since   2024-02-26
 */

import MrCoxallStack from './mrCoxallStack.ts'

// this function uses the MrCoxallStack
const animalStack = new MrCoxallStack()
console.log("The size of the stack is: " + animalStack.size)
console.log("Is the stack empty?: " + animalStack.isEmpty)
animalStack.push("cow")
animalStack.push("koala")
animalStack.push("parrot")
console.log("Animal items: " + animalStack.show)
console.log("Popped item: " + animalStack.pop())
console.log("Animal items: " + animalStack.show)
console.log("The size of the stack is: " + animalStack.size)
console.log("Is the stack empty?: " + animalStack.isEmpty)
console.log("\nDone.")
