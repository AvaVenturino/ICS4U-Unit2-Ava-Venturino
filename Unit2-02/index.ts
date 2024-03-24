/*
 * This is a program prints out stuff.
 * @author  Ava Venturino 
 * @version 1.0 
 * @since   2024-02-26
 */

import MrCoxallStack from './mrCoxallStack.ts'

// this function uses the MrCoxallStack
const fruitStack = new MrCoxallStack()
fruitStack.push('apple')
fruitStack.push('banana')
fruitStack.push('cherry')
console.log("\nFruit items: " + fruitStack.show)
console.log("Popped fruit item: " + fruitStack.pop())
console.log("Fruit items: " + fruitStack.show)

const colorStack = new MrCoxallStack()
colorStack.push('red')
colorStack.push('green')
colorStack.push('blue')
console.log("\nColor items: " + colorStack.show)
console.log("Popped color item: " + colorStack.pop())
console.log("Color items: " + colorStack.show )

const animalStack = new MrCoxallStack()
animalStack.push('cow')
animalStack.push('koala')
animalStack.push('parrot')
console.log("\nAnimals: " + animalStack.show)
console.log("Popped animal item: " + animalStack.pop())
console.log("Animals: " + animalStack.show)
console.log(`\nDone.`)
